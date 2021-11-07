import { Button, Typography } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
    const handleToast=()=>{
        toast.error("button clicked")
        console.log("clicked")
    }
    return (
        <div>
            <Typography>Footer</Typography>
            <Button onClick={handleToast}>toast</Button>
        </div>
    );
};

export default Footer;