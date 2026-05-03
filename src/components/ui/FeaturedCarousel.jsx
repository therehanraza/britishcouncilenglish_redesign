import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FeaturedCarousel({ items }) {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning || index === current) return;
    setPrevIndex(current);
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => {
      setPrevIndex(null);
      setTransitioning(false);
    }, 450);
  }, [transitioning, current]);

  const next = useCallback(() => {
    goTo(current === items.length - 1 ? 0 : current + 1);
  }, [current, items.length, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? items.length - 1 : current - 1);
  }, [current, items.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = items[current];

  return (
    <div className="featured-carousel">
      <div className="featured-carousel__inner">

        <button
          className="featured-carousel__arrow featured-carousel__arrow--left"
          onClick={prev}
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="featured-carousel__image-wrap">
          {prevIndex !== null && (
            <img
              src={items[prevIndex].image}
              alt={items[prevIndex].title}
              className="featured-carousel__image featured-carousel__image--exit"
            />
          )}
          <img
            key={current}
            src={slide.image}
            alt={slide.title}
            className="featured-carousel__image featured-carousel__image--enter"
          />
          <div className="featured-carousel__image-overlay" />
        </div>

        <div className="featured-carousel__panel">
          <div className="featured-carousel__dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`featured-carousel__dot${i === current ? ' featured-carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className={`featured-carousel__content${transitioning ? ' featured-carousel__content--fade' : ''}`}>
            <h3 className="featured-carousel__title">{slide.title}</h3>
            <p className="featured-carousel__text">{slide.text}</p>
          </div>

          <Link to={slide.to} className="featured-carousel__cta">
            {slide.cta}
          </Link>
        </div>

        <button
          className="featured-carousel__arrow featured-carousel__arrow--right"
          onClick={next}
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
}

export default FeaturedCarousel;