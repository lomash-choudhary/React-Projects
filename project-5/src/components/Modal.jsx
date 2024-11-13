import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

export const Model = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* Center the modal on the screen */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal content with fixed size and scrollable content */}
            <div className="relative z-50 min-h-[350px] max-h-[80vh] w-[90%] max-w-[600px] bg-white mx-auto rounded-lg overflow-y-auto">
              <div className="flex justify-end pr-2 pt-2">
                <RxCross1 className="text-3xl cursor-pointer" onClick={onClose} />
              </div>
              <h1 className="flex justify-center font-bold text-2xl">Add Contact Form</h1>
              {children}
            </div>
          </div>

          {/* Backdrop to cover the entire screen */}
          <div className="backdrop-blur h-screen w-screen fixed top-0 z-40" />
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};