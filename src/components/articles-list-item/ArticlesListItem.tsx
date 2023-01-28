import { useCallback } from "react";
import { NavLink} from "react-router-dom"

import { Grid, Card, CardMedia, CardContent, Typography, Container, SvgIcon } from "@mui/material";

import {FilteredArticle} from "../../types/types";

import ChangeTextColor from "../change-text-color/ChangeTextColor"

import "./articlesListItem.scss";

type PropsType = {
    search: string
    filtered: Array<FilteredArticle>

}

const ArticlesListItem = (props: PropsType) => {
   
    const {search, filtered} = props;

    const color = useCallback( (string:string) => {
        
        return <ChangeTextColor 
                                string = {string} 
                                key = {string} 
                                searchValue = {search}/>

    }, [search])

    const visibleContent = filtered.slice(0, 6);
    

    const items =  visibleContent.map((item: FilteredArticle) => {

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let articleDate = new Date(item.date);
        const month = months[articleDate.getMonth()];
        const date = articleDate.getDate();
        const year = articleDate.getFullYear();
        const visibleArticleDate = `${month} ${date}th, ${year}`;
        
        return (
            <Grid   item xs={12} md={3} lg={4} 
                    key={item.id}>
                    <Card className="article-item">
                       
                        <CardMedia
                            sx={{ height: 217 }}
                            image={item.image}
                            title={item.title}
                        />
                        
                        <CardContent className="article-item__text">
                                <Container className="article-item__text__date-wrapper">
                                    <SvgIcon {...props} className="article-item__text__date-wrapper__date-icon">

                                        <path d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z" stroke="#363636" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                        <path d="M5.33331 1.33337V4.00004" stroke="#363636" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                        <path d="M10.6666 1.33337V4.00004" stroke="#363636" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                        <path d="M1.33331 6.66675H14.6666" stroke="#363636" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </SvgIcon>
                                    <Typography  variant="body2"  className="article-item__text__date">{visibleArticleDate}</Typography>
                                </Container>
                                <Container className="article-item__text__title-wrapper">
                                    <Typography variant="h5" className="article-item__text__title">{color(item.title)}</Typography>
                                </Container>
                                <Container className="article-item__text__summary-wrapper">
                                    <Typography variant="body1" className="article-item__text__summary">{color(item.summary)}</Typography>
                                </Container>                            
                        
                                <Container className="article-item__text__link" >
                                        <NavLink to={`/${item.id}`}></NavLink>
                                        <Typography   variant='button'>Read more</Typography>
                                        <SvgIcon  {...props} className='article-item__text__link-icon'>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z" fill="#363636"/>
                                        </SvgIcon>
                                </Container> 
                                
                        </CardContent>
                        
                    </Card>
                
            </Grid>
        )
    });
    return (
        <>
            {items}
        </>
    );
}
export default ArticlesListItem;