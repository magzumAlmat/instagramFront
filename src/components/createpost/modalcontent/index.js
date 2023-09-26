import Image from "next/image";
import createLogo from '@/app/images/create-blog-small.svg'
import { useRef ,useState} from "react";
import axios from 'axios';



export default function ModalContent () {
    const inputRef = useRef(null);
    const handleClick = () => {
        console.log("handle click start")
        inputRef.current.click();
       
    };
    // const handleFileChange = event => {
    //     const fileObj = event.target.files && event.target.files[0]
    //     if (!fileObj) {
    //         return;
    //     }
    //     file = fileObj

    //     console.log(fileObj);

    //     event.target.value = null;

    //     console.log('POSTDATA STARTED  this is file= ',file)
    //     const endpoint = 'http://157.245.193.184:3002/api/createpost';
    //     const config = {
    //         headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik`}
    //     };
    //     const bodyParametrs = {
    //         post_media: file,
    //         description: "asdasd"
    //     };

    //     axios.post(endpoint, bodyParametrs, config)
    //         .then(console.log)
    //         .catch(console.log);
    // }

    // function postData () {
       
    // }



 

    const [selectedFile, setSelectedFile] = useState(null);

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

    return (
        <div>
            <div className='modal-header'>
                <p>Create new post</p>
            </div>
            <div className='modal-content'>
                <Image src={createLogo} alt=""/>
                
                <input  onChange={handleFileChange} type="file" id="file" style={{"display":"none"}}/>
                


                <input type="file" onChange={handleFileChange} id="file"  placeholder="Select from computer"/>
                {/* <button className="button button-primary" onClick={handleClick}>Select from computer</button> */}
             
            </div>
        </div>
    );
}