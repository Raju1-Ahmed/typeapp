import React from 'react'
import { Button, Box, Container, Stack, Avatar, Typography, Paper, Grid } from '@mui/material'
import './Lovedby.css'

// import Image from '../../asset/sliderbg.jpg'; 


// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Image})`
//     }
// };



export const Lovedby = () => {
    return (
        <Container>
            <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' marginBottom='30px' >
                <div className='LovedByTitle'> Loved by
                    <div className='LovedBySlide'>
                        <div>Professionals</div>
                        <div>Academicians</div>
                        <div>Copywriters</div>
                        <div>SDRs</div>
                        <div>Entrepreneurs</div>
                        <div>Marketers</div>
                    </div>
                </div>
            </Box>
            <Grid container spacing={2} marginBottom='50px' >
                <Grid item xs={4} lg={6}>
                    <Box display='flex' justifyContent='center' >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}   >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/karrie-brazaski.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                    Karrie Brazaski
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" > Great app - Easy to use</Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                                Great app - Easy to use
                                Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy...gotta love that.
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Via AppSumo </Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://i.ibb.co/7jnSZB9/appsumo.png" />

                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={6} >
                    <Box display='flex' justifyContent='center'  >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}  >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/madesnappy.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                    Madesnappy
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" > Great app - Easy to use</Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                                I almost couldn’t believe it was real! For my first test I had Rytr generate some website copy for me. I provided about 50 words to describe my business along with my business name. Rytr generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. Rytr is worth every penny and then some!
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Via AppSumo </Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://i.ibb.co/7jnSZB9/appsumo.png" />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={4} lg={6}>
                    <Box display='flex' justifyContent='center' >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}   >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/sergio-vazquez.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                Sergio Vazquez II
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" > Genuinely Dumbfounded </Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                            I was literally speechless from the originality of the content that my very first Rytr test was able to produce from only a small sample of my original content. I was anticipating useless gibberish, but was instead genuinely dumbfounded. I stared at it in amazement for a solid 3 minutes while the idea machine in my head spun wildly, and I contemplated all of the uses I could have for this. I have PAID professional copywriters for MUCH worse. I highly recommend this SaaS.
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Via Trustpilot </Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://storage.googleapis.com/rytr-me/public/image/marketplace/trustpilot.svg" />

                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={6} >
                    <Box display='flex' justifyContent='center'  >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}  >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/mismikado.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                Mismikado
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" > Time Saving and Better Than PLR Content</Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                            Rytr is a fantastic tool for writing product descriptions and getting started on blog posts. No longer do I have to stare at a blank screen trying to figure out how to flesh out a topic beyond 50 words. For me, Rytr replaces buying PLR content that I would similarly edit and personalize. This saves me time because I can actually tailor to my keyword and niche needs.
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Vai G2</Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://storage.googleapis.com/rytr-me/public/image/marketplace/g2crowd.svg" />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={4} lg={6}>
                    <Box display='flex' justifyContent='center' >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}   >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/heather-flores.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                Heather Jo Flores
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" >Rytr just works, every time and the writing environment is really nice</Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                            After testing dozens of the new ai copywriting tools, I feel like Rytr has a really great balance between offering a simple, clean interface and also generating useful, accurate copy. Well worth the investment and super easy to use. Happily recommending this app and looking forward to seeing how they grow!
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Via Trustpilot</Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://storage.googleapis.com/rytr-me/public/image/marketplace/trustpilot.svg" />

                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={6} >
                    <Box display='flex' justifyContent='center'  >
                        <Paper elevation={3} style={{ padding: 20, height: 325 }}  >
                            <Box display='flex' justifyContent='start' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://storage.googleapis.com/rytr-me/public/image/testimonials/paula-donnan.jpg?v=0.1" />
                                <Typography variant="subtitle1" sx={{ padding: '10px' }} color="textPrimary" >
                                Paula Donnan
                                </Typography>
                            </Box>

                            <Typography variant='h5' sx={{ padding: '20px' }} color="textPrimary" > I would thoroughly recommend Rytr</Typography>

                            <Typography variant="subtitle1" color="textPrimary" >
                            I have tried a few AI copywriting apps but so far the best outputs have been on Rytr. If you need to create quality content quickly, I would thoroughly recommend Rytr.
                            </Typography>
                            <Box display='flex' justifyContent='start' alignItems='center' >
                                <Button color='inherit'>Via Twitter </Button>
                                <Avatar alt="Remy Sharp" sx={{ width: '1.0rem', height: '1.0rem' }} src="https://storage.googleapis.com/rytr-me/public/image/social/twitter.svg" />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
