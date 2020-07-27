import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = ({ picSrc, title, close }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.src = picSrc.large;
  }, [ref]);
  return (
    <ModalBack onClick={close}>
      <figure>
        <img ref={ref} src={picSrc.small}></img>
        {title && <figcaption>{title || ''}</figcaption>}
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
    @media (max-width: ${(props) => props.theme.small}) {
      width: 100vw;
      max-width: 400px;
      height: auto;
    }
  }
  figcaption {
    color: white;
    opacity: 0.8;
  }
`;

Modal.propTypes = {
  picSrc: PropTypes.object.isRequired,
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
};
