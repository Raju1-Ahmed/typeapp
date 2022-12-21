import React from 'react'
import { Box, Tab, Tabs, Typography, Container, Avatar } from '@mui/material';
import { useState } from 'react';
import '../../App.css'
export const TabsContent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  };
  return (
    <Container>
      <Box >
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
            Generate<span className='textColor' >killer </span> content, effortlessly  </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
            Never face writer's block again — from blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones & languages in just a few seconds. Just pick a use case, enter some context, and boom...your copy is ready! </Typography>
        </Box>
        <Box marginTop='3rem' display='flex' justifyContent='center' alignItems='center'>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}

            orientation="vertical"
          >
            <Tab label="
          Powered by state-of-the-art language AI to generate unique, original content for almost any vertical
          "/>
            <Tab label="
          40+ use cases and templates to choose from to cover all your writing needs
          " />
            <Tab label="
          Choose from 30+ languages to write in your own or other languages for your clients
          " />
            <Tab label="
        Write anything with the right emotion through 20+ tones of voice
          " />
            <Tab label="
Uses scientific copywriting formulas — such as AIDA & PAS — to provide best quality output that requires minimal to no editing          " />
          </Tabs>
          <Box sx={{ margin: 2 }}>
            {tabIndex === 0 && (
              <Box display='flex' justifyContent='center'>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/generate/ai.svg?v=0.1" />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/generate/usecases.svg" />
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/generate/languages.svg?v=0.1" />
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/generate/tones.svg" />
              </Box>
            )}
            {tabIndex === 4 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/generate/formulas.svg?v=0.2" />

              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box marginTop='6rem'>
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
            Craft your <span className='textColor' >masterpiece </span> to perfection</Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
            Use powerful, rich-text editor to go from raw ideas to a polished piece in no time — takes just about 15 mins to write a 1,000 word piece! Reword, shorten and do much more to improve the content quality before hitting that submit button.</Typography>
        </Box>
        <Box marginTop='3rem' display='flex' justifyContent='center' alignItems='center'>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}

            orientation="vertical"
          >
            <Tab label="
Produce reader-friendly copy the way you need it — expand with more details, give it that raw edge, or just clean up the grammar          "/>
            <Tab label="
       Have a problem with that clunky, boring sentence? Hit 'reword' or 'shorten' and watch it magically turn into something elegant and succinct
          " />
            <Tab label="
Never worry about content uniqueness! Check for parts of your text that are similar to any existing content using in-built plagiarism checker          " />
            <Tab label="
Extensive formatting options to make text richer and presentable to the world          " />
          </Tabs>
          <Box sx={{ margin: 2 }}>
            {tabIndex === 0 && (
              <Box display='flex' justifyContent='center'>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/editor/expand.svg" />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/editor/rephrase.svg" />
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/editor/plagiarism.svg" />
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/editor/formatting.svg" />
              </Box>
            )}
          </Box>
        </Box>
      </Box>


      <Box marginTop='6rem'>
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
            <span className='textColor' >Seamlessly </span> manage your writing workflow </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Typography variant="body1" textAlign='center' maxWidth=' 42rem' fontSize='1.125rem' fontFamily='sans-serif' fontWeight='400' color="#6a544e" >
            Relieve the stress of juggling multiple projects by providing seamless collaboration, team billing and robust project management features — all without the hefty price tag! With Rytr, it's easy to get back to what matters: running your business and making sure everything runs smoothly.
          </Typography>
        </Box>
        <Box marginTop='3rem' display='flex' justifyContent='center' alignItems='center'>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}

            orientation="vertical"
          >
            <Tab label="
Store and organize all your projects in one place, with a simple folder structure for both client and internal needs         "/>
            <Tab label="
    Quickly navigate and search outputs in history to reference previous work
          " />
            <Tab label="
Create team account to easily manage members, access, & billing from one place        " />
            <Tab label="
Download work in docx or html format         " />
          </Tabs>
          <Box sx={{ margin: 2 }}>
            {tabIndex === 0 && (
              <Box display='flex' justifyContent='center'>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/workflow/folders.svg" />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/workflow/history.svg" />
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/workflow/team.svg" />
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                <Avatar alt="Remy Sharp" sx={{ width: '100%', height: '100%' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/illustration/workflow/collaborate.svg" />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
