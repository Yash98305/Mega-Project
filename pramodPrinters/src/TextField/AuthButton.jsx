import React from 'react';
import Button from '@mui/material/Button';

export function AuthButton({ text, width, height, type = "button" }) {
  return (
    <Button
      type={type}
      sx={{
        background: 'rgb(11, 46, 69)',
        fontFamily: 'Mukta',
        fontWeight: '800',
        color: 'rgb(255, 209, 0)',
        width: width,
        height: height,
        borderRadius: '2rem',
        zIndex: '1',
        transition: 'width 0.3s ease',
        '&:hover': {
          border: '2px solid rgb(255, 209, 0)',
          background: 'rgb(255, 209, 0)',
          color: 'rgb(11, 46, 69)',
        }
      }}
    >
      {text}
    </Button>
  );
}
