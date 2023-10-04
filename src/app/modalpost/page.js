'use client'
import Modal from "@/components/createpost";
import {useState} from "react";
import ModalPost from "@/components/profile/posts/post/modalpost/index.js";
export default function CreateModalPostPage() {
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
                <ModalPost/>
            </Modal>
        </div>
    );

}