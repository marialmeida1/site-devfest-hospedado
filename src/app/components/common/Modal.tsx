import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal
    }
  };

  return image ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center p-4"
      onClick={handleOutsideClick}
    >
      <div className="relative">
        <div className="flex items-center justify-end absolute right-0 m-2">
          <button onClick={onClose} className="cursor-pointer">
            <FontAwesomeIcon
              icon={faX}
              className="h-4 text-zinc-600 bg-white hover:bg-zinc-200 hover:text-zinc-700 rounded p-2"
            />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center p-4"
      onClick={handleOutsideClick} 
    >
      <div className="relative bg-white p-4 m-2 w-full min-h-fit rounded-md md:inset-0 md:m-0 md:min-w-[calc(20%)] md:max-w-[calc(60%)]">
        <div className="flex items-center justify-between px-2 pb-2 pt-1 border-b rounded-t">
          <h1 className="text-xl font-semibold text-zinc-900">Detalhes</h1>
          <button onClick={onClose} className="p-2 cursor-pointer">
            <FontAwesomeIcon
              icon={faX}
              className="h-4 text-zinc-300 hover:bg-zinc-200 hover:text-zinc-700 rounded p-2"
            />
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
