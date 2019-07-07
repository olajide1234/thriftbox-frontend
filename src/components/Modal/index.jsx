import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';


function AlertModal(props) {
  const { show, message, closeModal } = props;

  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AlertModal.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default AlertModal;
