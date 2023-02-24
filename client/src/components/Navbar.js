import React from "react";
import { Box, Link, Typography, useTheme } from '@mui/material';
import axios from "axios";

const Navbar = () => { 
    const theme = useTheme();
    const Loggedin = JSON.parse(localStorage.getItem("authToken"));

    const LogoutHandler = async() => {
        try {
            await axios.post("http://localhost:4242/api/auth/logout").then(res => fullyLogout(res.data));
        } catch (err) {
            console.log(err);
        }
    }

    const fullyLogout = (data) => {
        if (data.success) {
            localStorage.removeItem("authToken");
            window.location.reload();
        }
    }
    
    return (
        <Box width="100%" p="1rem 6%" backgroundColor={theme.palette.background.alt} textAlign="center" sx={{boxShadow:3, mb: 2}}>
            <Typography variant="h1" color="primary" fontWeight="bold">SaaSAI</Typography>
            { Loggedin ? <Link href="/" onClick={LogoutHandler} p={2}>Log out</Link> : <><Link href="/register" p={1}>Register</Link>
            <Link href="/login" p={2}>Log In</Link></> }
        </Box>
    )
}

export default Navbar;