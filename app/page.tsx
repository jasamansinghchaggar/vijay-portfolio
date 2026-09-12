import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import { ReviewForm } from "./review-form";
import { HoverVideo } from "./hover-video";
import { getApprovedReviews } from "../lib/reviews";

const projects = [
  {
    number: "01",
    title: "The art of showing up",
    video: "/video1.mp4",
  },
  {
    number: "02",
    title: "Made for the in-between",
    video: "/video2.mp4",
  },
  {
    number: "03",
    title: "Ideas in motion",
    video: "/video3.mp4",
  },
  {
    number: "04",
    title: "After the flash",
    video: "/video4.mp4",
  },
];

const aboutServices = [
  ["01", "Video editing"],
  ["02", "Photo editing"],
  ["03", "Color grading"],
  ["04", "Transitions & VFX"],
  ["05", "Reels & Shorts"],
  ["06", "Creative edits"],
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const reviews = await getApprovedReviews();
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Vijay home">
          <span>V</span>ijay<span className="dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-cta"
          href="https://wa.me/918779386289"
          target="_blank"
          rel="noreferrer"
        >
          Work with me <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            Professional Video Editor <span>•</span> Mumbai / Worldwide
          </p>
          <h1 className="display reveal">
            From timeline,
            <br />
            <em>To feeling.</em>
          </h1>
          <p className="hero-intro reveal">
            Turning messy footage into scroll-stopping stories that hold attention and build an audience.
          </p>
          <div className="hero-actions reveal">
            <a className="button button-red" href="#work">
              View my work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <img className="hero-mark-image" src="/hero.jpeg" alt="" />
        </div>
        <div className="scroll-note">
          <span className="scroll-line" /> Scroll to explore
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <p className="section-aside">
            A few things I&apos;ve helped bring to life.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-art">
                <HoverVideo
                  src={project.video}
                  label={`${project.title} video`}
                />
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section shell" id="about">
        <div className="section-head">
          <p className="eyebrow">About VIZ Edits</p>
          <p className="section-aside">Your content. Your vision. Our editing.</p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <h2>
              We turn ordinary content into something
              <br />
              <em>worth watching.</em>
            </h2>
            <p>
              At VIZ Edits, we create high-quality video and photo edits
              designed to make your content stand out. From smooth transitions
              and beat sync to cinematic color grading and creative visual
              effects, we focus on every detail.
            </p>
            <p>
              Whether you&apos;re a creator, athlete, brand, fashion page, or
              business, we help bring your vision to life through editing.
            </p>
            <p>Let&apos;s create something that gets noticed.</p>
          </div>
          <div className="service-list">
            {aboutServices.map(([number, title]) => (
              <div className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <h2>{title}</h2>
                <ArrowUpRight className="service-arrow" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews section shell flex flex-col" id="reviews">
        <div className="section-head">
          <p className="eyebrow">Client reviews</p>
          <p className="section-aside">Good work is a conversation.</p>
        </div>
        <div className="reviews-layout">
          <div className="reviews-intro">
            <h2>
              Made with people
              <br />
              <em>who care.</em>
            </h2>
            <p>
              If we&apos;ve worked together, I&apos;d love to hear what the
              process felt like from your side.
            </p>
            <a className="button button-outline" href="#review-form">
              Leave a review <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="review-marquee" aria-label="Client reviews">
            {reviews.length ? (
              <div className="review-lane">
                <div className="review-track">
                  {[reviews, reviews].map((group, groupIndex) => (
                    <div
                      className="review-group"
                      aria-hidden={groupIndex === 1}
                      key={groupIndex}
                    >
                      {group.map((review) => (
                        <blockquote
                          className="review-card"
                          key={`${groupIndex}-${review.id}`}
                        >
                          <span className="quote-mark">“</span>
                          <p>{review.review}</p>
                          <footer>
                            <a
                              href={`https://instagram.com/${review.instagramUsername}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Instagram size={15} /> @
                              {review.instagramUsername}
                            </a>
                            <span>Verified client</span>
                          </footer>
                        </blockquote>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="review-empty">
                <p className="quote-mark">“</p>
                <p>Be the first to share what it was like working together.</p>
                <a className="text-link" href="#review-form">
                  Leave the first review <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="review-form-section section shell" id="review-form">
        <ReviewForm />
      </section>

      <section className="contact section shell" id="contact">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 className="display">
            Let&apos;s make
            <br />
            <em>something matter.</em>
          </h2>
        </div>
        <a
          className="contact-link"
          href="https://wa.me/918779386289"
          target="_blank"
          rel="noreferrer"
        >
          <span>Get in touch</span>
          <ArrowUpRight size={32} />
        </a>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#top">
          <span>V</span>ijay<span className="dot">.</span>
        </a>
        <p>Video editor / filmmaker</p>
        <div className="footer-links">
          <a
            href="https://instagram.com/viz_edits._77"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a href="mailto:vsingh.7576@gmail.com">
            <Mail size={16} /> Email
          </a>
          <a
            href="https://wa.me/918779386289"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
        <small>© 2026 Vijay</small>
      </footer>
    </main>
  );
}
