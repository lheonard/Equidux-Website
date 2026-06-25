"use client";

type CarouselArrowsProps = {
  carouselId: string;
  className?: string;
};

export default function CarouselArrows({
  carouselId,
  className = "",
}: CarouselArrowsProps) {
  const scrollCarousel = (direction: "prev" | "next") => {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 8;
    const scrollAmount = card ? card.offsetWidth + gap : 368;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button
        type="button"
        onClick={() => scrollCarousel("prev")}
        className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label="Scroll to previous item"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollCarousel("next")}
        className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label="Scroll to next item"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>
    </div>
  );
}
