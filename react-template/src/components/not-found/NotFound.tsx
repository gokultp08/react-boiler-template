import { Box, Typography } from "@mui/material";
import React from "react";

export const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto",
        height: "100vh",
        padding: "0 15px",
      }}
    >
      <Typography variant="h1" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Not Found
      </Typography>
    </Box>
  );
};
