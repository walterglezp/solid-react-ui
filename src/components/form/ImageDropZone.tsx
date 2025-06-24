import React from "react";

import { generateClassnames } from "../../utils/classnames-helper";
import type { FormFieldProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import { Icon } from "../graphic/Icon";
import { InputError } from "./InputError";
import { ScrollBar } from "../common/ScrollBar";
import { resizeImage, fileToB64 } from "../../utils/image-helper";

import "./ImageDropZone.scss";

export interface ImageDropZoneProps {
  className?: string;
  maxImages?: number;
  imageWidth?: number;
  imageHeight?: number;
  accept?: string;
  field: FormFieldProps & { value: string[] };
  onChange(field: FormFieldProps & { value: string[] }): void;
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({
  className,
  maxImages = 13,
  imageWidth = 1024,
  imageHeight = 576,
  accept = "image/jpeg, image/png",
  field,
  onChange,
}) => {
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
    const images: string[] = [];
    for (const file of files) {
      const resized = await new Promise<File>((resolve) => {
        resizeImage(
          file,
          imageWidth,
          imageHeight,
          (result) => resolve(result as File),
          100,
          0,
          "image/jpeg",
          "file"
        );
      });
      const base64 = await fileToB64(resized);
      images.push(base64);
    }
    saveImages(images);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const swapImages = (from: number, to: number) => {
    const images = [...field.value];
    [images[from], images[to]] = [images[to], images[from]];
    validateOnChange({ ...field, value: images }, onChange);
  };

  const deleteImage = (index: number) => {
    const images = [...field.value];
    images.splice(index, 1);
    validateOnChange({ ...field, value: images }, onChange);
  };

  return (
    <div
      className={classnames}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="drop-zone" onClick={triggerInput}>
        <Icon name="images" size={30} className="text-secondary" />
        <div className="drop-text">
          <strong className="text-primary" style={{ cursor: "pointer" }}>
            Choose or drop images
          </strong>
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

      <div className="images-loaded">
        {Array.isArray(field.value) && field.value.length > 0 && (
          <div
            className="main-image draggable-box"
            draggable
            data-box-number={0}
          >
            <Icon
              className="close-icon"
              name="x"
              size={20}
              onClick={() => deleteImage(0)}
            />
            <img src={field.value[0]} alt="preview-main" />
          </div>
        )}

        <ScrollBar variant="grey" height="174px" axis="vertical">
          <div className="small-images-container">
            {Array.from({ length: maxImages - 1 }, (_, i) => (
              <div
                key={i}
                className="image-container draggable-box"
                draggable
                data-box-number={i + 1}
                onDragStart={(e) =>
                  e.dataTransfer.setData("dragFrom", String(i + 1))
                }
                onDrop={(e) => {
                  const from = parseInt(e.dataTransfer.getData("dragFrom"), 10);
                  swapImages(from, i + 1);
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                {field.value[i + 1] ? (
                  <>
                    <Icon
                      className="close-icon"
                      name="x"
                      size={20}
                      onClick={() => deleteImage(i + 1)}
                    />
                    <img src={field.value[i + 1]} alt={`preview-${i + 1}`} />
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </ScrollBar>
      </div>
      {field.error && <InputError error={field.error} />}
    </div>
  );
};

export { ImageDropZone };
