import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1, // Adjust this to control speed
      lerp: 0.1, // Adjust smoothness
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
