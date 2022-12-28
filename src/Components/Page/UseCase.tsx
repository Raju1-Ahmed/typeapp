import React from 'react'
import { Button, Box, Container, Typography, Avatar, Grid } from '@mui/material'

export const UseCase = () => {
  return (
    <Container>
      <Box>
        <Box display='flex' paddingLeft='18px' justifyContent='start' alignItems='start' flexDirection='column' >
          <Typography variant="h3" marginTop='50px' marginBottom='1rem' textAlign='start' fontSize='2rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
            Use Cases  </Typography>
          <Typography variant="body1" marginBottom='2rem' textAlign='start' fontSize='0.875rem' fontFamily='sans-serif' color="#999" >
            Rytr is an AI writer that lets you automatically generate high-quality content for various use cases.
          </Typography>
        </Box>
         <Grid container spacing={4} sx={{ marginTop:'50px', marginBottom:'50px'}}>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620388926083.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' > Blog Section Writing </Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'> Write engaging introduction and section paragraphs for your blog   </Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1626880951898.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' > Brand Name </Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'> The easiest way to come up with catchy blog, essay, and article topics and content structures using AI writing assistant </Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1642147569659.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' > Brand Name </Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'> Use AI to come up with creative, quirky, and catchy names for your brand or business.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1642148057551.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' > Business Idea Pitch </Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'> Write a clear and engaging startup pitch for your business ideas</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1642148045472.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Business Ideas</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'> Find unique startup ideas & opportunities tailored to your skills & passion</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1642079410999.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >BCall To Action</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Let AI come up with creative and high converting CTAs for your ads, posts, landing pages, and more!</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1624352425331.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Copywriting Framework: AIDA</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Use Rytr's AI copywriting software to generate creative & catchy copies in AIDA format for your product, service, company, or brand</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1624352425331.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Copywriting Framework: AIDA</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Use Rytr's AI copywriting software to generate creative & catchy copies in AIDA format for your product, service, company, or brand</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1661855246025.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Cover Letter</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Write catchy and convincing cover letters for job applications</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394292676.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Email</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Create catchy emails for marketing, sales, engagement, & more in seconds</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394374236.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Email</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Create catchy emails for marketing, sales, engagement, & more in seconds</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394374236.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Email</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Create catchy emails for marketing, sales, engagement, & more in seconds</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394521390.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Interview Questions</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Prepare thoughtful and interesting interview questions for any job, podcast, or show</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394592243.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Job Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Create engaging job descriptions for any position to attract the best candidates</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1660913929760.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Keywords Extractor</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Identify main keywords, keyphrases, and questions in any text</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1660913942698.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Keywords Generator</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Come up with related keywords, keyphrases, and questions using AI writing assistant</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394666021.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Landing Page & Website Copies </Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate creative and persuasive copies for sections of your landing page</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1626175421044.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Magic Command</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Pass your request as a command and let AI do the work for you magically. Get emails, ads, posts, blogs, and more written in no time!</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394822429.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Post & Caption Ideas</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate engaging ideas for your Facebook, LinkedIn, and Instagram posts & captions</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395036821.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Product Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate compelling product descriptions to increase customer engagement & conversions for your e-commerce store or website.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1622904728819.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Product Description (bullet points)</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate catchy product descriptions to increase customer engagement & conversions for your e-commerce store or website..</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395140363.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Profile Bio</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Write creative and engaging bios for your social media handles including LinkedIn, Instagram, Twitter, Facebook, and more!</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1629480192520.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Question & Answer</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Need to come up with questions & answers for Quora, company knowledge base, and more? Try out Rytr's AI Q&A generator.!</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1629480298194.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Reply to Reviews & Messages</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Let AI write engaging & thoughtful responses to customer reviews, private messages, professional emails, testimonials & more.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395291088.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >SEO Meta Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Write SEO optimized meta description content for any page, blog, or website</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395291088.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >SEO Meta Title</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Write SEO optimized meta titles for your website and blog posts</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1633945477670.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >SMS & Notifications</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate creative and catchy notifications for your business that brings customers back</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1625763926572.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Song Lyrics</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Write creative and original lyrics using Rytr's AI-powered song generator</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1624101199983.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Story Plot</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Quickly write engaging and creative fiction stories using AI</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395466076.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Tagline & Headline</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate creative and catchy taglines and headlines for your LinkedIn bio, product, website, blog posts, or news articles.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395541790.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Testimonial & Review</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Quickly write candid testimonials and reviews for people and services</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395669080.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Append Content</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Let AI text completer finish sentences and paragraphs for you</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1646380260735.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Continue Ryting new</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>AI writing assistant to auto write the next sentences</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395719991.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Expand Content</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Quickly expand and lengthen your content by adding appropriate words.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1624121592492.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Improve Content</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Use Rytr's AI content writing assistant to simplify your writing and make it mistake-free. Best Grammarly alternative.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1623045282963.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Paragraph Content</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Use AI writer to quickly generate convincing short descriptions on any topic</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395806887.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Text Editing: Reword</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Easily rephrase any text into more engaging and catchy variations using Rytr's AI copywriting assistant</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620395857076.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >EText Editing: Shorten Content</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Use AI writer to summarize and shorten your content into succinct point s for better readability.</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394137595.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Video Channel Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate a catchy description for your YouTube video channel to get more subscribers</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394137595.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Video Channel Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate a catchy description for your YouTube video channel to get more subscribers</Typography>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ color: 'whitesmoke', padding: '10px', border: '1px solid #eee', borderRadius: '10px', width: '450px', height:'270px', backgroundColor: '#f9f9f9','&:hover': { boxShadow: 3, opacity: [0.9, 0.8, 0.7], },}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt="Remy Sharp" sx={{ width: '8rem', height: '8rem', marginTop: '20px' }} src="https://storage.googleapis.com/rytr-me/image/type/1620394137595.svg" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='9px'>
              <Typography variant='h4' fontFamily='sans-serif' color='black' fontWeight='700' fontSize='1.3125rem' >Video Channel Description</Typography>
              <Typography color='black' fontSize='0.9rem' width='306px' marginTop='0.5rem' textAlign='center'>Generate a catchy description for your YouTube video channel to get more subscribers</Typography>
            </Box>
          </Box>
          </Grid>
         </Grid>

      </Box>
    </Container>
  )
}







