const CATEGORIES = [
  { label: "Power Tools", id: 1 },
  { label: "Hand Tools", id: 2 },
  { label: "Measuring", id: 3 },
  { label: "Safety", id: 4 },
  { label: "Fastening", id: 5 },
  { label: "Plumbing", id: 6 },
  { label: "Electrical", id: 7 },
  { label: "Storage", id: 8 },
];

export default function CategoryTiles() {
  return (
    <section className="bg-[#f9f9f9] pb-10 px-4 sm:px-8 lg:px-[80px] w-full overflow-x-auto lg:overflow-visible">
      {/* Mobile/tablet: horizontal scroll. Desktop: evenly distributed (space-between) */}
      <div className="flex gap-2 sm:gap-3 lg:gap-0 lg:justify-between items-start mx-auto w-full max-w-[1224px] min-w-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col gap-2 items-center shrink-0 group"
          >
            {/* Icon: muted outer ring + inner placeholder (decorative) */}
            <span
              aria-hidden="true"
              className="
                flex items-center justify-center rounded-full
                bg-[#f1f1f1] group-hover:bg-[#e8e8e8] transition-colors
                size-[56px] sm:size-[70px] lg:size-[82px]
              "
            >
              <span className="rounded-full bg-[#e2e2e2] size-[30px] sm:size-[38px] lg:size-[44px]" />
            </span>
            {/* Label */}
            <span className="font-bold text-[10.24px] sm:text-[11px] lg:text-[12.8px] text-[#222] text-center leading-tight whitespace-nowrap">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
