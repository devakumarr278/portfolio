import { useEffect, useRef } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FadeUp({ children, className = '', delay = 0, duration = 0.8 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
    if (delay > 0) {
      element.style.transitionDelay = `${delay}s`;
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}