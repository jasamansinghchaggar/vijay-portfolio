import { NextResponse } from "next/server";
import { z } from "zod";
import { createPendingReview, isDuplicateReview } from "../../../lib/reviews";

const reviewSchema = z.object({
  instagramUsername: z.string().trim().transform((value) => value.replace(/^@/, "").toLowerCase()).pipe(z.string().min(1, "Please enter your Instagram username.").max(30).regex(/^[a-z0-9._]+$/, "Use only letters, numbers, periods or underscores.")),
  review: z.string().trim().min(10, "Your review must be at least 10 characters.").max(1000, "Your review must be under 1000 characters."),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    const now = Date.now(); const recent = (attempts.get(ip) || []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= MAX_ATTEMPTS) return NextResponse.json({ message: "Please wait before submitting another review." }, { status: 429 });
    recent.push(now); attempts.set(ip, recent);
    const parsed = reviewSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: parsed.error.issues[0]?.message || "Please check your details." }, { status: 400 });
    if (await isDuplicateReview(parsed.data.instagramUsername, parsed.data.review)) return NextResponse.json({ message: "This review has already been submitted." }, { status: 409 });
    await createPendingReview(parsed.data.instagramUsername, parsed.data.review);
    return NextResponse.json({ success: true, message: "Your review is awaiting approval." }, { status: 201 });
  } catch (error) {
    console.error("Review submission failed", error);
    return NextResponse.json({ message: "Reviews are temporarily unavailable. Please try again later." }, { status: 500 });
  }
}

const attempts = new Map<string, number[]>(); const WINDOW_MS = 60 * 60 * 1000; const MAX_ATTEMPTS = 3;
