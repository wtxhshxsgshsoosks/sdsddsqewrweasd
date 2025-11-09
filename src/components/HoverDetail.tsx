import React, { useState, useRef, useEffect } from 'react';

interface Position {
  top: number;
  left: number;
}

interface HoverDetailProps {
  children: React.ReactNode;
  content: string;
  title?: string;
}

const HoverDetail: React.FC<HoverDetailProps> = ({ children, content, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current && isVisible) {
        const rect = triggerRef.current.getBoundingClientRect();
        const tooltipHeight = tooltipRef.current?.offsetHeight || 0;

        setPosition({
          top: rect.top - tooltipHeight - 12,
          left: rect.left + rect.width / 2
        });
      }
    };

    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative"
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="hover-detail-tooltip">
            {title && <div className="hover-detail-title">{title}</div>}
            <div className="hover-detail-content">{content}</div>
            <div className="hover-detail-arrow"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverDetail;
