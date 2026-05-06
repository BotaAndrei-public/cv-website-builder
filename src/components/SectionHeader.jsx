export default function SectionHeader({ label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 whitespace-nowrap">
        {label}
      </h2>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  )
}
