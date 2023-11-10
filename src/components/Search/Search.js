import React, { useState } from 'react';
import './SearchBar.css';

const searchBar({onSearch}){
    const [term, setTerm] = useState('');

    const search = () => {
        onSearch(term);
    }

}