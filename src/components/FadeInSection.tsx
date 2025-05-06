import React, { ReactNode, CSSProperties } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '-100px',
  className = '',
  style = {},
  delay = 0
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
  });

  const dynamicStyle: CSSProperties = {
    ...style,
    transitionDelay: delay > 0 ? `${delay}ms` : undefined,
  };

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={dynamicStyle}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 