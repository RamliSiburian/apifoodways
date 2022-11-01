import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Maps({ showMaps, setShowMaps }) {

    const handleClose = () => setShowMaps(false)

    return (
        <>
            <Modal show={showMaps} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.189043461877!2d106.74940809775836!3d-6.381800018798544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe29cfd4fa5b1f30!2sDumbWays%20Indonesia%20(Depok)!5e0!3m2!1sid!2sid!4v1665967918378!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Maps;