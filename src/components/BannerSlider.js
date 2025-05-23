import React, { useRef, useState, useEffect, useCallback } from 'react';
import './BannerSlider.css';

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const images = ['/banner.jpg', '/banner2.png'];
  const slides = [images[images.length - 1], ...images, images[0]];

  // 최초 로딩 시 중앙으로 이동 (첫 번째 실제 이미지)
  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slideWidth;
  }, []);

  // 무한 루프 보정 함수
  const checkLoop = useCallback(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;

    if (slider.scrollLeft <= 0) {
      // 왼쪽 끝 → 마지막 실제 이미지로 이동
      slider.scrollLeft = slideWidth * images.length;
    } else if (slider.scrollLeft >= slideWidth * (images.length + 1)) {
      // 오른쪽 끝 → 첫 번째 실제 이미지로 이동
      slider.scrollLeft = slideWidth;
    }
  }, [images.length]);

  // 자동 슬라이드
  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;

    const interval = setInterval(() => {
      if (!slider) return;
      slider.scrollBy({ left: slideWidth, behavior: 'smooth' });

      // 위치 보정
      setTimeout(checkLoop, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [checkLoop]);

  // 드래그 핸들러
  const onDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setStartScrollLeft(sliderRef.current.scrollLeft);
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = startX - x;
    sliderRef.current.scrollLeft = startScrollLeft + walk;
  };

  const onDragEnd = () => {
    setIsDragging(false);
    checkLoop();
  };

  // 수동 버튼 슬라이드
  const scrollLeft = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    setTimeout(checkLoop, 600);
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
    setTimeout(checkLoop, 600);
  };

  return (
    <div className="slider-container">
      <button className="slide-button left" onClick={scrollLeft}>◀</button>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        {slides.map((src, idx) => (
          <img src={src} alt={`Banner${idx}`} key={idx} draggable={false} />
        ))}
      </div>
      <button className="slide-button right" onClick={scrollRight}>▶</button>
    </div>
  );
};

export default BannerSlider;




