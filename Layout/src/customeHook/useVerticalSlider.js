import { useEffect } from "react";

const useVerticalSlider = (sliderId, speed = 1) => {
  useEffect(() => {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const clone = slider.cloneNode(true);
    slider.appendChild(clone);

    let scrollPosition = 0;
    const sliderHeight = slider.scrollHeight / 2;

    const scrollSlider = () => {
      scrollPosition += speed;
      if (scrollPosition >= sliderHeight) {
        scrollPosition = 0;
      }
      slider.style.transform = `translateY(-${scrollPosition}px)`;
      requestAnimationFrame(scrollSlider);
    };

    scrollSlider();
  }, [sliderId, speed]);
};

export default useVerticalSlider;
