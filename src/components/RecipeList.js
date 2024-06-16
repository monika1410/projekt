import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  background-color: #ffe0b2;
`;

const StyledTypography = styled(Typography)`
  font-family: Arial, sans-serif;
  color: #333;
`;

function RecipeList({ recipes }) {
    return (
        <Grid container spacing={2}>
            {recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.recipe.uri}>
                    <StyledCard>
                        <CardContent>
                            <StyledTypography variant="h6">
                                {recipe.recipe.label}
                            </StyledTypography>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default RecipeList;