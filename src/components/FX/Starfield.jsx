import { useEffect } from 'react';

const isMobile = window.innerWidth <= 760;

let starCount = !isMobile ? 350 : 50;

console.log(starCount);

const Starfield = () => {
  const stars = Array(starCount).fill(0).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 3}px`,
    delay: `${Math.random() * 5}s`,
    color: `rgb(255, ${Math.random() * 10 + 245}, ${Math.random() * 255})`,
  }));

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            background: star.color,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;