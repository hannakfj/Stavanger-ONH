import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from '../features/language/useTranslation'

function Hero() {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        height: { xs: '200px', sm: '300', md: '400px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          alignItems: 'center',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundImage: "url('/katle.jpeg')",
          backgroundPosition: 'center',
          zIndex: -1,
        }}/>
      <Typography
        variant="h3"
        component="h1"
        color='#074974'
        sx={{
          zIndex: 1,
          fontSize: { xs: '1.5rem', md: '3.5rem' },
          position: 'relative',
          textAlign: 'center',
          fontWeight: 'bold',
          px: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        {t('welcome')}
      </Typography>

    </Box>
  )
}

export default Hero
