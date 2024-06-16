import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, #8a2be2, #dda0dd);
  height: 100px;
  display: flex;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  font-family: Arial, sans-serif;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  width: 100%;
`;

function Header() {
    return (
        <StyledAppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
                <StyledTypography variant="h6">
                    RECIPE FINDER
                </StyledTypography>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;