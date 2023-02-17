import './Scan.css';
import ButtonStyle from '../components/button'
import React, { useState, useRef, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';



function Scan() {
  const [data, setData] = useState('No result');
  const videoRef = useRef(null)
  const handleScan = (result, error) => {
    if (!!result) {
      setData(result?.text);
    }

    if (!!error) {
      console.info(error);
    }
  }

  const getVideo = () => {
 
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: "environment" },
        width: 150,
        height: 150,
        
      },
      audio: false,

    })
    .then(stream => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch(err =>{
      console.error(err)
    })
  }

  useEffect(()=>{
    getVideo()
  },[videoRef])

  return (
    <div className="App">
      <div className="container">
        <label className='title'>Step 1</label>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Scan a selected product listed on www.rezy.com , aim to the camera and wait for the confirmation popup
        </p>
        <div className='camera'>
          <video autoplay loop muted playsinline ref={videoRef}></video>
        </div>
        {/* <QrReader
          onResult={handleScan}
          style={{ width: '100%' }}
          delay={300}
          constraints={{
            facingMode: 'environment'
          }}/> */}

        <p>{data}</p>
        <ButtonStyle Text={"Scan!"}></ButtonStyle>

      </div>
    </div>
  );
}

export default Scan;
