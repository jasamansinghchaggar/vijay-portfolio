"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";

export function ReviewForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/reviews", { method: "POST", body: JSON.stringify({ instagramUsername: form.get("instagramUsername"), review: form.get("review") }), headers: { "Content-Type": "application/json" } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setState("success");
      setMessage(data.message);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") return <div className="form-success"><div className="success-icon"><Check /></div><p className="eyebrow">Thank you</p><h2>Your words are<br /><em>on their way.</em></h2><p>{message || "Your review is awaiting approval."}</p></div>;

  return <div className="form-layout"><div><p className="eyebrow">Worked together?</p><h2>Share your<br /><em>experience.</em></h2><p className="form-note">Reviews are published after a quick approval — and your Instagram handle keeps them personal.</p></div><form onSubmit={submit}><label htmlFor="instagramUsername">Instagram username</label><div className="input-with-prefix"><span>@</span><input id="instagramUsername" name="instagramUsername" placeholder="yourusername" required maxLength={30} /></div><label htmlFor="review">Your review</label><textarea id="review" name="review" placeholder="What was it like working together?" required minLength={10} maxLength={1000} rows={5} /><div className="form-foot"><p className={state === "error" ? "error-message" : "form-hint"}>{state === "error" ? message : "10–1000 characters"}</p><button className="button button-red" disabled={state === "loading"}>{state === "loading" ? <><LoaderCircle className="spin" size={16} /> Sending</> : <>Submit review <ArrowUpRight size={16} /></>}</button></div></form></div>;
}
