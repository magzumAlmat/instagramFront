'use client'
import Image from 'next/image'
import Modal from "@/components/createpost";
import Header from '@/components/header'
import Posts from '@/components/posts'
import profilePic from '@/app/images/profile.jpg'
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