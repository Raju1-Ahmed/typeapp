import React from 'react'
import { Box, Button, Typography, Container, Avatar, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const WritingAssistant = () => {
    return (
        <Box style={{ background: "#f9f9f9" }} marginTop='150px' padding='0px 100px 0px 100px'  >
            <Box display='flex' justifyContent='center' alignItems='center' >
                <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                    Take
                    <span className='textColor' >your writing assistant  </span> where you go </Typography>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' >
                <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                    With our browser extension, it's never been easier to create stunning copy — whether you're working on an email, social post, or blog, Rytr will save you time and ensure your content is always up to snuff!
                </Typography>
            </Box>
            <Box >
                <Box display='flex' justifyContent='center' marginTop='1rem' alignItems='center' >
                    <Avatar alt="Remy Sharp" sx={{ width: '30px', height: '30px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/browser/chrome.svg" />
                    {/* <Button variant="contained" color='primary' size="large"  endIcon={<ArrowRightAltIcon />}>  Download extension </Button> */}
                    <Button variant="text" size="large" endIcon={<ArrowRightAltIcon />} >Download extension</Button>

                </Box>
                <Typography variant="body1" color='#999' fontSize='15px' fontWeight='700' marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' gutterBottom>
                    Extension installed by 10,000+ users!
                </Typography>
            </Box>
            <Box marginTop='5rem' padding='0px 100px 0px 100px'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography variant="body1" color='black'  fontSize='15px' fontWeight='700' marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' gutterBottom>
                                Emails and Chatting
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/email/gmail.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/email/outlook.svg" />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/chat/messenger.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/chat/slack.svg" />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography variant="body1" color='black'  fontSize='15px' fontWeight='700' marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' gutterBottom>
                                Documents and Blogging
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/docs/google.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/docs/microsoft.svg" />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/blog/wordpress.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/extension/blog/medium.svg" />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                       
                            <Typography variant="body1" color='black' fontSize='15px' fontWeight='700' marginTop='0.5rem' display='flex' justifyContent='center' alignItems='center' gutterBottom>
                            Social media
                </Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/social/facebook.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/social/twitter.svg" />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/social/instagram.svg" />
                            <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', padding: '20px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/social/linkedin.svg" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
