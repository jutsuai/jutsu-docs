import React from 'react';
import Modal from 'react-modal';

const DiagramModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Diagram Modal"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '90%',
                    background: 'black',
                    zIndex: 99999,
                    position: 'relative'
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }
            }}
        >
            {children}
        </Modal>
    );
};

export default DiagramModal;
