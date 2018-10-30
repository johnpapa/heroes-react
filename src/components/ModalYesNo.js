import React from 'react';

import Modal from './Modal';

const ModalYesNo = ({ message, onClick }) => (
  <Modal>
    <h1>{message}</h1>
    <div className="buttons">
      <button
        className="button is-light"
        data-modal-response="yes"
        onClick={onClick}
      >
        Yes
      </button>
      <button
        className="button is-light"
        data-modal-response="no"
        onClick={onClick}
      >
        No
      </button>
    </div>
  </Modal>
);

export default ModalYesNo;
