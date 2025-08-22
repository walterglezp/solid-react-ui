import React, { useState } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import type { FormFieldProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import { Icon } from "../graphic/Icon";
import { InputError } from "./InputError";
import { ScrollBar } from "../common/ScrollBar";
import { ModalDialog } from "../common/ModalDialog";
import { resizeImage, fileToB64 } from "../../utils/image-helper";

import "./ImageDropZone.scss";

export interface ImageDropZoneProps {
  className?: string;
  maxImages?: number;
  minImages?: number;
  imageWidth?: number;
  imageHeight?: number;
  accept?: string;
  field: FormFieldProps & { value: string[] };
  onChange(field: FormFieldProps & { value: string[] }): void;
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({
  className,
  maxImages = 13,
  minImages = 0,
  imageWidth = 1024,
  imageHeight = 576,
  accept = "image/jpeg, image/png",
  field,
  onChange,
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const classnames = generateClassnames({
    "image-drop-zone": true,
    [className || ""]: !!className,
  });

  const triggerInput = () => inputRef.current?.click();

  const saveImages = (base64List: string[]) => {
    const value = Array.isArray(field.value) ? field.value : [];
    validateOnChange({ ...field, value: [...value, ...base64List] }, onChange);
  };

  const handleFiles = async (files: File[]) => {
    const currentImages = Array.isArray(field.value) ? field.value : [];
    const availableSlots = maxImages - currentImages.length;

    if (availableSlots <= 0) {
      // Show error that max images reached
      validateOnChange(
        { ...field, error: `Maximum ${maxImages} images allowed` },
        onChange,
      );
      return;
    }

    // Limit files to available slots
    const filesToProcess = files.slice(0, availableSlots);
    const images: string[] = [];

    for (const file of filesToProcess) {
      const resized = await new Promise<File>((resolve) => {
        resizeImage(
          file,
          imageWidth,
          imageHeight,
          (result) => resolve(result as File),
          100,
          0,
          "image/jpeg",
          "file",
        );
      });
      const base64 = await fileToB64(resized);
      images.push(base64);
    }

    // Clear any previous errors and save images
    saveImages(images);

    // Show warning if some files were rejected
    if (files.length > filesToProcess.length) {
      const rejectedCount = files.length - filesToProcess.length;
      validateOnChange(
        {
          ...field,
          value: [...currentImages, ...images],
          error: `${rejectedCount} image(s) rejected. Maximum ${maxImages} images allowed.`,
        },
        onChange,
      );
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Check if this is an internal drag operation
    const dragData = e.dataTransfer.getData("text/plain");
    const isInternalDrag = dragData.startsWith("internal-drag-");

    // Only handle file drops, not internal image reordering
    if (
      !isInternalDrag &&
      e.dataTransfer.files &&
      e.dataTransfer.files.length > 0
    ) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const reorderImages = (fromIndex: number, toIndex: number) => {
    const images = [...field.value] as string[];
    // Swap the images at fromIndex and toIndex
    [images[fromIndex], images[toIndex]] = [images[toIndex], images[fromIndex]];
    validateOnChange({ ...field, value: images }, onChange);
  };

  const deleteImage = (index: number) => {
    const images = [...field.value];
    images.splice(index, 1);
    validateOnChange({ ...field, value: images }, onChange);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    // Mark this as an internal drag operation
    e.dataTransfer.setData("text/plain", `internal-drag-${index}`);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      reorderImages(draggedIndex, targetIndex);
    }
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const openImageModal = (image: string) => {
    setModalImage(image);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  const images = Array.isArray(field.value) ? (field.value as string[]) : [];
  const mainImage = images[0];
  const thumbnailImages = images.slice(1) as string[];

  // Validate minImages requirement
  React.useEffect(() => {
    if (minImages > 0 && images.length < minImages && images.length > 0) {
      validateOnChange(
        {
          ...field,
          error: `Minimum ${minImages} image${minImages > 1 ? "s" : ""} required. You have ${images.length}.`,
        },
        onChange,
      );
    } else if (images.length >= minImages && field.error?.includes("Minimum")) {
      // Clear minImages error when requirement is met
      validateOnChange({ ...field, error: "" }, onChange);
    }
  }, [images.length, minImages, field, onChange]);

  return (
    <>
      <div
        className={classnames}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* Drop Zone */}
        <div className="drop-zone" onClick={triggerInput}>
          <Icon name="images" size={30} className="text-secondary" />
          <div className="drop-text">
            <strong className="text-primary" style={{ cursor: "pointer" }}>
              Choose or drop images
            </strong>
            {images.length > 0 && (
              <div className="reorder-hint">
                To reorder images, drag and drop them
              </div>
            )}
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              onChange={onChangeFile}
              multiple
              hidden
            />
          </div>
        </div>

        {/* Images Layout */}
        {mainImage && (
          <div className="images-layout">
            {/* Main Image */}
            <div
              className={`main-image ${draggedIndex === 0 ? "dragging" : ""}`}
              draggable
              onDragStart={(e) => handleDragStart(e, 0)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDragDrop(e, 0)}
              onDragEnd={handleDragEnd}
              onClick={() => openImageModal(mainImage)}
            >
              <button
                type="button"
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteImage(0);
                }}
              >
                <Icon name="x" size={16} />
              </button>
              <img src={mainImage} alt="Main preview" />
            </div>

            {/* Thumbnail Grid */}
            {thumbnailImages.length > 0 && (
              <div className="thumbnails-section">
                <ScrollBar variant="grey" height="180px" axis="vertical">
                  <div className="thumbnails-grid">
                    {thumbnailImages.map((image: string, index: number) => {
                      const actualIndex = index + 1;
                      return (
                        <div
                          key={actualIndex}
                          className={`thumbnail ${draggedIndex === actualIndex ? "dragging" : ""}`}
                          draggable
                          onDragStart={(e) => handleDragStart(e, actualIndex)}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDragDrop(e, actualIndex)}
                          onDragEnd={handleDragEnd}
                          onClick={() => openImageModal(image)}
                        >
                          <button
                            type="button"
                            className="delete-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteImage(actualIndex);
                            }}
                          >
                            <Icon name="x" size={14} />
                          </button>
                          <img src={image} alt={`Preview ${actualIndex}`} />
                        </div>
                      );
                    })}
                    {/* Empty slots for visual consistency */}
                    {thumbnailImages.length < maxImages - 1 && (
                      <>
                        {Array.from(
                          { length: maxImages - 1 - thumbnailImages.length },
                          (_, index) => (
                            <div
                              key={`empty-${index}`}
                              className="thumbnail empty"
                            />
                          ),
                        )}
                      </>
                    )}
                  </div>
                </ScrollBar>
              </div>
            )}
          </div>
        )}

        {field.error && <InputError error={field.error} />}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <ModalDialog
          className="image-modal"
          isOpen={true}
          size="lg"
          onClose={closeImageModal}
        >
          <div className="image-modal-body">
            <img src={modalImage} alt="Enlarged view" />
          </div>
        </ModalDialog>
      )}
    </>
  );
};

export { ImageDropZone };
