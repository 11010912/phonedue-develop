import React, { useRef, useState } from 'react';
import './SmartphonesPage.css';

const SmartphoneSection = ({ title, images }) => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e) => {
    if (!scrollRef.current) return;
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragMove = (e) => {
    if (!isDrag || !scrollRef.current) return;
    scrollRef.current.scrollLeft = startX - e.pageX;
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  return (
    <section className="phone-section">
      <h2 className="section-title">{title}</h2>
      <div
        className="phone-scroll-container"
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {images.map((src, index) => (
          <div className="phone-item" key={index}>
            <img src={src} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

const TabletsPage = () => {
  return (
    <div className="SmartphonesPage">
      <div className="smartphone-sections">
        <SmartphoneSection
          title="Apple"
          images={Array.from({ length: 10 }, (_, i) => `/tablet1-${i + 1}.png`)}
        />
        <SmartphoneSection
          title="삼성"
          images={Array.from({ length: 10 }, (_, i) => `/tablet2-${i + 1}.png`)}
        />
        <SmartphoneSection
          title="Pixel"
          images={Array.from({ length: 10 }, (_, i) => `/tablet3-${i + 1}.png`)}
        />
      </div>
    </div>
  );
};

export default TabletsPage;
