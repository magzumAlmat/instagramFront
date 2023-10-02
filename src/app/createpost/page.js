'use client'
import Modal from "@/components/createpost";
import {useState} from "react";
import ModalContent from "@/components/createpost/modalcontent";
export default function CreatePostPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalContent />
            </Modal>
        </div>
    );

}