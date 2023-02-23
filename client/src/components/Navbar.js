import React from "react";
import { Box, Link, Typography, useTheme } from '@mui/material';
import { themeSettings } from "../theme";

const Navbar = () => {
    const theme = useTheme();
    return (
        <Box width="100%" p="1rem 6%" backgroundColor={theme.palette.background.alt} textAlign="center" sx={{boxShadow:3, mb: 2}}>
            <Typography variant="h1" color="primary" fontWeight="bold">SaaSAI</Typography>
            <Link href="/register" p={2}>Register</Link>
            <Link href="/login" p={2}>Log In</Link>
        </Box>
    )
}

export default Navbar;