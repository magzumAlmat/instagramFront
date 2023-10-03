import Image from "next/image";
import createLogo from '@/app/images/drag_and_drop.jpeg'
import React, {useRef, useState} from "react";
import backLogo from '@/app/images/back-arrow.svg';
import axios from 'axios';

import { useRouter } from 'next/navigation'

export default function ModalContent () {
    const router = useRouter()
 
    const [selectedFile, setSelectedFile] = useState(null);
    const [isNext, setIsNext] = useState(false);
    const inputRef = useRef(null);
    const [swither, setSwitcher] = useState(true);
    let toggle = '';
    const [isNextStories, setIsNextStories]=useState(false);

    const handleClick = () => {
        console.log("handle click start")
        inputRef.current.click();
    };

    const handleStoriesClick = () => {
        console.log("handle click start")
        inputRef.current.click();
        setIsNextStories(true);
    };

    const [description,setDescription]=useState('')
    const [title,setTitle]=useState('')

    const handleTextAreaChange = (event) => {
        const newText = event.target.value;
        setDescription(newText);
        console.log('this is description', description)
      };
      const handleTextAreaChangeStory = (event) => {
        const newText = event.target.value;
        setTitle(newText);
        console.log('this is title', title)
      };

   
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };
      const shareFunction = () => {
       
        console.log('shareFunction file =',selectedFile)
       
            const  authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
            const formData = new FormData();
            formData.append('post_media', selectedFile);
            formData.append('description', description); // Adding the description field
    
            axios.post('http://157.245.193.184:3002/api/createpost', formData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    console.log('File uploaded successfully:', response.data);
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                });

         
            router.push('/layout', { scroll: false })
      };

      const shareStoriesFunction = () => {
       
        console.log('shareFunction file =',selectedFile)
       
            const  authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
            const formData = new FormData();
            formData.append('story_media', selectedFile);
            formData.append('title', title); // Adding the description field
    
            axios.post('http://157.245.193.184:3002/api/story', formData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    console.log('File uploaded successfully:', response.data);
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                });

         
            router.push('/layout', { scroll: false })
      };

    const nextClick = () => {
        
        console.log(isNext);
        setIsNext(true)
        console.log('isNext: ', isNext)
    }
    const backClick = () => {
        setIsNext(false);
    }
       

    const backStoriesClick = () => {
        setIsNextStories(false);
    }
       

    

  

   

    // const uploadFile = (file) => {
    //     const  authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    //     const formData = new FormData();
    //     formData.append('post_media', file);
    //     formData.append('description', description); 

    //     axios.post('http://157.245.193.184:3002/api/createpost', formData, {
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     })
    //         .then((response) => {
              
    //             console.log('File uploaded successfully:', response.data);
    //         })
    //         .catch((error) => {
                
    //             console.error('Error uploading file:', error);
    //         });
    // };


    //---------------------------------------------------------------
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedFile(file);


    //     if (file) {
    //         uploadFile(file);
    //     }
    // };

    // const uploadFile = (file) => {
    //     const  authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    //     const formData = new FormData();
    //     formData.append('post_media', file);
    //     formData.append('description', 'example'); // Adding the description field

    //     axios.post('http://157.245.193.184:3002/api/createpost', formData, {
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     })
    //         .then((response) => {
    //             // Handle success
    //             console.log('File uploaded successfully:', response.data);
    //         })
    //         .catch((error) => {
    //             // Handle error
    //             console.error('Error uploading file:', error);
    //         });
    // };

  

  
    return (
        <div>
            {selectedFile ? (
                <div className='modal-edit'>
                    {isNextStories ? (
                        <>
                        <div className='modal-header-edit'>

                            <button onClick={backClick} className='button-edit'>
                                <Image src={backLogo} alt="back" />
                            </button>
                            <p>create new story</p>
                            <button onClick={shareStoriesFunction} className='button-edit'>Share</button>
                        </div>
                        <div className='modal-content-edit'>
                            <div className='left-column'>
                                <img src={URL.createObjectURL(selectedFile)} alt="" />
                            </div>
                            <div className='right-column'>
                                <p>User</p>
                                <textarea  placeholder="Write a title..." hight={200}  value={title} onChange={handleTextAreaChangeStory}  />
                            </div>
                        </div>
                    </>
                    ) : 
                    (isNext ? (
                        <>
                            <div className='modal-header-edit'>

                                <button onClick={backClick} className='button-edit'>
                                    <Image src={backLogo} alt="back" />
                                </button>
                                <p>create new post</p>
                                <button onClick={shareFunction} className='button-edit'>Share</button>
                            </div>
                            <div className='modal-content-edit'>
                                <div className='left-column'>
                                    <img src={URL.createObjectURL(selectedFile)} alt="" />
                                </div>
                                <div className='right-column'>
                                    <p>User</p>
                                    <textarea  placeholder="Write a caption..." hight={200}  value={description} onChange={handleTextAreaChange}  />
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
                                    Filters
                                </div>
                            </div>
                        </>
                    ))}
                    
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
                        <br />
                        <button className="button button-primary" onClick={handleStoriesClick}>Select stories</button>
                    </div>
                </div>
            )}
        </div>
    );

}