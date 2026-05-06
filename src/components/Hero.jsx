// import { profile } from "../../public/data";
import { scrollToSection } from "../utils/scroll";
import DownloadIcon from "./icons/DownloadIcon";
import MailIcon from "./icons/MailIcon";
import LocationIcon from "./icons/LocationIcon";
import { useEffect, useState } from "react";

export default function Hero() {
  const profile = window.cvData.profile;
  const [iconSrc, setIconSrc] = useState("../../public/Icon.png");

  useEffect(() => {
    const img = new Image();
    img.src = iconSrc;

    // 2. If the image fails to load (404 error), set state to null
    img.onerror = () => {
      console.log("Image not found, using fallback.");
      setIconSrc(null);
    };
  }, []); // Empty array [] ensures the check runs only once on mount

  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Avatar */}
        <div
          className="w-[100px] h-[100px] w-20 h-20 rounded-2xl bg-stone-200 flex items-center justify-center text-2xl font-bold text-stone-500 flex-shrink-0 select-none"
          style={
            iconSrc
              ? { backgroundImage: `url(${iconSrc})`, backgroundSize: "cover" }
              : {}
          }
        >
          {!iconSrc && profile.initials}
        </div>

        <div className="flex-1">
          {/* Title */}
          <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">
            {profile.title}
          </p>

          {/* Name */}
          <h1 className="text-3xl font-bold text-stone-900 mb-1">
            {profile.name}
          </h1>

          {/* Location */}
          <p className="text-sm text-stone-400 flex items-center gap-1.5 mb-4">
            <LocationIcon />
            {profile.location}
          </p>

          {/* Bio */}
          <p className="text-stone-500 leading-relaxed text-sm max-w-lg mb-5">
            {profile.bio}
          </p>

          {/* Social links */}
          {profile.socials.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1.5 border border-stone-300 rounded-full text-stone-600 hover:border-stone-500 hover:text-stone-900 transition-colors"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              <DownloadIcon />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors"
            >
              <MailIcon />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
