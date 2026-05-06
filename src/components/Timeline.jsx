// Props:
//   items     — array of objects
//   roleKey   — string key for the title  (e.g. "role" or "degree")
//   orgKey    — string key for the org    (e.g. "company" or "school")

export default function Timeline({ items, roleKey, orgKey }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">

          {/* Vertical line + dot */}
          <div className="flex flex-col items-center pt-1">
            <div className="w-2 h-2 rounded-full bg-stone-400 flex-shrink-0" />
            {i < items.length - 1 && (
              <div className="w-px flex-1 bg-stone-200 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="pb-7">
            <div className="flex flex-wrap items-baseline gap-x-2 mb-0.5">
              <span className="font-semibold text-stone-900 text-sm">
                {item[roleKey]}
              </span>
              <span className="text-stone-400 text-sm">
                · {item[orgKey]}
              </span>
            </div>
            <p className="text-xs text-stone-400 mb-2">{item.period}</p>
            <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
          </div>

        </div>
      ))}
    </div>
  )
}
