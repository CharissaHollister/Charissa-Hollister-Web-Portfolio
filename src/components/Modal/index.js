import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, imageID, URL, github } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${imageID}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <p>
          <a target="0" href={URL}>
            {URL}
          </a>
        </p>
        <p>
          <a target="0" href={github}>
            {github}
          </a>
        </p>
        <button type="button" onClick={onClose}>
          Return
        </button>
      </div>
    </div>
  );
};

export default Modal;

//todo add description, github link, etc to modal
