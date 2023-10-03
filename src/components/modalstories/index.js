export default function ModalStories({isOpen, onClose, children}) {
    if (!isOpen)
        return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button"
                    onClick={onClose}>
                    CLOSE
                </button>
                {children}
            </div>
        </div>
    );
}

