import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Tickets = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-center mt-5">
      <h1>Get Your Tickets Now!</h1>
      <p>Join us for an unforgettable festival experience.</p>
      <Button variant="primary" onClick={handlePurchaseClick}>
        Purchase Tickets
      </Button>

      {/* Modal for ticket purchase confirmation */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tickets Purchased!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for purchasing your tickets!</p>
          <p>Get ready for an amazing festival adventure!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Tickets;

