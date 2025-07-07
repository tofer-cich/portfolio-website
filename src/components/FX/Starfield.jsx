import { useEffect } from 'react';

const Starfield = () => {
  useEffect(() => {
    const container = document.querySelector('.starfield');
    if (!container) return;
    console.log(container);

    // Clear previous stars (if any)
    container.innerHTML = '';

    // Generate stars
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);

  return <div className="starfield" />;
};

export default Starfield;