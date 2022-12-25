import React from 'react'
import { Box, Typography, Container, Avatar, Grid, Link } from '@mui/material';

export const Footer = () => {
    return (
            <Box padding='30px' sx={{ backgroundColor:'#f9f9f9' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Box>
                            <Box display='flex' justifyContent='start' >
                                <Avatar alt="Remy Sharp" sx={{ padding: '3px' }} variant="square" src="https://i.ibb.co/Zz6MB9b/logo.png" />
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    Rytr- Best AI Writer
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    <Link href="#" underline="none" sx={{ color: '#999' }}>  © 2022 Rytr LLC </Link>
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    <Link href="#" underline="none" sx={{ color: '#999' }}> About us </Link>
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    <Link href="#" underline="none" sx={{ color: '#999' }}> Press & Media Kit</Link>
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    <Link href="#" underline="none" sx={{ color: '#999' }}> Privacy Policy</Link>
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start'>
                                <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                    <Link href="#" underline="none" sx={{ color: '#999' }}>Terms of Use</Link>
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='start' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>
                                    <Avatar alt="Remy Sharp" sx={{ padding: '3px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/marketplace/g2-winter-2022.svg" />
                                </Link>
                                <Link href="#" underline="none" sx={{ color: '#999' }}>
                                    <Avatar alt="Remy Sharp" sx={{ padding: '3px' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/marketplace/g2-top-50-office-products-2022.svg" />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="h6" textAlign='center' fontSize='1.0rem' fontFamily='sans-serif'
                                fontWeight='600' marginBottom='1rem' color="black" >  Use cases   </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Blog writing </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Email </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Social Media Ads</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Video </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Copywriting</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Creative Write</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>SEO</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Magic Command</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start' >
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Text Editor</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Add use cases</Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="h6" textAlign='center' fontSize='1.0rem' fontFamily='sans-serif'
                                fontWeight='600' marginBottom='1rem' color="black" >  Solutions   </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Ecommerce</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Local Stores</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Digital Marketing Agency/Marketer</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Blogger/Vlogger</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start' >
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>
                                    Small Business</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>All comparisons →</Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="h6" textAlign='center' fontSize='1.0rem' fontFamily='sans-serif'
                                fontWeight='600' marginBottom='1rem' color="black" >  Comparisons  </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Conversion AI alternative</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Copy AI alternative </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Shortly AI alternative</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Writesonic alternative </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Peppertype AI alternative</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>LongShot AI alternative</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Grammarly alternative</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>All comparisons →</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start' >
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Text Editor</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Add use cases</Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="h6" textAlign='center' fontSize='1.0rem' fontFamily='sans-serif'
                                fontWeight='600' marginBottom='1rem' color="black" > Resources</Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Knowledge Base </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> What's new </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Roadmap</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Blog </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Community</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Affiliate program</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Languages & tones</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Api </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="h6" textAlign='center' fontSize='1.0rem' fontFamily='sans-serif'
                                fontWeight='600' marginBottom='1rem' color="black" > Connect with us  </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>Live chat</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Email </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Twitter</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> Facebook </Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}>LinkedIn</Link>
                            </Typography>
                        </Box>
                        <Box display='flex' justifyContent='start'>
                            <Typography variant="body1" fontSize='0.75rem' fontWeight='600' marginBottom='0.75rem' >
                                <Link href="#" underline="none" sx={{ color: '#999' }}> instagram</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>
    )
}
