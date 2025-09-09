import React, { useState, useEffect, useCallback } from "react";
import { ModalDialog } from "../common/ModalDialog";
import { Icon } from "./Icon";
import { generateClassnames } from "../../utils/classnames-helper";
import "./ImageViewer.scss";

export type ImageViewerProps = {
  /** Array of image URLs to display */
  images: string[];
  /** Whether the viewer is open */
  isOpen: boolean;
  /** Callback when the viewer is closed */
  onClose: () => void;
  /** Initial image index to display */
  initialIndex?: number;
  /** CSS class name */
  className?: string;
  /** Alt text for images (can be array or single string) */
  altText?: string | string[];
  /** Show image counter (e.g., "1 of 5") */
  showCounter?: boolean;
  /** Show navigation arrows */
  showNavigation?: boolean;
  /** Enable keyboard navigation */
  enableKeyboardNavigation?: boolean;
};

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  className,
  altText,
  showCounter = true,
  showNavigation = true,
  enableKeyboardNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset current index when images change or initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, images]);

  // Ensure current index is within bounds
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(Math.max(0, images.length - 1));
    } else if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, enableKeyboardNavigation, goToPrevious, goToNext, onClose]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const currentAltText = Array.isArray(altText)
    ? altText[currentIndex] || `Image ${currentIndex + 1}`
    : altText || `Image ${currentIndex + 1}`;

  const classnames = generateClassnames({
    "image-viewer": true,
    [className ?? ""]: !!className,
  });

  const hasMultipleImages = images.length > 1;

  return (
    <ModalDialog
      className={classnames}
      isOpen={isOpen}
      size="xl"
      onClose={onClose}
    >
      <div className="image-viewer__content">
        {/* Navigation - Previous */}
        {hasMultipleImages && showNavigation && (
          <button
            className="image-viewer__nav image-viewer__nav--previous"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <Icon name="chevron-left" size={24} />
          </button>
        )}

        {/* Image Container */}
        <div className="image-viewer__image-container">
          <img
            src={currentImage}
            alt={currentAltText}
            className="image-viewer__image"
          />
        </div>

        {/* Navigation - Next */}
        {hasMultipleImages && showNavigation && (
          <button
            className="image-viewer__nav image-viewer__nav--next"
            onClick={goToNext}
            aria-label="Next image"
          >
            <Icon name="chevron-right" size={24} />
          </button>
        )}

        {/* Counter */}
        {hasMultipleImages && showCounter && (
          <div className="image-viewer__counter">
            {currentIndex + 1} of {images.length}
          </div>
        )}

        {/* Close button */}
        <button
          className="image-viewer__close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <Icon name="x" size={20} />
        </button>
      </div>
    </ModalDialog>
  );
};

export { ImageViewer };
