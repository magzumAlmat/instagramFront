export default function Modal ({ isOpen, onClose, children }) {

    if (!isOpen) return null;

    return (<>
  
        <div className="modal-overlay">
           
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    Х
                </button>
                {children}
            </div>
        </div>
        </>
    );
};