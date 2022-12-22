import React from 'react'
import { Box, Typography, Container, Avatar, Link } from '@mui/material';


export const Brands = () => {
    return (
        <Container>
            <Box borderTop='2px solid #f8f5f1' marginTop='5rem'>
                <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant="h3" marginTop='50px' marginBottom='2rem' textAlign='center' maxWidth=' 45rem' fontSize='1.875rem' fontFamily='sans-serif' lineHeight='1.875rem' fontWeight='700' color="black" >
                        Recognized by
                        <span className='textColor' > G2  </span>  as one of the leading brands in AI Writing space</Typography>
                </Box>
                <Box flex='1 1' display='flex' justifyContent='space-around' alignItems='center'>
                   <Box>
                   <Link href="#" underline="none">
                    <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_BestResults_Small-Business_Total.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                    <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_BestResults_Small-Business_Total.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                    <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_BestUsability_Small-Business_Total.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                   <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_BestUsability_Small-Business_Total.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                   <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_BestUsability_Small-Business_Total.svg" />
                    </Link>
                   </Box>
                </Box>

                <Box flex='1 1' display='flex' marginTop='1.5rem' justifyContent='space-around' alignItems='center'>
                   <Box>
                   <Link href="#" underline="none">
                    <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_HighestUserAdoption_Small-Business_Adoption.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                    <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_HighPerformer_Mid-Market_HighPerformer.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                   <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_HighPerformer_Mid-Market_HighPerformer.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                   <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_HighPerformer_Mid-Market_HighPerformer.svg" />
                    </Link>
                   </Box>
                   <Box>
                   <Link href="#" underline="none">
                   <Avatar alt="Remy Sharp" sx={{ width: '6rem', height:'7rem',  opacity: '.8', transition: 'opacity .2s' }} variant="square" src="https://storage.googleapis.com/rytr-me/public/image/badges/AIWritingAssistant_HighPerformer_Mid-Market_HighPerformer.svg" />
                    </Link>
                   </Box>
                </Box>
            </Box>
        </Container>
    )
}
