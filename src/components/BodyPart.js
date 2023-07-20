import React from 'react'
import { Stack, Typography } from '@mui/material'
import icon from '../assets/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (

        <Stack type='Button' alignItems='center' justifyContent='center'     className="bodypart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px', height: '280px',
                cursor: 'pointer', gap: '47px'
            }}

            // Red Line above when we click on any bodypart

            onClick={()=>{
                setBodyPart(item) ;
                window.scrollTo({ top:1800  , left:100 , behavior:'smooth' }) ;  
            }}  
        >

            <img src={icon} alt="dumbbell" style={{ weight: '40px', height: '40px' }} />

            { /* This show the text below the image */}

            <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize' > {item} </Typography>


        </Stack >
    )
}

export default BodyPart
