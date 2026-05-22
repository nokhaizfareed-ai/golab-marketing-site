'use client';
import { useState } from 'react';

interface Props { images: string[]; title: string }

export function ImageCarousel({ images, title }: Props) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className="blog-carousel">
      <div className="blog-carousel-track">
        <img src={images[idx]} alt={`${title} — image ${idx + 1}`} className="blog-carousel-img" />
        {images.length > 1 && (
          <>
            <button className="blog-carousel-btn blog-carousel-prev" onClick={prev} aria-label="Previous image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="blog-carousel-btn blog-carousel-next" onClick={next} aria-label="Next image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="blog-carousel-dots">
          {images.map((_, i) => (
            <button key={i} className={`blog-carousel-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Image ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
