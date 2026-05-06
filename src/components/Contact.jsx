import { useState } from "react";
// import { profile } from "../../public/data";
import SectionHeader from "./SectionHeader";
import MailIcon from "./icons/MailIcon";
import CopyIcon from "./icons/CopyIcon";
import CheckIcon from "./icons/CheckIcon";

export default function Contact() {
  const profile = window.cvData.profile;

  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <SectionHeader label="Contact" />

      <div className="bg-white border border-stone-200 rounded-2xl p-6">
        <p className="text-stone-500 text-sm leading-relaxed mb-5">
          Want to collaborate or have a question? Feel free to reach out anytime
          — I try to respond within 24 hours.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            <MailIcon />
            Send email
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy address"}
          </button>
        </div>

        <p className="text-xs text-stone-400 mt-4">{profile.email}</p>

        {/* Social links */}
        {profile.socials.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-stone-100">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-3 py-1.5 border border-stone-200 rounded-full text-stone-500 hover:border-stone-400 hover:text-stone-800 transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
