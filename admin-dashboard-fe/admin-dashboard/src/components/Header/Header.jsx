import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  Badge,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    cursor: "Pointer",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));


export default function Header() {
    return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6">
            Express Hair Salon
          </Typography>
          <Icons>
            <Badge>
              <LogoutIcon />
            </Badge>
          </Icons>
        </StyledToolbar>
      </AppBar>
    );
}
