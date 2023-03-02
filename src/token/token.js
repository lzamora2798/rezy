import './token.css';
import ButtonStyle from '../components/button'
import ModalInfo from '../components/InfoModal'
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Grid} from '@material-ui/core';
import { useNavigate} from 'react-router-dom'

function Token() {
  const [data, setData] = useState('No result');
  const [token, setToken] = useState('');


  let navigate = useNavigate(); 
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
    navigate("/")
  }

  const postToToken = (result) =>{
    const config = {
      method: "POST",
      headers:{ 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet: result
      }), 
    }
    let url = "https://8081-davoweb3-web3middleware-8vrlht7lvvc.ws-us89.gitpod.io/callalchemy"
    fetch(url, config)
      .then(response => response.json())
      .then((val)=>{
        if("receipt" in val){
          setOpen(true)
        }else{
          setData(val.code)
        }
    }).catch((err)=>{
      setData(err)
      setOpen(false)
    })
  }


  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setData(`token: ${result}`)
      setToken(result)
    }
  }
  const handleClaim = () =>{
    if (token) { 
      if(!open){
        setOpen(true)
        postToToken(token)
      }
    }
  }


  return (
    <div className="App">
      <div className="container">
        <label className='title'>Step 3</label>
        <p>
          Close up your registered wallet and show your QR address, the tokens will be sent to this address
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
        <ButtonStyle Text={"Claim!"} onClick={handleClaim}></ButtonStyle>
      </div>
      <ModalInfo flag={open} close={handleClose}  ></ModalInfo>
    </div>
  );
}

export default Token;
