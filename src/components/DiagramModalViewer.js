import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import DiagramModal from './DiagramModal';

const DiagramModalViewer = ( {children} ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="diagram-modal-viewer">
            <div className="diagram-container">
                <button className="fullscreen-button" onClick={openModal}>
                    <FontAwesomeIcon icon={faExpand}/>
                </button>
                {!isModalOpen && children}
            </div>
            <DiagramModal isOpen={isModalOpen} onRequestClose={closeModal}>
                {children}
            </DiagramModal>
        </div>
    );
};

export default DiagramModalViewer;