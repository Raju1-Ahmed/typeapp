import React from 'react'
import { Box, Button, Typography, Container, Avatar, Grid } from '@mui/material';


export const AllInOne = () => {
    return (
        <Container>
            <Box marginTop='10rem'>
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                        The best
                        <span className='textColor' > all-in-one  </span> ,writing platform </Typography>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                        Tired of dealing with gazillion apps in your writing workflow? Rytr provides powerful features to manage everything from one place — no more juggling with tools for SEO, grammar, and more while writing; just focus on getting sh*t done with minimal fuss.
                    </Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/perform.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    SEO analyzer to find optimal keywords and create a well written content brief
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/responsive.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    Fast, Responsive, and Mobile friendly to stay on top of things
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/support.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    Industry's best customer support with 99% average satisfaction score                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/community.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    Connect with like-minded Rytrs and learn about best practices                        </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/plugin.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    Plugins to work in your favorite apps like Wordpress, Shopify and more!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                            <Box>
                                <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/code.svg" />
                            </Box>
                            <Box>
                                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                                    Use Rytr API to integrate in your existing apps and get content on the fly
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box>
                        <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/coming-soon.svg" />
                    </Box>
                    <Box>
                        <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                        And much, much more...
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
