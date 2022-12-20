import React from 'react'
import {  Box,  CardMedia, Typography } from '@mui/material'


export const WritingContent = () => {
    return (
        <Box style={{ background:'#f9f9f9' }} marginTop='150px' >
            <Box flex-direction='column' display='flex' justifyContent='center' alignItems='center' >
                <Typography variant="h3" marginTop='50px' marginBottom='50px' textAlign='center' maxWidth=' 45rem'
                    fontSize='2.5rem' fontFamily='sans-serif' lineHeight='2.5rem' fontWeight='700' color="black" >
                    Save ⏰ and 💰 writing content that
                    <span className='textColor' >converts</span>
                </Typography>

            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row' >
                <Box display='flex' alignItems='center' justifyContent='center' width='12rem'   >
                    <Typography width='2rem' height='2rem' borderRadius='50%' bgcolor='primary.dark' marginRight='1rem'
                        textAlign='center' fontSize='1.5rem' fontFamily='sans-serif' fontWeight='700' color="black" >  1 </Typography>
                    <Typography variant="caption" display="flex" flex='1 1' lineHeight='1.4rem' fontSize='1.125rem' gutterBottom>
                        Choose your use-case
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' width='12rem' >
                    <Typography width='2rem' height='2rem' borderRadius='50%' bgcolor='primary.dark' marginRight='1rem'
                        textAlign='center' fontSize='1.5rem' fontFamily='sans-serif' fontWeight='700' color="black" >  2 </Typography>
                    <Typography variant="caption" display="flex" flex='1 1' lineHeight='1.4rem' fontSize='1.125rem' gutterBottom>
                        Add some input for context
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center' width='12rem' >
                    <Typography width='2rem' height='2rem' borderRadius='50%' bgcolor='primary.dark' marginRight='1rem'
                        textAlign='center' fontSize='1.5rem' fontFamily='sans-serif' fontWeight='700' color="black" >  3 </Typography>
                    <Typography variant="caption" display="flex" flex='1 1' lineHeight='1.4rem' fontSize='1.125rem' gutterBottom>
                        Rytr magically writes for you
                    </Typography>
                </Box>
            </Box>
            <Box  padding='50px 170px 50px 170px' marginBottom='60px' > 
            <CardMedia
                component="video"
                image='https://storage.googleapis.com/rytr-me/public/video/intro-v2.mp4'
                title='title'
                controls
            /></Box>
        </Box>
    )
}
