import React from 'react';
import styled from 'styled-components';

const Modal = ({ picSrc, close }) => {
  return (
    <ModalBack onClick={close}>
      <img src={picSrc}></img>
    </ModalBack>
  );
};

export default Modal;

const ModalBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  img {
    height: 90vh;
    width: auto;
    margin: auto;
  }
`;
