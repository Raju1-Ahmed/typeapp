import React from 'react'
import { Button, Box, Container, Typography, Avatar, TextField } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../../../App.css'

export const Blogidea = () => {
    return (
        <Container>
            <Box>

                {/* Header Section  start */}
                <Box display='flex' justifyContent='space-around' alignItems='center' marginTop='128px' marginBottom='128px' >
                    <Box sx={{ width: '700px' }} >
                        <Typography variant="h2" color="#301400" textAlign='start' fontSize='2.5rem' fontFamily='sans-serif' lineHeight='2.8rem' fontWeight='600'>  Generate Blog, Article, or Essay Ideas and Outlines in One Click </Typography>
                        <Typography variant="body1" marginTop='1.5rem' textAlign='start' fontSize='1.2rem' fontFamily='sans-serif' color="#999" > The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing assistant </Typography>
                        <Button variant="contained" sx={{ color: 'white', marginTop: '1.5rem', borderRadius: '50px', padding: '15px 25px 15px 25px', '&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], backgroundColor: '#de9a33' } }} size="large" endIcon={<ArrowRightAltIcon />} > Start Ryting </Button>
                        <Typography variant="caption" marginTop='7px' display="block" gutterBottom>   Free forever, upgrade asyou scale!  </Typography>
                    </Box>
                    <Box sx={{ width: '200px' }} >
                        <Avatar alt="Remy Sharp" sx={{ width: '15rem', height: '15rem', }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" />
                    </Box>
                </Box>


                {/* start steps  */}
                <Box>
                    <Box display='flex' justifyContent='center' alignItems='center' >
                        <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                            Generate content in just
                            <span className='textColor' > 4 easy steps </span>  </Typography>
                    </Box>
                </Box>


                {/* steps one  */}
                <Box sx={{ marginTop: '64px', marginBottom: '64px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >

                    <Box sx={{ flexDirection: 'column', width: '400px', height: '100px', justifyContent: 'center', algnItem: 'center' }}>
                        <Typography variant="h3" textAlign='center' fontSize='2rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >  Step 1 — Select language</Typography>
                        <Typography variant="body1" marginTop='1rem' textAlign='center' fontSize='1rem' fontFamily='sans-serif' color="#6a544e" > Next step is to choose a language of output. Pick one from 30+ language types in the dropdown.</Typography>
                    </Box>

                    <Box sx={{ borderRadius: '27px 0px 0px 0px', display: 'flex', flexDirection: 'column', width: '400px', height: '150px', backgroundColor: '#f9f9f9', boxShadow: 3, }}>
                        <Box sx={{ borderRadius: '17px 0px 0px 0px', width: '370px', height: '20px', backgroundColor: '#301400', display: 'flex', algnItem: 'center', padding: '15px' }}  >
                            <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/public/image/logo.svg" />
                            <Typography variant="h3" margin='5px 0px 0px 9px' textAlign='start' fontSize='1rem' fontFamily='sans-serif' lineHeight='1.rem' fontWeight='600' color="white" > Rytr</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '15px', marginLeft: '10px' }} >
                            <Box>
                                <Typography variant='body1' marginLeft='0px' >Select language</Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > 🇺🇸 English </Typography> </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* steps tow  */}
                <Box sx={{ marginTop: '64px', marginBottom: '64px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >

                    <Box marginTop='15px' marginBottom='64px' sx={{ borderRadius: '27px 0px 0px 0px', display: 'flex', flexDirection: 'column', width: '400px', height: '170px', backgroundColor: '#f9f9f9', boxShadow: 3, }}>
                        <Box sx={{ borderRadius: '17px 0px 0px 0px', width: '370px', height: '20px', backgroundColor: '#301400', display: 'flex', algnItem: 'center', padding: '15px' }}  >
                            <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/public/image/logo.svg" />
                            <Typography variant="h3" margin='5px 0px 0px 9px' textAlign='start' fontSize='1rem' fontFamily='sans-serif' lineHeight='1.rem' fontWeight='600' color="white" > Rytr</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '15px' }} >
                            <Box>
                                <Typography variant='body1' marginLeft='0px' >Select language</Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > 🇺🇸 English </Typography> </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='body1' marginLeft='0px' > Select tone  </Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > Candid </Typography> </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ flexDirection: 'column', width: '400px', height: '100px', justifyContent: 'center', algnItem: 'center' }}>
                        <Typography variant="h3" textAlign='center' fontSize='2rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >Step 2 — Select tone</Typography>
                        <Typography variant="body1" marginTop='1rem' textAlign='center' fontSize='1rem' fontFamily='sans-serif' color="#6a544e" > Next step is to choose a tone of voice for your content type. From casual to convincing, pick one from 20+ tones in the dropdown.</Typography>
                    </Box>
                </Box>

                {/* steps three  */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >
                    <Box sx={{ flexDirection: 'column', width: '400px', height: '200px', justifyContent: 'center', algnItem: 'center' }}>
                        <Typography variant="h3" textAlign='center' fontSize='2rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >      Step 3 — Choose your use case</Typography>
                        <Typography variant="body1" marginTop='1rem' textAlign='center' fontSize='1rem' fontFamily='sans-serif' color="#6a544e" >
                            Just open the app and choose Blog Idea & Outline from the dropdown. We support 40+ use cases and content types in 30+ languages.                        </Typography>
                    </Box>
                    <Box marginTop='64px' marginBottom='64px' sx={{ borderRadius: '27px 0px 0px 0px', display: 'flex', flexDirection: 'column', width: '400px', height: '300px', backgroundColor: '#f9f9f9', boxShadow: 3, }}>
                        <Box sx={{ borderRadius: '17px 0px 0px 0px', width: '370px', height: '20px', backgroundColor: '#301400', display: 'flex', algnItem: 'center', padding: '15px' }}  >
                            <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/public/image/logo.svg" />
                            <Typography variant="h3" margin='5px 0px 0px 9px' textAlign='start' fontSize='1rem' fontFamily='sans-serif' lineHeight='1.rem' fontWeight='600' color="white" > Rytr</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }} >
                            <Box>
                                <Typography variant='body1' marginLeft='0px' >Select language</Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > 🇺🇸 English </Typography> </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='body1' marginLeft='0px' > Select tone  </Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > Candid </Typography> </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box marginLeft='16px' >
                            <Typography variant='body1' > Choose use case </Typography>
                            <Box sx={{ boxShadow: 3, width: '300px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', padding: '5px 5px 5px 9px', background: 'white' }} >
                                <Box> <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" /> </Box>
                                <Box><Typography marginLeft='7px' variant='h6' >  Blog Idea & Outline </Typography> </Box>
                            </Box>
                            <Typography variant='caption' marginTop='5px' textAlign='start' > Generate ideas and content structure for articles</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* steps four  */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                    <Box marginTop='64px' marginBottom='64px' marginRight='70px' sx={{ borderRadius: '27px 0px 0px 0px', display: 'flex', flexDirection: 'column', width: '400px', height: '450px', backgroundColor: '#f9f9f9', boxShadow: 3, }}>
                        <Box sx={{ borderRadius: '17px 0px 0px 0px', width: '370px', height: '20px', backgroundColor: '#301400', display: 'flex', algnItem: 'center', padding: '15px' }}  >
                            <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/public/image/logo.svg" />
                            <Typography variant="h3" margin='5px 0px 0px 9px' textAlign='start' fontSize='1rem' fontFamily='sans-serif' lineHeight='1.rem' fontWeight='600' color="white" > Rytr</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }} >
                            <Box>
                                <Typography variant='body1' marginLeft='0px' >Select language</Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > 🇺🇸 English </Typography> </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='body1' marginLeft='0px' > Select tone  </Typography>
                                <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                    <Box><Typography variant='h6' > Candid </Typography> </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box marginLeft='16px' >
                            <Typography variant='body1' > Choose use case </Typography>
                            <Box sx={{ boxShadow: 3, width: '350px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', padding: '5px 5px 5px 9px', background: 'white' }} >
                                <Box> <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" /> </Box>
                                <Box><Typography marginLeft='7px' variant='h6' >  Blog Idea & Outline </Typography> </Box>
                            </Box>
                            <Typography variant='caption' marginTop='5px' textAlign='start' > Generate ideas and content structure for articles</Typography>
                        </Box>
                        <Box marginLeft='16px' marginTop='16px' >
                            <Typography variant='body1' > Primary keyword </Typography>
                            <Box sx={{ boxShadow: 3, width: '350px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', padding: '5px 5px 5px 9px', background: 'white' }} >
                                <Box><Typography marginLeft='7px' variant='h6' > AI writing assistant </Typography> </Box>
                            </Box>
                            <Button variant="contained" sx={{ marginLeft: '70px', color: 'white', marginTop: '17px', borderRadius: '50px', padding: '15px 25px 15px 25px', '&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], backgroundColor: '#de9a33' } }} size="large" endIcon={<ArrowRightAltIcon />} > Ryte for me </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flexDirection: 'column', width: '400px', height: '200px', justifyContent: 'start', algnItem: 'start' }}>
                        <Typography variant="h3" textAlign='start' fontSize='2rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >  Step 4 — Add input</Typography>
                        <Typography variant="body1" marginTop='1rem' textAlign='start' fontSize='1rem' fontFamily='sans-serif' color="#6a544e" >Finally, provide some keywords, phrases, or titles as input and click Ryte for me.</Typography>
                    </Box>
                </Box>


                {/* Last step  */}

                <Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography width='23rem' variant="h2" color="#301400" textAlign='start' fontSize='1.5rem' fontFamily='sans-serif' lineHeight='2.8rem' fontWeight='600'>  And voila, you'll get the AI generated output instantly! </Typography>
                        <Typography width='32rem' variant="body1" marginTop='1.5rem' textAlign='center' fontSize='1.125rem' fontFamily='sans-serif' color="#999" > That's it! You can keep generating more variants till you're happy.</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ borderRadius: '17px', alignItems: 'center', marginTop: '64px', marginBottom: '64px', width: '800px', height: '800px', backgroundColor: '#f9f9f9', }} >
                            <Box sx={{ borderRadius: '17px 17px 0px 0px', width: '770px', height: '20px', backgroundColor: '#301400', display: 'flex', algnItem: 'center', padding: '15px' }}  >
                                <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/public/image/logo.svg" />
                                <Typography variant="h3" margin='5px 0px 0px 9px' textAlign='start' fontSize='1rem' fontFamily='sans-serif' lineHeight='1.rem' fontWeight='600' color="white" > Rytr</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }} >
                                <Box sx={{ boxShadow: 3, borderRadius: '0px 0px 0px 17px', backgroundColor: '#f9f9f9', width: '100%', height: '800px' }} >
                                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '25px', marginBottom: '25px' }} >
                                        <Box>
                                            <Typography variant='body1' marginLeft='0px' >Select language</Typography>
                                            <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                                <Box><Typography variant='h6' > 🇺🇸 English </Typography> </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant='body1' marginLeft='0px' > Select tone  </Typography>
                                            <Box sx={{ padding: '7px 15px 8px 15px', boxShadow: 3, width: '150px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', background: 'white' }} >
                                                <Box><Typography variant='h6' > Candid </Typography> </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box marginLeft='16px' >
                                        <Typography variant='body1' > Choose use case </Typography>
                                        <Box sx={{ boxShadow: 3, width: '350px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', padding: '5px 5px 5px 9px', background: 'white' }} >
                                            <Box> <Avatar alt="Remy Sharp" sx={{ width: '1.5rem', height: '1.5rem' }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" /> </Box>
                                            <Box><Typography marginLeft='7px' variant='h6' >  Blog Idea & Outline </Typography> </Box>
                                        </Box>
                                        <Typography variant='caption' marginTop='5px' textAlign='start' > Generate ideas and content structure for articles</Typography>
                                    </Box>
                                    <Box marginLeft='16px' marginTop='16px' >
                                        <Typography variant='body1' > Primary keyword </Typography>
                                        <Box sx={{ boxShadow: 3, width: '350px', display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid #bcb5ac', borderRadius: '50px', padding: '5px 5px 5px 9px', background: 'white' }} >
                                            <Box><Typography marginLeft='7px' variant='h6' > AI writing assistant </Typography> </Box>
                                        </Box>
                                        <Button variant="contained" sx={{ marginLeft: '70px', color: 'white', marginTop: '17px', borderRadius: '50px', padding: '15px 25px 15px 25px', '&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], backgroundColor: '#de9a33' } }} size="large" endIcon={<ArrowRightAltIcon />} > Ryte for me </Button>
                                    </Box>
                                </Box >
                                <Box sx={{ boxShadow: 3, borderRadius: '0px 0px 17px 0px', backgroundColor: 'white', width: '100%', height: '800px' }} >
                                    <Typography variant='body1' padding='20px' marginBottom='7px' >
                                        The Complete Guide to AI Writing Assistants and How They are Transforming the Marketing Industry
                                    </Typography>

                                    <Typography variant='body1' padding='20px' marginBottom='7px' >
                                        Introduction: What is an AI Writing Assistant and How Does it Actually Work?
                                        keywords: ai writing assistant, content generation software, ai copywriting tool, ai writer, content generator
                                    </Typography>

                                    <Typography variant='body1' padding='20px' marginBottom='7px' >
                                        How AI Writing Tools can Help with 5 Amazing Use Cases
                                        keywords: ai writing tool, ai writer use cases, can ai write a blog, blog generator, story generator
                                    </Typography>

                                    <Typography variant='body1' padding='20px' marginBottom='7px' >

                                        AI Writers & Content Generators - The Future of Marketing Communication
                                        keywords:  marketing with artificial intelligence tools like chatbots and marketing automation platforms
                                    </Typography>

                                    <Typography variant='body1' padding='20px' marginBottom='7px' >
                                        AI Assistance in Content Marketing - The Future is Now
                                        keywords:  automated content creator for marketing teams
                                    </Typography>

                                    <Typography variant='body1' padding='20px' marginBottom='7px' >
                                        Conclusion: Start Using an AI Writer Today to Supercharge Your Productivity & Creativity
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '70px', marginBottom: '70px', display: 'flex', justifyContent: 'end', alignItems: 'end', }}  >
                        <Box sx={{
                            borderRadius: '7px', boxShadow: 3, width: '433px', height: '94px', marginRight: '40px', border: '1px solid #f3f3f3', display: 'flex', justifyContent: 'end', alignItems: 'end', flexDirection: 'column',
                            '&:hover': {
                                border: '1px solid red',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }} >
                            <Typography variant='body1' padding='0px 24px 0px 0px' >Next →  </Typography>
                            <Typography variant='h6' padding='0px 24px 6px 0px' >Blog Section Writing </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}
