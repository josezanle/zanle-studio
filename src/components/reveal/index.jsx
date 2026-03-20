import useScrollAnimation from "@/hooks/useScrollAnimation";

const animations = {
  "fade-up": {
    hidden: "opacity: 0; transform: translateY(40px);",
    visible: "opacity: 1; transform: translateY(0);",
  },
  "fade-down": {
    hidden: "opacity: 0; transform: translateY(-40px);",
    visible: "opacity: 1; transform: translateY(0);",
  },
  "fade-left": {
    hidden: "opacity: 0; transform: translateX(40px);",
    visible: "opacity: 1; transform: translateX(0);",
  },
  "fade-right": {
    hidden: "opacity: 0; transform: translateX(-40px);",
    visible: "opacity: 1; transform: translateX(0);",
  },
  "fade": {
    hidden: "opacity: 0;",
    visible: "opacity: 1;",
  },
  "zoom": {
    hidden: "opacity: 0; transform: scale(0.9);",
    visible: "opacity: 1; transform: scale(1);",
  },
};

const Reveal = ({
  children,
  animation = "fade-up",
  duration = 600,
  delay = 0,
  threshold = 0.15,
  once = false,
  className = "",
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, once });
  const anim = animations[animation] || animations["fade-up"];

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
      <style jsx>{`
        .reveal {
          ${isVisible ? anim.visible : anim.hidden}
          transition: opacity ${duration}ms ease ${delay}ms,
                      transform ${duration}ms ease ${delay}ms;
          will-change: opacity, transform;
        }
      `}</style>
    </div>
  );
};

export default Reveal;