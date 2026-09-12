# Product Requirements Document (PRD)

## Video Editor Portfolio + Client Review Platform

**Version:** 1.0
**Status:** Draft
**Primary Stack:** Next.js + TypeScript + Tailwind CSS + PostgreSQL (Neon)
**Animation:** GSAP + Lenis
**Design:** Red + Black
**Primary Objective:** Showcase the editor's work and build social proof through verified/approved client reviews.

---

# 1. Product Overview

A minimal, high-quality portfolio website for a video editor.

The website has two primary purposes:

1. **Showcase the editor's work and services.**
2. **Collect client reviews and display approved reviews publicly.**

The review system is the key differentiating feature.

Clients can submit a review along with their **Instagram username**, which is mandatory. Submitted reviews are initially marked as `PENDING`.

The portfolio owner receives an email containing the submitted review with **Approve** and **Reject** actions. The selected action determines whether the review becomes publicly visible.

---

# 2. Goals

## Primary Goals

* Create a professional portfolio for a video editor.
* Keep the UI minimal and visually focused.
* Showcase selected editing work.
* Allow clients to submit reviews without creating an account.
* Require an Instagram username for review attribution.
* Automatically notify the portfolio owner about new reviews.
* Allow approval/rejection directly from email.
* Display only approved reviews publicly.
* Make Instagram usernames clickable.
* Provide smooth, premium scrolling and subtle animations.

## Secondary Goals

* Make the website responsive across desktop, tablet and mobile.
* Keep the review system simple to maintain.
* Prevent spam and unauthorized review manipulation.
* Make the architecture extensible for future admin functionality.

---

# 3. Non-Goals

The initial version will **not** include:

* Client accounts/login.
* Public user profiles.
* Complex CMS functionality.
* Payment processing.
* Booking/scheduling.
* Chat functionality.
* Review editing by clients.
* Public review deletion.
* Rating/review analytics.
* Multi-admin management.
* Full admin dashboard.

These can be added in future versions.

---

# 4. Target Users

## 4.1 Portfolio Visitor

A potential client who wants to:

* Understand who the editor is.
* See previous work.
* Understand available services.
* Read client experiences.
* Contact/hire the editor.

## 4.2 Existing Client

A person who has worked with the editor and wants to:

* Submit feedback.
* Attribute their feedback to their Instagram profile.

## 4.3 Portfolio Owner

The editor who wants to:

* Showcase work.
* Receive reviews.
* Approve/reject submitted reviews.
* Build social proof.

---

# 5. User Journeys

## 5.1 Potential Client Journey

```text
Landing Page
     ↓
Hero
     ↓
Selected Work
     ↓
Services
     ↓
Client Reviews
     ↓
Contact CTA
     ↓
Contact / Hire
```

---

## 5.2 Review Submission Journey

```text
Client
  ↓
Clicks "Leave a Review"
  ↓
Review Modal/Page
  ↓
Enters Instagram Username
  ↓
Writes Review
  ↓
Submit
  ↓
Validation
  ↓
Database
  ↓
Status = PENDING
  ↓
Owner receives email
```

---

## 5.3 Review Approval Journey

```text
Owner receives email
       ↓
Reads review
       ↓
       ├── Approve
       │     ↓
       │  Status = APPROVED
       │     ↓
       │  Review appears publicly
       │
       └── Reject
             ↓
          Status = REJECTED
             ↓
          Remains hidden
```

---

# 6. Information Architecture

The website will primarily be a single-page portfolio.

```text
/
│
├── Hero
├── Work
├── Services
├── Reviews
└── Contact
```

Review submission can be implemented as a modal or dedicated route.

Recommended:

```text
/review
```

This gives the editor a shareable review URL.

Example:

```text
yourportfolio.com/review
```

---

# 7. Page Requirements

# 7.1 Navigation

### Requirements

Navigation should contain:

* Logo/name
* Work
* Services
* Reviews
* Contact
* CTA: `Work With Me`

### Behavior

Desktop:

```text
Logo                         Work Services Reviews Contact
                                                        [Hire Me]
```

Mobile:

* Hamburger menu
* Smooth navigation
* Sticky/fixed navigation

---

# 8. Hero Section

## Objective

Immediately communicate:

* Who the editor is.
* What they do.
* Why someone should continue exploring.

### Content

```text
[NAME]

VIDEO EDITOR

I turn raw footage into
content worth watching.

[ View My Work ]
[ Work With Me ]
```

Actual copy should be finalized during implementation.

### Requirements

* Large typography.
* Black background.
* Red accent.
* Minimal visual noise.
* GSAP entrance animation.
* CTA hover animation.
* Scroll indicator.

---

# 9. Work Section

## Objective

Showcase the editor's best work.

### Layout

Desktop:

```text
┌────────────────────┐ ┌────────────────────┐
│                    │ │                    │
│      PROJECT       │ │      PROJECT       │
│                    │ │                    │
└────────────────────┘ └────────────────────┘

┌────────────────────┐ ┌────────────────────┐
│                    │ │                    │
│      PROJECT       │ │      PROJECT       │
│                    │ │                    │
└────────────────────┘ └────────────────────┘
```

Mobile:

Single-column layout.

### Project Card

Each card may contain:

* Thumbnail/video preview
* Project title
* Category
* Short description
* External link if applicable

Example:

```text
YouTube Editing
Creator Growth Campaign
```

### Interaction

On hover:

* Subtle scale.
* Image/video movement.
* Red accent.
* Cursor interaction if appropriate.

Animations should remain performant.

---

# 10. Services Section

## Objective

Clearly communicate what the editor offers.

### Initial Services

Possible categories:

* Short-form editing
* YouTube editing
* Reels
* Shorts
* Social media content
* Advertisements
* Podcast editing

The final services should be configurable in the code/content layer.

### Design

Minimal cards or typography-based layout.

Example:

```text
01
SHORT FORM

Reels, Shorts and social
content optimized for retention.

02
LONG FORM

YouTube videos, podcasts
and creator content.

03
COMMERCIAL

Ads, promotional videos
and branded content.
```

---

# 11. Reviews Section

## Objective

This is the **core feature of the website**.

The section should provide strong social proof while making it easy for previous clients to contribute additional reviews.

### Header

```text
CLIENT REVIEWS

What people I've worked with say.
```

### Review Card

Each approved review should display:

```text
"Review content..."

@username
Instagram
```

### Instagram

The Instagram username must be clickable.

Example:

```text
Instagram icon   @clientname
```

Clicking opens:

```text
https://instagram.com/clientname
```

in a new tab.

### Review Card Requirements

* Review text.
* Instagram username.
* Instagram icon.
* Clickable profile.
* Optional submission date if desired.
* No fake ratings.
* No emojis.

---

# 12. Review Submission System

## 12.1 CTA

The Reviews section should include:

```text
Worked with me?

Share your experience.

[ Leave a Review ]
```

Clicking opens the review form.

---

# 12.2 Review Form

### Required Fields

| Field              | Type     | Required |
| ------------------ | -------- | -------: |
| Instagram Username | Text     |      Yes |
| Review             | Textarea |      Yes |

### Form

```text
LEAVE A REVIEW

Instagram Username
@____________________

Your Review
┌─────────────────────────────┐
│                             │
│                             │
│                             │
└─────────────────────────────┘

[ Submit Review ]
```

---

# 13. Review Validation

The backend must validate all submitted data.

## Instagram Username

Requirements:

* Required.
* Trim whitespace.
* Remove optional `@`.
* Validate allowed Instagram username characters.
* Store normalized username.

Recommended normalization:

```text
@JohnDoe
   ↓
johndoe
```

## Review

Requirements:

* Required.
* Trim whitespace.
* Minimum length.
* Maximum length.
* Reject empty/whitespace-only content.

Recommended:

```text
min: 10 characters
max: 1000 characters
```

The exact limits can be adjusted.

---

# 14. Review Database

PostgreSQL database hosted on Neon.

## Table: `reviews`

```text
reviews
────────────────────────────
id
instagram_username
review
status
created_at
updated_at
```

### Suggested Schema

```sql
id                  UUID PRIMARY KEY
instagram_username  VARCHAR(30) NOT NULL
review              TEXT NOT NULL
status              ENUM NOT NULL
created_at          TIMESTAMP NOT NULL
updated_at          TIMESTAMP NOT NULL
```

### Status

```text
PENDING
APPROVED
REJECTED
```

Default:

```text
PENDING
```

---

# 15. Review API

## POST `/api/reviews`

Creates a new review.

### Request

```json
{
  "instagramUsername": "clientname",
  "review": "The editing was exactly what I was looking for."
}
```

### Server Process

```text
Request
  ↓
Validate input
  ↓
Normalize Instagram username
  ↓
Check spam/rate limit
  ↓
Create review
  ↓
status = PENDING
  ↓
Send notification email
  ↓
Return success
```

### Response

```json
{
  "success": true,
  "message": "Review submitted successfully."
}
```

---

# 16. Review Approval System

The portfolio owner should **not need to log into a dashboard** for the MVP.

Approval happens directly from email.

## Email Trigger

After successful review submission:

```text
Database Insert
      ↓
Email Service
      ↓
Owner Email
```

---

# 17. Approval Email

### Subject

```text
New Client Review — Action Required
```

### Body

```text
New client review submitted.

Instagram:
@clientname

Review:

"The editing was exactly what I wanted..."

────────────────────────

[ APPROVE REVIEW ]

[ REJECT REVIEW ]
```

The buttons should be visually distinct.

---

# 18. Secure Approval Links

Do **not** expose a simple endpoint such as:

```text
/api/reviews/123/approve
```

Instead, generate a secure token.

Example conceptual structure:

```text
/api/reviews/action?token=<signed-token>&action=approve
```

The token should:

* Be cryptographically secure.
* Be associated with a specific review.
* Encode/identify the allowed action.
* Have an expiration time.
* Be invalidated after use.

### Recommended

Use a dedicated approval token table if stronger revocation/auditing is required:

```text
review_actions
────────────────────────
id
review_id
token_hash
action
expires_at
used_at
created_at
```

For the MVP, a signed expiring token can also be sufficient.

---

# 19. Approval Logic

## Approve

```text
Token validation
      ↓
Check expiration
      ↓
Check review status
      ↓
Update:
status = APPROVED
      ↓
Show confirmation
```

## Reject

```text
Token validation
      ↓
Check expiration
      ↓
Check review status
      ↓
Update:
status = REJECTED
      ↓
Show confirmation
```

### Idempotency

If a review has already been approved/rejected:

```text
Review already processed.
```

The system must not unexpectedly change its status from repeated clicks.

---

# 20. Public Reviews API

The public portfolio should only retrieve approved reviews.

Conceptually:

```sql
SELECT *
FROM reviews
WHERE status = 'APPROVED'
ORDER BY created_at DESC;
```

Never expose:

* Pending reviews.
* Rejected reviews.
* Approval tokens.
* Internal metadata.

---

# 21. Email System

The implementation should use a transactional email provider.

The email service must support:

* HTML emails.
* Secure action links.
* Reliable delivery.
* Server-side API access.

The provider can be selected during implementation.

Environment variables:

```env
DATABASE_URL=
EMAIL_API_KEY=
OWNER_EMAIL=
REVIEW_ACTION_SECRET=
```

---

# 22. Spam Protection

Because review submission is public, basic abuse protection is required.

### MVP

Implement:

* Server-side validation.
* Request rate limiting.
* Review length limits.
* Basic duplicate detection.
* Input sanitization.

### Recommended

Rate-limit review submissions by IP.

Example:

```text
Maximum:
3 review submissions / hour / IP
```

Exact limits can be adjusted.

If a CAPTCHA is introduced, it should only be added if spam becomes a practical problem.

---

# 23. Security Requirements

## General

* Never trust client-side validation.
* Validate all inputs server-side.
* Use parameterized database queries/ORM.
* Keep database credentials server-side.
* Keep email API credentials server-side.
* Never expose approval secrets to frontend JavaScript.

## XSS Prevention

Review content must be rendered as plain text.

Do not use:

```tsx
dangerouslySetInnerHTML
```

for user-submitted reviews.

## Approval Security

Approval/rejection URLs must use:

* Signed/random tokens.
* Expiration.
* Server-side verification.
* One-time use where applicable.

---

# 24. Design System

## Color Palette

### Background

```text
#050505
```

### Surface

```text
#0D0D0D
```

### Border

```text
#242424
```

### Primary Red

```text
#E50914
```

### Bright Red

```text
#FF1A24
```

### Primary Text

```text
#F5F5F5
```

### Secondary Text

```text
#8A8A8A
```

---

# 25. Typography

The typography should feel:

* Modern.
* Editorial.
* Bold.
* Minimal.

Use a maximum of 1–2 font families.

Recommended approach:

```text
Display:
Bold/Black sans-serif

Body:
Clean sans-serif
```

Large headings should create strong visual hierarchy.

---

# 26. Iconography

No emojis.

Use icon packs exclusively.

Recommended:

**Lucide React** for UI icons.

Icons required for:

* Instagram
* Arrow
* Menu
* Close
* External link
* Play
* Mail
* Check/approval
* Reject

Brand-specific icons should use an appropriate icon source rather than approximating them with text or emoji.

---

# 27. Animation Requirements

## Lenis

Use Lenis for smooth scrolling.

Expected behavior:

```text
Native scroll
     ↓
Lenis
     ↓
Smooth scrolling
```

---

## GSAP

Use GSAP + ScrollTrigger.

### Hero

* Text reveal.
* CTA entrance.

### Work

* Cards reveal when entering viewport.
* Subtle image movement.

### Services

* Staggered entrance.

### Reviews

* Review cards reveal sequentially.

### Contact

* CTA entrance.

---

# 28. Animation Principles

Animations must:

* Be subtle.
* Feel intentional.
* Not interfere with usability.
* Avoid excessive transitions.
* Respect reduced-motion preferences.

For users with:

```text
prefers-reduced-motion: reduce
```

animations should be reduced/disabled.

---

# 29. Responsive Design

## Desktop

Primary design target:

```text
1440px+
```

## Tablet

```text
768px – 1439px
```

## Mobile

```text
<768px
```

### Mobile Requirements

* Navigation becomes hamburger menu.
* Work cards become single column.
* Review cards become single column.
* Buttons remain touch-friendly.
* No horizontal overflow.
* Typography scales appropriately.

---

# 30. Contact Section

Simple CTA.

```text
LET'S WORK TOGETHER

Have a project in mind?

[ Get In Touch ]
```

Possible contact methods:

* Email.
* Instagram.
* WhatsApp, if desired.

The MVP should avoid creating a complex contact management system.

---

# 31. Footer

Minimal footer:

```text
[Name]

Video Editor

Instagram
Email

© 2026 [Name]
```

---

# 32. Technical Architecture

```text
                    ┌──────────────────┐
                    │     Browser      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Next.js       │
                    │   App Router     │
                    └───────┬──────────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
       Portfolio UI                Review API
                                      │
                                      ▼
                               ┌──────────────┐
                               │ Neon Postgres│
                               └──────┬───────┘
                                      │
                                      ▼
                               Email Provider
                                      │
                              ┌───────┴───────┐
                              ▼               ▼
                          APPROVE           REJECT
                              │               │
                              └───────┬───────┘
                                      ▼
                               Review Status
```

---

# 33. Recommended Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   │
│   ├── review/
│   │   └── page.tsx
│   │
│   └── api/
│       └── reviews/
│           ├── route.ts
│           └── action/
│               └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── Services.tsx
│   │   ├── Reviews.tsx
│   │   └── Contact.tsx
│   │
│   ├── reviews/
│   │   ├── ReviewCard.tsx
│   │   ├── ReviewForm.tsx
│   │   └── ReviewModal.tsx
│   │
│   └── ui/
│
├── lib/
│   ├── db.ts
│   ├── reviews.ts
│   ├── email.ts
│   ├── validation.ts
│   └── review-token.ts
│
├── db/
│   ├── schema.ts
│   └── migrations/
│
└── styles/
```

---

# 34. Database ORM

Recommended:

```text
Drizzle ORM
```

Reason:

* Lightweight.
* Type-safe.
* Works well with PostgreSQL.
* Good fit for a relatively small application.
* Straightforward Neon integration.

Alternative:

```text
Prisma
```

Both are acceptable, but the MVP does not require Prisma's additional abstraction.

---

# 35. Performance Requirements

The portfolio is primarily a visual marketing website, so performance is important.

### Requirements

* Optimized images.
* Lazy-load project media.
* Avoid loading all videos immediately.
* Use responsive image sizes.
* Minimize JavaScript where possible.
* Keep animations GPU-friendly.
* Avoid unnecessary client components.

### Target

Aim for:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

under reasonable network/device conditions.

---

# 36. SEO

The portfolio should have basic SEO.

### Metadata

```text
title
description
Open Graph image
Twitter/X metadata
canonical URL
```

### Example

```text
[Name] — Video Editor
```

### Structured Data

Potentially add:

```text
Person
ProfessionalService
```

structured data where appropriate.

---

# 37. Accessibility

Requirements:

* Semantic HTML.
* Proper heading hierarchy.
* Keyboard navigation.
* Visible focus states.
* Accessible form labels.
* Accessible modal behavior.
* Sufficient contrast.
* Alt text for meaningful images.
* `aria-label` for icon-only buttons.
* Reduced-motion support.

---

# 38. Review UX States

The review system must handle all major states.

### Empty

```text
No reviews yet.
```

### Loading

Skeleton cards.

### Submission

```text
Submitting...
```

### Success

```text
Review submitted.

Your review is awaiting approval.
```

### Validation Error

```text
Please enter your Instagram username.
```

### Server Error

```text
Something went wrong.
Please try again.
```

---

# 39. Admin Email UX States

## Pending

```text
New review requires approval.
```

## Approved

```text
Review approved successfully.
```

## Rejected

```text
Review rejected successfully.
```

## Expired

```text
This approval link has expired.
```

## Already Processed

```text
This review has already been processed.
```

---

# 40. Functional Requirements

| ID    | Requirement                       | Priority |
| ----- | --------------------------------- | -------- |
| FR-01 | Display editor information        | P0       |
| FR-02 | Display portfolio work            | P0       |
| FR-03 | Display services                  | P0       |
| FR-04 | Display approved reviews          | P0       |
| FR-05 | Submit review                     | P0       |
| FR-06 | Require Instagram username        | P0       |
| FR-07 | Store review in Neon PostgreSQL   | P0       |
| FR-08 | Default new reviews to PENDING    | P0       |
| FR-09 | Send owner email after submission | P0       |
| FR-10 | Approve review from email         | P0       |
| FR-11 | Reject review from email          | P0       |
| FR-12 | Display only approved reviews     | P0       |
| FR-13 | Link Instagram username           | P0       |
| FR-14 | Rate-limit submissions            | P1       |
| FR-15 | Responsive UI                     | P0       |
| FR-16 | GSAP animations                   | P1       |
| FR-17 | Lenis scrolling                   | P1       |
| FR-18 | SEO metadata                      | P1       |
| FR-19 | Accessibility                     | P1       |

---

# 41. Review Data Model

```text
Review
│
├── id
├── instagramUsername
├── review
├── status
├── createdAt
└── updatedAt
```

Potential future additions:

```text
clientName
avatarUrl
rating
projectType
featured
displayOrder
```

These should **not** be added to the MVP unless required.

---

# 42. Content Management

For the MVP, portfolio content can be maintained directly in code/configuration.

Example:

```ts
const projects = [
  {
    title: "...",
    category: "...",
    thumbnail: "...",
    videoUrl: "..."
  }
];
```

A CMS is unnecessary initially.

Reviews are the only dynamically managed content.

---

# 43. Environment Configuration

```env
DATABASE_URL=

EMAIL_API_KEY=
OWNER_EMAIL=

REVIEW_ACTION_SECRET=

NEXT_PUBLIC_SITE_URL=
```

If an email provider requires additional configuration:

```env
EMAIL_FROM=
```

---

# 44. Deployment

Recommended:

```text
Frontend/API:
Vercel

Database:
Neon

Email:
Transactional email provider
```

Deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Neon PostgreSQL
```

---

# 45. Error Handling

All API endpoints should return predictable responses.

Example:

```json
{
  "success": false,
  "error": "INVALID_INPUT"
}
```

Possible errors:

```text
INVALID_INPUT
RATE_LIMITED
REVIEW_NOT_FOUND
INVALID_TOKEN
TOKEN_EXPIRED
REVIEW_ALREADY_PROCESSED
DATABASE_ERROR
EMAIL_ERROR
INTERNAL_ERROR
```

The UI should never expose raw database or server errors.

---

# 46. Analytics

Analytics are not required for MVP but can be added later.

Potential metrics:

* Portfolio visits.
* Work clicks.
* Contact CTA clicks.
* Review submissions.
* Review approval rate.
* Instagram clicks.

---

# 47. Future Roadmap

## Phase 2

### Admin Dashboard

```text
/admin
```

Features:

* Login.
* Pending reviews.
* Approved reviews.
* Rejected reviews.
* Delete review.
* Restore review.
* Search/filter.

### Review Management

* Feature specific reviews.
* Reorder reviews.
* Hide approved reviews.
* Add internal notes.

---

## Phase 3

Potential:

* Client ratings.
* Client avatars.
* Project-specific reviews.
* Review sharing links.
* Review request links.
* Automated review request emails.
* Analytics dashboard.
* CMS for portfolio projects.

---

# 48. MVP Definition of Done

The MVP is complete when:

### Portfolio

* [ ] Hero is implemented.
* [ ] Work section is implemented.
* [ ] Services section is implemented.
* [ ] Reviews section is implemented.
* [ ] Contact section is implemented.
* [ ] Footer is implemented.
* [ ] Responsive behavior works.

### Reviews

* [ ] Client can submit review.
* [ ] Instagram username is mandatory.
* [ ] Review is validated.
* [ ] Review is stored in Neon.
* [ ] New review gets `PENDING` status.
* [ ] Owner receives notification email.
* [ ] Email contains Approve action.
* [ ] Email contains Reject action.
* [ ] Approval changes status to `APPROVED`.
* [ ] Rejection changes status to `REJECTED`.
* [ ] Only approved reviews appear publicly.
* [ ] Instagram username links to Instagram profile.
* [ ] Approval links are secured.
* [ ] Expired/invalid tokens are handled.

### UX

* [ ] Lenis scrolling works.
* [ ] GSAP animations work.
* [ ] Reduced-motion behavior works.
* [ ] No emojis are used.
* [ ] Icons come from icon packs.
* [ ] Keyboard navigation works.
* [ ] Forms are accessible.

### Production

* [ ] Environment variables configured.
* [ ] Database migrations configured.
* [ ] Production database connected.
* [ ] Email delivery tested.
* [ ] Mobile tested.
* [ ] SEO metadata configured.
* [ ] Error handling implemented.
* [ ] Rate limiting implemented.

---

# 49. Success Criteria

The project should be considered successful if:

1. A visitor can understand the editor's offering within seconds.
2. The editor's work is the primary visual focus.
3. Client reviews provide credible social proof.
4. A client can submit a review in under one minute.
5. The owner can approve/reject a review without visiting an admin dashboard.
6. An approved review appears on the portfolio automatically.
7. Spam/invalid submissions cannot directly appear publicly.
8. The website remains fast despite GSAP/Lenis animations.
9. The entire experience works cleanly on mobile.

---

# 50. Final Product Architecture

```text
                         PORTFOLIO
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
        WORK             SERVICES          REVIEWS
                                              │
                                              ▼
                                      ┌───────────────┐
                                      │ Leave Review  │
                                      └───────┬───────┘
                                              │
                                              ▼
                                      ┌───────────────┐
                                      │ Review Form   │
                                      │ Instagram *   │
                                      │ Review *      │
                                      └───────┬───────┘
                                              │
                                              ▼
                                      ┌───────────────┐
                                      │ Next.js API   │
                                      └───────┬───────┘
                                              │
                                              ▼
                                      ┌───────────────┐
                                      │ Neon Postgres │
                                      │   PENDING     │
                                      └───────┬───────┘
                                              │
                                              ▼
                                      ┌───────────────┐
                                      │ Email Owner   │
                                      └───────┬───────┘
                                              │
                              ┌───────────────┴───────────────┐
                              ▼                               ▼
                         APPROVE                           REJECT
                              │                               │
                              ▼                               ▼
                         APPROVED                         REJECTED
                              │                               │
                              ▼                               X
                       PUBLIC REVIEW                    NOT DISPLAYED
```

**Core principle:** keep the portfolio itself extremely simple; put the engineering complexity into the **review submission, moderation, security, and email workflow**. This gives the site a clean frontend while still providing a useful dynamic feature that can grow with the editor's client base.
