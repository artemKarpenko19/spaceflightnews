import useSpaceFlightNews from "../service/useRequest";
import { useState, useEffect } from "react";


import { Grid, Container } from "@mui/material";
import { FilteredArticle } from "../../types/types";

import SearchInfo from "../search-info/SearchInfo";
import ArticlesListItem from "../articles-list-item/ArticlesListItem";
import Spinner from "../spinner/Spinner";

import './articleList.scss';

type PropType = {
    searchValue: string

}

const ArticlesList = (props: PropType) => {
    const [articlesList, setArticlesList] = useState([]);
   
   

    const {getAllArticles, loading} = useSpaceFlightNews();

    const {searchValue} = props;

    useEffect(() => {
        onRequest();
    }, [])

    
    

    const onRequest = () => {
        getAllArticles()
            .then(onArticlesListLoaded)
    }

    const onArticlesListLoaded = (articlesList: any) => {
        setArticlesList(articlesList);
        filterContent(articlesList)
   }

   const filterContent = (arr: Array<FilteredArticle>, searchValue=props.searchValue) => {
    let result = [];
    if (searchValue) {
        result = arr.filter( (item: FilteredArticle):boolean => {
           return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        } else {
            return arr;
        }        
        const summaryRes = arr.filter((item: FilteredArticle):boolean => item.summary.toLowerCase().includes(searchValue.toLowerCase()));
        result = result.concat(summaryRes);

        result = result.reduce((o: Array<FilteredArticle>, i:FilteredArticle ) => {
            if (!o.find(v => v.id === i.id)) {
              o.push(i);
            }
            return o;
        }, []);
        
        return result;

    }  
    const filteredContent:Array<FilteredArticle> = filterContent(articlesList);

   const resultsNumber: number|string = !searchValue ? '' : filterContent(articlesList).length;

        const spinner = loading ? <Spinner/> : null;
        const content = loading ?  null :  <View resultsNumber={resultsNumber} filteredContent= {filteredContent} searchValue={searchValue}  />
   return (
    
        <Container className="articles-list">
            <Container style={{"marginTop": "100px", "display": "flex", "justifyItems": "center", "alignItems": "center"  }}>
                {spinner}
            </Container>
            {content}
        </Container>
   )
    
}
type ViewProps = {
    resultsNumber:number|string
    filteredContent:Array<FilteredArticle>
    searchValue:string
}

const View = (props:ViewProps) => {

  const {resultsNumber, filteredContent, searchValue} = props;

    return (
        <>
         <SearchInfo results={resultsNumber}/>
            <Grid container columns={{ xs: 4, md:6, lg: 12 }} spacing={4}>
               <ArticlesListItem filtered= {filteredContent} search={searchValue}/>
            </Grid>
        </> 
        )
   }

export default ArticlesList;
