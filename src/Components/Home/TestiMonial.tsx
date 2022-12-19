import { Grid, Avatar} from '@mui/material'
import { Box, Container } from '@mui/system'
import Typography from '@mui/material/Typography';

import React from 'react'

export const TestiMonial = () => {
    return (
        <Container sx={{ marginBottom:'50px', borderBottom:'1px solid #f8f5f1', padding:'15px'  }} >
            <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                    <Box justifyContent='center' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color="textSecondary"  >  3,000,000+  </Typography>
                        <Typography variant="subtitle1" width='240px' marginLeft='70px' color="textPrimary" >
                            happy copywriters, marketers & entrepreneurs
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Box justifyContent='center' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color="textSecondary"  >   4.9/5 </Typography>
                        <Typography variant="subtitle1" width='300px' marginLeft='40px' color="textPrimary" >
                            satisfaction rating from 1000+ reviews on TrustPilot, G2 & more
                        </Typography>
                        <Box 
                        display='flex'
                        justifyContent='center' alignItems='center' textAlign='center' padding='5px'
                        >
                             <Box 
                        display='flex'
                        justifyContent='center' alignItems='center' textAlign='center' 
                        >
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/g9N7mH5/trustpilot.png" />
                        <Typography variant="subtitle1" color="textPrimary" >
                        4.9/5
                        </Typography>
                        </Box>
                        <Box 
                        display='flex'
                        justifyContent='center' alignItems='center' textAlign='center' padding='10px'
                        >
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/ZJW7khW/g2crowd.png" />
                        <Typography variant="subtitle1" color="textPrimary" >
                        4.9/5
                        </Typography>
                        </Box>
                        <Box 
                        display='flex'
                        justifyContent='center' alignItems='center' textAlign='center'
                        >
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7jnSZB9/appsumo.png" />
                        <Typography variant="subtitle1" color="textPrimary" >
                        4.9/5
                        </Typography>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Box justifyContent='center' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color="textSecondary"  >  15,000,000+ hours</Typography>
                        <Typography variant="subtitle1" width='310px' marginLeft='50px' color="textPrimary" >
                            and $300 million+ saved in content writing so far
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
