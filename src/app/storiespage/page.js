'use client'
import Modal from "@/components/createpost";
import {useState} from "react";
import ModalStoriesContent from "@/components/modalstories/stories/index.js";
export default function CreateStoryPage() {
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
                <ModalStoriesContent />
            </Modal>
        </div>
    );

}