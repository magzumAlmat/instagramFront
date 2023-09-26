import Image from "next/image";
import createLogo from '@/app/images/drag_and_drop.svg'
import React, {useRef, useState} from "react";
import backLogo from '@/app/images/back-arrow.svg';
import axios from 'axios';



export default function ModalContent () {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isNext, setIsNext] = useState(false);
    let file = "";
    const handleClick = () => {
        console.log("handle click start")
        inputRef.current.click();
        // postData();
    };
    const nextClick = () => {
        console.log(isNext);
        setIsNext(true)
        console.log('isNext: ', isNext)
    }

    const backClick = () => {
        setIsNext(false);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);


        if (file) {
            uploadFile(file);
        }
    };

    const uploadFile = (file) => {
        const  authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
        const formData = new FormData();
        formData.append('post_media', file);
        formData.append('description', 'example'); // Adding the description field

        axios.post('http://157.245.193.184:3002/api/createpost', formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                // Handle success
                console.log('File uploaded successfully:', response.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Error uploading file:', error);
            });
    };

    const inputRef = useRef(null);

    return (
        <div>
            {selectedFile ? (
                <div className='modal-edit'>
                    {isNext ? (
                        <>
                            <div className='modal-header-edit'>

                                <button onClick={backClick} className='button-edit'>
                                    <Image src={backLogo} alt="back" />
                                </button>
                                <p>create new post</p>
                                <button onClick={nextClick} className='button-edit'>Share</button>
                            </div>
                            <div className='modal-content-edit'>
                                <div className='left-column'>
                                    <img src={URL.createObjectURL(selectedFile)} alt="" />
                                </div>
                                <div className='right-column'>
                                    ghbd
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='modal-header-edit'>
                                <button onClick={backClick} className='button-edit'>
                                    <Image src={backLogo} alt="back" />
                                </button>
                                <p>edit</p>
                                <button onClick={nextClick} className='button-edit'>Next</button>
                            </div>
                            <div className='modal-content-edit'>
                                <div className='left-column'>
                                    <img src={URL.createObjectURL(selectedFile)} alt="" />
                                </div>
                                <div className='right-column'>
                                    ghbd
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className='modal'>
                    <div className='modal-header'>
                        <p>Create new post</p>
                    </div>
                    <div className='modal-content'>
                        <Image src={createLogo} alt="" />
                        <span>Drag photos and videos</span>
                        <input ref={inputRef} onChange={handleFileChange} type="file" id="file" style={{"display":"none"}}/>



                        {/*<input type="file" onChange={handleFileChange} id="file"  placeholder="Select from computer"/>*/}
                        {/*<input ref={inputRef} onChange={handleFileChange} type="file" id="file" style={{"display":"none"}} />*/}
                        <button className="button button-primary" onClick={handleClick}>Select from computer</button>
                    </div>
                </div>
            )}
        </div>
    );

}