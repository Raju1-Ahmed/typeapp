import React from 'react'
import { Button, Box, Container, Stack, Avatar, Typography } from '@mui/material'
import './TextSliding.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const TextSliding = () => {
    return (
        <Container>
            <div className='sliderWrapper'>
                <h2>A better, 10x faster way to write</h2>
                <div className='title'>
                    <div className='slide'>
                        <div>Instagram posts</div>
                        <div>emails</div>
                        <div>product descriptions</div>
                        <div>YouTube descriptions</div>
                        <div>SEO titles</div>
                        <div>Blog</div>
                        <div>testimonials & reviewsprofile bio</div>
                        <div>Facebook Ads</div>
                        <div>Profile View</div>
                        <div>tagline Headline</div>
                        <div>Leanding Page copie</div>
                        <div>Story plot</div>
                    </div>
                </div>
                <p className=''>Rytr is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!
                </p>
                <Button variant="contained" color='primary' size="large" endIcon={<ArrowRightAltIcon />}>
                    Start Ryting
                </Button>
                <Typography variant="caption" display="block" gutterBottom>
                Free forever, upgrade as you scale!
      </Typography>
            </div>
        </Container>
    )
}
