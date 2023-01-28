import { useState } from "react";

import { Container } from "@mui/system";
import ArticlesList from "../../articles-list/ArticlesList";
import SearchInput from "../../search-input/SearchInput";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";



const MainPage = () => {
    const [searchValue, setSearchValue] = useState('');
    // const [resultsNumber, setResultsNumber] = useState(0);

    const onUpdateSearch = (searchValue: string) => {
        setSearchValue(searchValue);
    }
    

    return (
        <Container>
            <ErrorBoundary>
                <SearchInput onUpdateSearch={onUpdateSearch}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <ArticlesList 
                    searchValue = {searchValue}/>
            </ErrorBoundary>
        </Container>
    )
}



export default MainPage;