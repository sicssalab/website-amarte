import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalProduct = (props) => {
  const { item, ...rest } = props;
  return (
    <Modal
      id="modal_gallery"
      {...rest}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {item && (
          <>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
            <p>aqui va la imagen</p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalProduct;
