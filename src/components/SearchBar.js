import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  background-color: #ba99e1; 
  margin: 15px 0;
  border-radius: 15px;
  width: 80%;
`;

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Box display="flex" justifyContent="center" style={{ marginTop: '30px' }}>
            <StyledTextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a recipe"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                variant="filled"
            />
        </Box>
    );
};

export default SearchBar;