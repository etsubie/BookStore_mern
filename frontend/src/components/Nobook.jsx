import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Nobook = () => {
  return (
    <Box sx={{display : 'flex', justifyContent: 'space-around', padding:4,alignItems:'center'}}>
      <Typography>
      Click the Add Button to Create a Books List 
      </Typography>
      <Link to="/create">
        <AddCircleIcon sx={{ color: "#0d550d", fontSize: 30 }} />
      </Link>
    </Box>
  );
};

export default Nobook;
