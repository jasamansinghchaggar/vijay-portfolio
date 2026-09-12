import nodemailer from "nodemailer";

function getTransporter() {
  const host = process.env.SMTP_HOST; const port = Number(process.env.SMTP_PORT || 587); const user = process.env.SMTP_USER; const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS are required to send review emails.");
  return nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
}
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character); }
export async function sendReviewNotification(input: { username: string; review: string; approveUrl: string; rejectUrl: string }) {
  const owner = process.env.OWNER_EMAIL; const from = process.env.EMAIL_FROM; if (!owner || !from) throw new Error("OWNER_EMAIL and EMAIL_FROM are required to send review emails.");
  const username = escapeHtml(input.username); const review = escapeHtml(input.review).replace(/\n/g, "<br />");
  await getTransporter().sendMail({ from, to: owner, subject: "New Client Review — Action Required", text: `New client review submitted.\n\nInstagram: @${input.username}\n\n${input.review}\n\nApprove: ${input.approveUrl}\nReject: ${input.rejectUrl}`, html: `<div style="font-family:Arial,sans-serif;max-width:600px;color:#171717"><p style="color:#e74735;font-weight:bold;letter-spacing:.08em">NEW CLIENT REVIEW</p><h1>Action required</h1><p><strong>Instagram:</strong> @${username}</p><blockquote style="border-left:3px solid #e74735;padding-left:16px;line-height:1.6">${review}</blockquote><p><a href="${input.approveUrl}" style="background:#18864b;color:white;padding:12px 18px;text-decoration:none;display:inline-block;margin-right:8px">Approve review</a><a href="${input.rejectUrl}" style="background:#333;color:white;padding:12px 18px;text-decoration:none;display:inline-block">Reject review</a></p></div>` });
}
