import React from 'react'
import { Box, Button, Typography, Container, Avatar, Grid, Link } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export const UseCases = () => {

    return (
        <Container>
            <Box borderTop='2px solid #f8f5f1' marginTop='5rem' marginBottom='5rem' paddingTop='5rem' >
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                        Automatically generate high-quality content for
                        <span className='textColor' > 40+ use-cases </span>  </Typography>
                </Box>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Blog Idea & Outline </Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing assistant
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9', }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1642148057551.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Business Idea Pitch </Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Write a clear and engaging startup pitch for your business ideas
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                //  padding='20px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1624352425331.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Copywriting Framework: AIDA </Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Use Rytr's AI copywriting software to generate creative & catchy copies in AIDA format for your product, service, company, or brand                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394292676.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Email </Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Create catchy emails for marketing, sales, engagement, & more in seconds                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9', }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394374236.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Facebook, Twitter, LinkedIn Ads</Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels.                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                //  padding='20px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394666021.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Landing Page & Website Copies</Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Generate creative and persuasive copies for sections of your landing page                                   </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1629480298194.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >

                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Reply to Reviews & Messages</Typography>

                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Let AI write engaging & thoughtful responses to customer reviews, private messages, professional emails, testimonials & more.                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9', }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395299663.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >
                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >SEO Meta Title</Typography>
                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        Write SEO optimized meta titles for your website and blog posts</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                width='100%'
                                height='250px'

                                //  padding='20px'
                                sx={{ borderRadius: '0.5rem' }} style={{ background: '#f9f9f9' }}
                            >
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <Avatar alt="Remy Sharp" sx={{ width: '4rem', height: '4rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1646380260735.svg" />
                                </Box>
                                <Box marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' >
                                    <Typography variant="h6" textAlign='center' fontSize='1rem' fontFamily='sans-serif' fontWeight='700' color="black" >Text Editing: Continue Ryting
                                    </Typography>
                                    <Typography variant="body1" maxWidth='239px' marginTop='0.5rem' textAlign='center' fontSize='0.9rem' fontFamily='sans-serif' color="black" >
                                        AI writing assistant to auto write the next sentences                                  </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' marginTop='3rem' >
                    <Button variant="outlined" endIcon={<ArrowRightAltIcon />}>
                        ArrowRightAltIcon
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
