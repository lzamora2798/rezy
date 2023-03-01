import './Scan.css';
import ButtonStyle from '../components/button'
import ModalStyle from '../components/Modal'
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Grid} from '@material-ui/core';
import axios from "axios";

const URL = 'https://3500-davoweb3-prototipo-b7sb0fg374s.ws-us89.gitpod.io'
//const URL = 'http://localhost:3500'

function Scan() {
  const [data, setData] = useState('No result');
  const [producto, setProducto] = useState({});

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    postToArduino("0")
  }

  const postToArduino = (option) =>{
    // const headers = { 
    //   "Accept": "*/*",
    //   "Host": "rezy.lat",
    //   "Accept-Encoding": "gzip, deflate, br"
    // }
    let url = `https://rezy.lat/esp-outputs-action.php?action=output_update&id=1&state=${option}`
    // fetch(url, { headers }).then(
    //   (response)=>{
    //     if(response.status === 200){
    //       setOpen(false);
    //     }
    // }).catch((err)=>{
    //   console.log(err)
    // })
    axios.get(url).then((response) => {
      if(response.status === 200){
              setOpen(false);
            }
    }).catch((err)=>{
      console.log(err)
    });
  }

  const handleAccept = () => {
    postToArduino("1")
  }

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      if (!open){
        setData("Cargando...");
        getProduct(result)
      } 
    }
  }

  const getProduct = (name) =>{
    const headers = { 
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    }
    fetch(`${URL}/${name}`, { headers })
        .then(response => response.json())
        .then(data => {
          setProducto(data[0])
          setOpen(true)
        });
  }

  return (
    <div className="App">
      <div className="container">
        <label className='title'>Step 1</label>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Scan a selected product listed on www.rezy.com , aim to the camera and wait for the confirmation popup
        </p>
  
        <Grid container style={{ width: window.innerWidth < 1000 ? "100%" : "25%" }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
            <QrReader
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
              facingMode="environment"
            />
          </Grid>
        </Grid>
      

        <p>{data}</p>
        <ButtonStyle Text={"Scan!"}></ButtonStyle>

      </div>
      <ModalStyle flag={open} close={handleClose} product={producto} accept={handleAccept} ></ModalStyle>
    </div>
  );
}

export default Scan;
