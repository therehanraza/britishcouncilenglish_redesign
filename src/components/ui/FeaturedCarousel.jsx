import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FeaturedCarousel({ items }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  const prev = () => setCurrent((i) => (i === 0 ? items.length - 1 : i - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = items[current];

  return (
    <div className="featured-carousel">
      <div className="featured-carousel__inner">

        {/* Left arrow */}
        <button className="featured-carousel__arrow featured-carousel__arrow--left" onClick={prev} aria-label="Previous">
          <ChevronLeft size={22} />
        </button>

        {/* Image */}
        <div className="featured-carousel__image-wrap">
          <img
            key={current}
            src={slide.image}
            alt={slide.title}
            className="featured-carousel__image"
          />
        </div>

        {/* Right panel */}
        <div className="featured-carousel__panel">
          {/* Dots */}
          <div className="featured-carousel__dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`featured-carousel__dot${i === current ? ' featured-carousel__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <h3 className="featured-carousel__title">{slide.title}</h3>
          <p className="featured-carousel__text">{slide.text}</p>

          <Link to={slide.to} className="featured-carousel__cta">
            {slide.cta}
          </Link>
        </div>

        {/* Right arrow */}
        <button className="featured-carousel__arrow featured-carousel__arrow--right" onClick={next} aria-label="Next">
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
}

export default FeaturedCarousel;