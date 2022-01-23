import React from 'react';
import Grid from '@mui/material/Grid';
import slider from '../../../images/slider-1.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${slider})`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 600
}

const Banner = () => {
    return (
        <Container style={bannerBg} mt={12} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Hi, I am Fatema Akter <br />
                            Your new personal Coach for better life.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/aboutme"><Button variant="outlined" style={{ backgroundColor: '#5CE7ED' }}>About Me</Button></Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;