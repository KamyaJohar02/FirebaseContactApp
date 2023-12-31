
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  const modalContent = (
    <>
      {isOpen && (
        <div>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex">
              <IoIosCloseCircleOutline onClick={onClose} className="text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
          <div onClick={onClose} className="absolute z-40 top-0 h-screen w-screen backdrop-blur" />
        </div>
      )}
    </>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
};

export default Modal;
