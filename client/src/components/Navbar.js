import React, { useState } from "react";
import { Box, Link, Typography, useTheme } from '@mui/material';
import axios from "axios";

const Navbar = () => { 
    const theme = useTheme();
    const [Loggedin, setLoggedIn] = useState(JSON.parse(localStorage.getItem("authToken")));

    const LogoutHandler = async() => {
        try {
            await axios.post("https://20.119.0.11:8080/api/auth/logout").then(res => fullyLogout(res.data));
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

    const checkRefresh = async() => {
        try {
            const token = await axios.get("https://20.119.0.11:8080/api/auth/refresh-token");
            if (!token) {
                localStorage.removeItem("authToken");
                setLoggedIn(false);
                LogoutHandler();
            }
        } catch (err) {
            console.log(err);
        }
    }

    checkRefresh();
    
    return (
        <Box width="100%" p="1rem 6%" backgroundColor={theme.palette.background.alt} textAlign="center" sx={{boxShadow:3, mb: 2}}>
            <Typography variant="h1" color="primary" fontWeight="bold"><Link href="/" underline="none">Forward</Link></Typography>
            { Loggedin ? <Link href="/" onClick={LogoutHandler} p={2}>Log out</Link> : <><Link href="/register" p={1}>Register</Link>
            <Link href="/login" p={2}>Log In</Link></> }
        </Box>
    )
}

export default Navbar;