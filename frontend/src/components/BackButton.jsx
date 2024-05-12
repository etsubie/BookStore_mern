import { ArrowBack } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    
    const navigate = useNavigate()
  return (
   <Box>
        <button className="back" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
   </Box>
  )
}

export default BackButton
