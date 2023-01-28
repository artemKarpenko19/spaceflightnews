import { useState } from "react";

import { TextField, InputAdornment, Typography, Container } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import "./search-input.scss";


type PropsType = {
    onUpdateSearch: (searchValue: string) => void 
}

const SearchInput = (props:PropsType) => {

    const [searchValue, setSearchValue] = useState('');
    
    

   const onUpdateSearch =  (e: React.ChangeEvent<HTMLInputElement>):void => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
        props.onUpdateSearch(searchValue);
    }



    return (
        <Container className="search-input">
            <Typography variant="h6">
                Filter by keywords
            </Typography>
                
            <TextField 
                variant="outlined"
                size='medium'
                type='text' 
                value = {searchValue} 
                onChange={onUpdateSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon/>
                        </InputAdornment>
                        ),
                    }}
            />
           
        </Container>
        
    )
}

export default SearchInput;