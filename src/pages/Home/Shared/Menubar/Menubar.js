import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../../../images/logo.png"
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img style={{ width: "220px", marginBottom: "15px" }} src={logo} alt="" />
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><Button color="inherit">About</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/services"><Button color="inherit">Services</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/blogs"><Button color="inherit">Blogs</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/events"><Button color="inherit">Events</Button></Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
export default Menubar;