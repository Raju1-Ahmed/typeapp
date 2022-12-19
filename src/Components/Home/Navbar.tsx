import { Button, Box, Container, Stack, Avatar } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Navbar = () => {

    return (
        <Container>
            <Box display='flex' marginTop='15px'  alignItems='center' justifyContent='space-between' >
                <Box display='flex' alignItems='center'>
                    <Button>
                        <Avatar alt="Remy Sharp" sx={{ padding: '3px' }} variant="square" src="https://i.ibb.co/Zz6MB9b/logo.png" />
                    </Button>
                    <Box display='flex' alignItems='center'>
                        <Button sx={{
                            color: 'primary.dark',
                            fontSize: '25px',
                            '&:hover': { color: 'primary.light', backgroundColor:'none', opacity: [0.9, 0.8, 0.7], },
                        }} >
                            Rytr
                        </Button>
                        <Button>
                            <Avatar alt="Remy Sharp" sx={{ padding: '3px' }} variant="square" src="https://i.ibb.co/nmQGNV9/g2-winter-2022.png" />
                        </Button>
                    </Box>
                </Box>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Use cases</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>Resources</Button>
                    <Button color='inherit'>What's new</Button>
                    <Button color='inherit'
                        endIcon={<ArrowRightAltIcon />}
                    >Start Ryting</Button>
                </Stack>
            </Box>
        </Container>
    )
}







