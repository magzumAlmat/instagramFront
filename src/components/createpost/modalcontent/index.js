import Image from "next/image";
import createLogo from '@/app/images/create-blog-small.svg'
import { useRef } from "react";
import axios from 'axios';



export default function ModalContent () {
    let file = "";
    const handleClick = () => {
        console.log("handle click start")
        inputRef.current.click();
        postData();
    };
    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0]
        if (!fileObj) {
            return;
        }
        file = fileObj

        console.log(fileObj);

        event.target.value = null;
    }

    function postData () {
        const endpoint = 'http://157.245.193.184:3002/api/createpost';
        const config = {
            headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44`}
        };
        const bodyParametrs = {
            postmedia: file,
            description: "asd"
        };

        axios.post(endpoint, bodyParametrs, config)
            .then(console.log)
            .catch(console.log);
    }



    const inputRef = useRef(null);



    return (
        <div>
            <div className='modal-header'>
                <p>Create new post</p>
            </div>
            <div className='modal-content'>
                <Image src={createLogo} alt=""/>
                <span style={{'font-family': 'Roboto, sans-serif'}}>Drag and drop</span>
                <input ref={inputRef} onChange={handleFileChange} type="file" id="file" style={{"display":"none"}}/>
                <button className="button button-primary" onClick={handleClick}>Select from computer</button>
            </div>
        </div>
    );
}