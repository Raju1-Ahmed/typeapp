import React from 'react'
import { Button, Box, Container, Typography, Avatar, Grid } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Blogidea = () => {
    return (
        <Container>
            <Box marginTop='100px'>
                <Box display='flex' justifyContent='space-around' alignItems='center'  >
                    <Box sx={{ width: '700px' }} >
                        <Typography variant="h2" color="#301400" textAlign='start' fontSize='2.5rem' fontFamily='sans-serif' lineHeight='2.8rem' fontWeight='600'>  Generate Blog, Article, or Essay Ideas and Outlines in One Click </Typography>
                        <Typography variant="body1" marginTop='1.5rem' textAlign='start' fontSize='1.2rem' fontFamily='sans-serif' color="#999" > The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing assistant </Typography>
                        <Button variant="contained"   sx={{ color:'white', marginTop:'1.5rem', borderRadius:'50px', padding:'15px 25px 15px 25px',   '&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], backgroundColor:'#de9a33' } }} size="large" endIcon={<ArrowRightAltIcon />} > Start Ryting </Button>
                        <Typography variant="caption" marginTop='7px' display="block" gutterBottom>   Free forever, upgrade asyou scale!  </Typography>
                    </Box>
                    <Box sx={{ width: '200px' }} >
                        <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
