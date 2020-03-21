import React from 'react';

const ModalButton = (props) => {
  const { switchModal, text } = props;
  return (
    <button className="reviewsComponent-modalButton" onClick={e => {switchModal()}}>{text}</button>
  );
};

export default ModalButton;
