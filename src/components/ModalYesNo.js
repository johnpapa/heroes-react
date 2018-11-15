import React from 'react';

import Modal from './Modal';

const ModalYesNo = ({ message, onYes, onNo }) => (
  <Modal>
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm</p>
        </header>
        <section className="modal-card-body">{message}</section>
        <footer className="modal-card-foot card-footer">
          <button className="button modal-no" onClick={onNo}>
            No
          </button>
          <button className="button is-primary modal-yes" onClick={onYes}>
            Yes
          </button>
        </footer>
      </div>
    </div>
  </Modal>
);

export default ModalYesNo;
