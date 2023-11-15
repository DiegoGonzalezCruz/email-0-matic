import React from "react";

const ModalHtml = ({ data, isOpen = false, onClose }) => {
  if (!isOpen) return null;
  console.log(data, "***** data ***** ");
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-50 flex flex-col items-center justify-center">
      <div className="w-3/4 h-full  bg-white mx-auto rounded-xl p-20">
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
