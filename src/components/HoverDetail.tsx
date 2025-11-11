import React, { useState, useRef, useEffect } from 'react';

interface HoverDetailProps {
  children: React.ReactNode;
  content: string;
  title?: string;
}

const HoverDetail: React.FC<HoverDetailProps> = ({ children, content, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const updatePosition = () => {
      const triggerRect = triggerRef.current!.getBoundingClientRect();
      const tooltipRect = tooltipRef.current!.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const gap = 12;
      const minPadding = 8;

      let top = triggerRect.top - tooltipRect.height - gap;
      let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

      if (top < minPadding) {
        top = triggerRect.bottom + gap;
      }

      if (left < minPadding) {
        left = minPadding;
      } else if (left + tooltipRect.width > viewportWidth - minPadding) {
        left = viewportWidth - tooltipRect.width - minPadding;
      }

      setTooltipStyle({
        position: 'fixed',
        top: `${Math.max(minPadding, top)}px`,
        left: `${Math.max(minPadding, left)}px`,
        zIndex: 9999,
        pointerEvents: 'none'
      });
    };

    updatePosition();
    const timer = setTimeout(updatePosition, 0);
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="inline-block"
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          style={tooltipStyle}
          className="hover-detail-tooltip"
        >
          {title && <div className="hover-detail-title">{title}</div>}
          <div className="hover-detail-content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default HoverDetail;
