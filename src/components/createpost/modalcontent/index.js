import Image from "next/image";
import createLogo from '@/app/images/create-blog-small.svg'
export default function ModalContent () {
    return (
        <div>
            <div className='modal-header'>
                <p>Create new post</p>
            </div>
            <div className='modal-content'>
                <Image src={createLogo} alt=""/>
                <span style={{'font-family': 'Roboto, sans-serif'}}>Drag and drop</span>
                <button className='button button-primary'>
                    Select from computer
                </button>
            </div>
        </div>
    );
}