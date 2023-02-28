import React from "react";
import { Box, Typography, Card, Stack } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <Box p={2}>
            <Typography fontWeight="bold" varient="h4" mb={2}>Text Generation</Typography>
            <Card onClick={ () => navigate("/summary") }
                  sx= {{ boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                <DescriptionIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                <Stack p={3} pt={0}>
                    <Typography fontWeight="bold" varient="h5">Text Summarizer</Typography>
                    <Typography varient="h6">Summarize long and tedious articles into just a few sentences!</Typography>
                </Stack>
            </Card>
        </Box>
    )
}

export default HomeScreen;