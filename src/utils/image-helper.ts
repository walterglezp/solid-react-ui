import { ALLOWED_IMAGE_TYPES } from "../constants/image";

type ImageContentType = "image/jpeg" | "image/png";

export const isImage = (file: File): boolean => {
  return ALLOWED_IMAGE_TYPES.includes(file.type);
};

export const fileToB64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const resizeAndRotateImage = (
  image: HTMLImageElement,
  newWidth: number,
  newHeight: number,
  contentType: ImageContentType = "image/jpeg",
  quality = 100,
  rotation = 0,
): string => {
  const qualityDecimal = quality / 100;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (rotation === 90 || rotation === 270) {
    canvas.width = newHeight;
    canvas.height = newWidth;
  } else {
    canvas.width = newWidth;
    canvas.height = newHeight;
  }

  if (ctx) {
    ctx.save();
    if (rotation !== 0) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
    }
    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    ctx.restore();
  }

  return canvas.toDataURL(contentType, qualityDecimal);
};

export const b64toByteArrays = (base64: string): BlobPart[] => {
  const sliceSize = 512;
  const byteCharacters = atob(
    base64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, ""),
  );
  const byteArrays: BlobPart[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return byteArrays;
};

export const b64toBlob = (b64: string, contentType: ImageContentType): Blob => {
  const byteArrays = b64toByteArrays(b64);
  return new Blob(byteArrays, { type: contentType });
};

export const b64toFile = (
  b64: string,
  fileName: string,
  contentType: ImageContentType,
): File => {
  const byteArrays = b64toByteArrays(b64);
  return new File(byteArrays, fileName, { type: contentType });
};

export const resizeImage = (
  file: File,
  width: number,
  height: number,
  callback: (result: Blob | string | File) => void,
  quality = 100,
  rotation = 0,
  format: ImageContentType = "image/jpeg",
  output: "file" | "blob" | "base64" = "file",
): void => {
  if (!isImage(file)) {
    throw new Error("File is not a supported image type.");
  }

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const dataUrl = resizeAndRotateImage(
        img,
        width,
        height,
        format,
        quality,
        rotation,
      );

      switch (output) {
        case "blob":
          callback(b64toBlob(dataUrl, format));
          break;
        case "file":
          callback(b64toFile(dataUrl, file.name, format));
          break;
        case "base64":
        default:
          callback(dataUrl);
          break;
      }
    };
    img.src = reader.result as string;
  };

  reader.onerror = () => {
    throw new Error("Failed to read the image file.");
  };

  reader.readAsDataURL(file);
};
