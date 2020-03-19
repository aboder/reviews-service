import React from 'react';

const ModalButton = (props) => {
  const { switchModal, text } = props;
  return (
    <button onClick={e => {switchModal()}}>{text}</button>
  );
};

export default ModalButton;
