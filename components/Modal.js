import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ picSrc, title, close }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.src = picSrc.large;
  }, [ref]);
  return (
    <ModalBack onClick={close}>
      <figure>
        <img ref={ref} src={picSrc.small}></img>
        {title && <figcaption>{(title || '').split('.')[0]}</figcaption>}
      </figure>
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
  figcaption {
    color: white;
    opacity: 0.8;
  }
`;
