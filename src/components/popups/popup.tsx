// popup.tsx
import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Icon } from '../svg/svg.container';

interface PopupProps {
  title: string;
  message: string;
  buttons: {
    text: string;
    onClick: () => void;
    borderColor?: string;
  }[];
  icon?: string;
  isOpen: boolean;
  onClose: () => void;
  // New props for draggable functionality
  position: {
    x: number;
    y: number;
  };
  onDrag: (x: number, y: number) => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  buttons,
  icon,
  isOpen,
  onClose,
  position,
  onDrag,
}) => {
  const [dragging, setDragging] = useState(false);
  const [relX, setRelX] = useState(0);
  const [relY, setRelY] = useState(0);

  // Start dragging when mouse is pressed on the title bar
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Only consider left-click to start dragging
    if (e.button !== 0) return;
    setDragging(true);
    // Calculate offset so the popup cursor doesn't jump
    setRelX(e.clientX - position.x);
    setRelY(e.clientY - position.y);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      // Call the parent's onDrag to update position
      onDrag(e.clientX - relX, e.clientY - relY);
    },
    [dragging, onDrag, relX, relY]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Add/remove event listeners on the window for drag
  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  if (!isOpen) return null;

  return (
    // Use absolute positioning and the passed-in x/y to place the popup
    <div
      style={{
        left: position.x,
        top: position.y,
        position: 'absolute',
      }}
      className="font-tempesta_five"
    >
      <div className="bg-popup-body border-2 border-[#000000] border-b-[#000000] border-r-[#000000] shadow-md w-[400px]">
        {/* Title bar (draggable area) */}
        <div
          className="bg-popup-title px-2 py-1 flex justify-between items-center border-b-2 border-[#000000] cursor-move"
          onMouseDown={handleMouseDown}
        >
          <span className="text-white font-bold">{title}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:bg-[#ff0000] px-2 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Body/content */}
        <div className="p-4">
          <div className="flex gap-4">
            {icon && (
              <div className="flex-shrink-0">
                <Icon height={12} width={12} icon={icon} className="w-12 h-12" />
              </div>
            )}
            <div className="text-black">{message}</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4 flex justify-end gap-2 bg-popup-body">
          {buttons.map((button) => (
            <button
              key={button.text}
              type="button"
              onClick={button.onClick}
              className="px-4 py-1 bg-popup-body border-4 border-popup-button active:border-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff] focus:outline-none"
              style={{ borderColor: button.borderColor }}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
