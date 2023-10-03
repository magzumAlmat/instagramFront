'use client'
import ModalStories from "@/components/modalstories";
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
            
            <ModalStories isOpen={isModalOpen} onClose={closeModal}>
                <ModalStoriesContent />
            </ModalStories>
        </div>
    );

}