import React from 'react'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import '../../App.css'
export const OurClient = () => {
    return (
        <Container>
            <Box flex-direction='column'  display='flex' justifyContent='center' alignItems='center' >
                <Typography variant="h3"  marginTop='50px' marginBottom='50px'  textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                Trusted by <span className='textColor' >3,000,000+ </span> content writers from companies including  </Typography>
            </Box>
            <Grid container spacing={4} marginBottom='50px' >
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/adidas.svg" />
                    </Box>

                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/dell.svg" />
                    </Box>
                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/ford.svg" />
                    </Box>
                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/pfizer.svg" />
                    </Box>
                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/ikea.svg" />
                    </Box>

                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/freshworks.svg" />
                    </Box>
                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/pwc.svg" />
                    </Box>
                </Grid>
                <Grid item xs={4} lg={3}>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '100%' }} src="https://storage.googleapis.com/rytr-me/public/image/brands/payoneer.svg" />
                    </Box>
                </Grid>

            </Grid>
        </Container >
    )
}
