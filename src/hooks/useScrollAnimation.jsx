import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (options = {}) => {
  const { threshold = 0.15, once = false } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else {
          if (!once) setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, once]);

  return { ref, isVisible };
};

export default useScrollAnimation;