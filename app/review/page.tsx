import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReviewForm } from "../review-form";

export default function ReviewPage() {
  return (
    <main className="review-page">
      <div className="shell review-page-inner">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to portfolio</Link>
        <ReviewForm />
      </div>
    </main>
  );
}
