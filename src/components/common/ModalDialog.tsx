import { FC, ReactNode, useEffect } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./ModalDialog.scss";

type ModalDialogSize = "sm" | "md" | "lg" | "xl";

type ModalDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalDialogSize;
  className?: string;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
};

const ModalDialog: FC<ModalDialogProps> = ({
  isOpen,
  onClose,
  size = "md",
  className,
  title,
  children,
  footer,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const backdropClassnames = generateClassnames({
    "modal-backdrop": true,
  });

  const modalClassnames = generateClassnames({
    modal: true,
    [`modal--${size}`]: true,
    [`${className}`]: Boolean(className),
  });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  return (
    <div className={backdropClassnames} onClick={handleBackdropClick}>
      <div className={modalClassnames} role="dialog" aria-modal="true">
        {showCloseButton && (
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          />
        )}

        {title && <div className="modal__title">{title}</div>}

        <div className="modal__body">{children}</div>

        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
};

export { ModalDialog };
export type { ModalDialogProps, ModalDialogSize };
