import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import axios from 'axios';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (query) => {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
            params: {
                q: query,
                app_id: '99d15ec1',
                app_key: '81a8c22bcb6cc758d922c18dcd8fee90',
                type: 'public'
            }
        });
        setRecipes(response.data.hits);
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
