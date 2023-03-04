import React from "react";
import { Box, Typography, Card, Stack } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <Box p={2}>
            <Typography fontWeight="bold" varient="h4" ml={4} mb={2}>Text Generation</Typography>
            <Stack direction="row" spacing={6} ml={4}>
                <Card onClick={ () => navigate("/summary") }
                    sx= {{ boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                    <DescriptionIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" varient="h5">Text Summarizer</Typography>
                        <Typography varient="h6">Summarize long and tedious articles into just a few sentences!</Typography>
                    </Stack>
                </Card>
                <Card onClick={ () => navigate("/paragraph") }
                    sx= {{ boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                    <FormatAlignLeftRoundedIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" varient="h5">Paragraph Generator</Typography>
                        <Typography varient="h6">Generate an informative paragraph for any topics!</Typography>
                    </Stack>
                </Card>
                <Card onClick={ () => navigate("/chatbot") }
                    sx= {{ ml:0.5, boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                    <ChatRoundedIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" varient="h5">Chat Bot</Typography>
                        <Typography varient="h6">Gain insight from a virtual assistant!</Typography>
                    </Stack>
                </Card>
            </Stack>

            <Typography fontWeight="bold" varient="h4" ml={4} mt={8} mb={2}>Code Generation</Typography>
                <Card ml={4} onClick={ () => navigate("/jsconvert") }
                    sx= {{ ml:4, boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                    <DescriptionIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" varient="h5">Javascript Convertor</Typography>
                        <Typography varient="h6">Translate English into JavaScript code!</Typography>
                    </Stack>
                </Card>
            <Typography fontWeight="bold" varient="h4" ml={4} mt={8} mb={2}>Image Generation</Typography>
                <Card ml={4} onClick={ () => navigate("/scifi-img") }
                    sx= {{ ml:4, boxShadow:2, borderRadius:5, height:190, width:280, '&:hover': {border:2, boxShadow:0, borderColor:"primary.dark", cursor:"pointer"}}}>
                    <ImageSearchRoundedIcon sx={{fontSize:80, color:"primary.main", mt:2, ml:2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" varient="h5">Scifi Image Generator</Typography>
                        <Typography varient="h6">Create a science-fiction version of an image concept!</Typography>
                    </Stack>
                </Card>
        </Box>
    )
}

export default HomeScreen;