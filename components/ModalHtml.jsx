import React from "react";

const ModalHtml = ({ data, isOpen = false, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-50 flex flex-col items-center justify-center">
      <div className="w-3/4 h-full  bg-white mx-auto rounded-xl p-20 relative">
        <button
          className="absolute top-5 right-5 debug1 btn btn-secondary"
          onClick={onClose}
        >
          Close
        </button>
        <div className="w-full h-full">
          <div
            className="mockup-code"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
          {data.html}
        </div>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalHtml;
