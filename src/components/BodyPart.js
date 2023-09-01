import React from 'react';
import {Stack, Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card"
        sx={{ 
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
         }}
         onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
         }}
        //  OR we can also write it in different parts as the above one is in combined form 
        //     bodyPart === item ?{
        //         borderTop: '4px solid #ff2625',
        //         backgroundColor: '#fff',
        //         borderBottomLeftRadius: '20px',
        //         width: '270px',
        //         height: '280px',
        //         cursor: 'pointer',
        //         gap: '47px'
        //     } : {
        //         background: '#fff',
        //         borderBottomLeftRadius: '20px',
        //         width: '270px',
        //         height: '280px',
        //         cursor: 'pointer',
        //         gap: '47px'
        //     }
    >
        <img src={Icon} alt="dumbbell" style={{width:'40px', height:'40px'}} />
        <Typography fontSize={24} fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item} </Typography>
    </Stack>
  )
}

export default BodyPart