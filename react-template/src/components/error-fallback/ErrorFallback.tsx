import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { IErrorFallbackProps } from "../../shared/types/props";

export const ErrorFallback: React.FC<IErrorFallbackProps> = ({
  resetErrorBoundary,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
        height: "100vh",
        padding: "0 15px",
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        sx={{ fontSize: { xs: "38px", md: "48px" }, mb: 2 }}
      >
        Oops!!!! Something went wrong
      </Typography>
      <Button onClick={resetErrorBoundary}>Refresh</Button>
    </Box>
  );
};
