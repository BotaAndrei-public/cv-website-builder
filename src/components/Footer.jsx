// import { profile } from "../../public/data"

export default function Footer() {
  const profile = window.cvData.profile;
  return (
    <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-400">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
