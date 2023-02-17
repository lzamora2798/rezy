import qrcode from '../assets/qrcode.png';
import './Home.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import ButtonStyle from '../components/button'
import { useNavigate} from 'react-router-dom'

function Home() {
  const steps = [
    'SCAN',
    'DEPOSIT',
    'CLAIM',
  ];
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/step1");
  }
  return (
    <div className="App">
      <div className="container">
        <label className='title'>Welcome to Rezy</label>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          In this kiosk you will be able to trade your products for coins, and help the planet at the same time
        </p>
        <img src={qrcode} className="App-qr" alt="logo" />
        <p> 3 easy steps</p>
        <Box sx={{ width: '70%' }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label,index) => (
             <Step
             key={index}
             sx={{
               '& .MuiStepLabel-root .Mui-completed': {
                 color: 'secondary.dark', // circle color (COMPLETED)
               },
               '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                 {
                   color: 'grey.500', // Just text label (COMPLETED)
                 },
               '& .MuiStepLabel-root .Mui-active': {
                 color: '#8bc34a', // circle color (ACTIVE)
               },
               '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                 {
                   color: 'common.black', // Just text label (ACTIVE)
                 },
               '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                 fill: 'black', // circle's number (ACTIVE)
               },
             }}>
             <StepLabel>{label}</StepLabel>
           </Step>
            ))}
          </Stepper>
        </Box>
        <ButtonStyle Text={"Start!"} onClick={routeChange}></ButtonStyle>
        
      </div>
    </div>
  );
}

export default Home;
