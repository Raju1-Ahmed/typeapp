import React from 'react'
import { Box, Button, Typography, Container, Avatar, Link, Paper } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';

export const Affordable = () => {
    return (
            <Box marginBottom='30px' sx={{ background:'#f9f9f9', 
        padding: '60px 0px 88px 0px'
        }} >
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                        Strikingly powerful, yet unbelievably
                        <span className='textColor' > affordable  </span> </Typography>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
                        Generate 10k characters per month on free plan and upgrade to premium plan for unlimited usage — starting at $9/m, Rytr offers one of the most cost-effective solutions in the market to give you complete value for money!                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' flex='1 1' marginTop='1.5rem' flexDirection='row' >

                    <Box marginRight='1.5rem'>
                        <Paper elevation={3} variant='outlined' >
                            <Box maxWidth='300px' height='750px'  >
                                <Box paddingLeft='15px' paddingRight='15px'>
                                    <Box display='flex' justifyContent='start' marginTop='9px' marginBottom='1rem' >
                                        <Typography variant="h3" textAlign='center' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem'
                                            fontWeight='700' marginBottom='1rem' color="black" >  Free Plan  </Typography>
                                    </Box>
                                    <Box display='flex' justifyContent='start' flexDirection='column'>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📝
                                            Generate 10k* characters per month
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📜
                                            Access 40+ use-cases
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🇺🇸
                                            Write in 30+ languages
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔊
                                            Access 20+ tones
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔍
                                            Built in plagiarism checker
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🌆
                                            Generate upto 5 images per month with AI
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            ⭐️
                                            Access to premium community
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >

                                            <Link href="#" underline="none" sx={{ color: '#999' }}>
                                                *FUP applicable
                                            </Link>
                                        </Typography>

                                    </Box>
                                    <Box borderTop='1px solid #eae4df' marginTop='200px' padding='10px' display='flex' justifyContent='center' alignItems='center' flexDirection='column'  >
                                        <Typography variant="h5" color='primary.dark' fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            Free
                                        </Typography>
                                        <Typography variant="caption" marginBottom='0.75rem' >
                                            Upgrade as you scale
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                            <Button variant="outlined" endIcon={<ArrowRightAltIcon />}> Start Naw   </Button>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>

                    <Box marginRight='1.5rem'>
                        <Paper elevation={3} variant='outlined' >
                            <Box maxWidth='300px' height='750px' sx={{ background:'#fbfbfb' }} >
                                <Box paddingLeft='15px' paddingRight='15px'>
                                    <Box display='flex' justifyContent='start' marginTop='9px' marginBottom='1rem' >
                                        <Typography variant="h3" textAlign='center' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem'
                                            fontWeight='700' marginBottom='1rem' color="black" >  Silver Plane  </Typography>
                                    </Box>
                                    <Box display='flex' justifyContent='start' flexDirection='column'>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📝
                                            Generate 10k* characters per month
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📜
                                            Access 40+ use-cases
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🇺🇸
                                            Write in 30+ languages
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔊
                                            Access 20+ tones
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔍
                                            Built in plagiarism checker
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🌆
                                            Generate upto 5 images per month with AI
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            ⭐️
                                            Access to premium community
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >

                                            <Link href="#" underline="none" sx={{ color: '#999' }}>
                                                *FUP applicable
                                            </Link>
                                        </Typography>

                                    </Box>
                                    <Box borderTop='1px solid #eae4df' marginTop='200px' padding='10px' display='flex' justifyContent='center' alignItems='center' flexDirection='column'  >
                                        <Typography variant="h5" color='primary.dark' fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                        $9/month
                                        </Typography>
                                        <Typography variant="caption" marginBottom='0.75rem' >
                                        $90/year (Get 2 months free!)
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                            <Button variant="outlined" startIcon={<CheckIcon />}> Subscribe now  </Button>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>

                    <Box marginRight='1.5rem'>
                        <Paper elevation={3} variant='outlined' >
                            <Box maxWidth='300px' height='750px' sx={{ background:'#fff8e1' }} >
                                <Box paddingLeft='15px' paddingRight='15px'>
                                    <Box display='flex' justifyContent='start' marginTop='9px' marginBottom='1rem' >
                                        <Typography variant="h3" textAlign='center' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem'
                                            fontWeight='700' marginBottom='1rem' color="black" >  Unlimited plan </Typography>
                                    </Box>
                                    <Box display='flex' justifyContent='start' flexDirection='column'>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📝
                                            Generate 10k* characters per month
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            📜
                                            Access 40+ use-cases
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🇺🇸
                                            Write in 30+ languages
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔊
                                            Access 20+ tones
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🔍
                                            Built in plagiarism checker
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            🌆
                                            Generate upto 5 images per month with AI
                                        </Typography>
                                        <Typography variant="body1" fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                            ⭐️
                                            Access to premium community
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >

                                            <Link href="#" underline="none" sx={{ color: '#999' }}>
                                                *FUP applicable
                                            </Link>
                                        </Typography>

                                    </Box>
                                    <Box borderTop='1px solid #eae4df' marginTop='200px' padding='10px' display='flex' justifyContent='center' alignItems='center' flexDirection='column'  >
                                        <Typography variant="h5" color='primary.dark' fontSize='1rem' fontWeight='600' marginBottom='0.75rem' >
                                        $9/month
                                        </Typography>
                                        <Typography variant="caption" marginBottom='0.75rem' >
                                        $90/year (Get 2 months free!)
                                        </Typography>
                                        <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                            <Button variant="outlined" startIcon={<CheckIcon />}> Subscribe now  </Button>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                    
                </Box>
            </Box>
    )
}
