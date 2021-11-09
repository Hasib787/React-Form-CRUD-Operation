import { Button, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    const handleToast=()=>{
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