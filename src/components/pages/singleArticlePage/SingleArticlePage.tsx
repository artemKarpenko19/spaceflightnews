import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSpaceFlightNews from '../../service/useRequest';

import { FilteredArticle } from '../../../types/types';

import ArticleText from './ArticleText';
import './singleArticlePage.scss';
import Spinner from '../../spinner/Spinner';



const SingleArticlePage = () => {
    const block:FilteredArticle = {
        id: 0,
        title: " ",
        image: " ",
        summary: " ",
        date: " ",
    
    };

    const {id} = useParams();
   
    const [article, setArticle] = useState(block);

    const {getArticleById, loading} = useSpaceFlightNews();

    
    useEffect(() => {
        updateArticle()
    }, []);

    const updateArticle = () => {
        getArticleById(id)
        .then(onArticleLoaded);
    }
        
    const onArticleLoaded = (article:FilteredArticle) => {
        setArticle(article); 
    }
    
    const {title, image} = article;
    const spinner = loading ?  <Spinner/> :  null ;
    const content = loading ?  null :  <View title={title} image={image}/>

    return (
        <div style = {{"marginTop": "100px", "display": "flex", "justifyItems": "center", "alignItems": "center"  }}>
          {spinner}
          {content}
        </div>
        
    
        );
}


type ViewProps = {
    title: string
    image: string
}
const View = (props: ViewProps) => {

    
    return (
        <div style = {{"marginTop": "-100px"}}>
            <div className='banner'>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className='article-page'>
                <div className='article-page__text'>
                    <h2 className='article-page__text__title'>{props.title}</h2>
                    <ArticleText/>  
                </div>
                <NavLink to='/' className="article-page__link">Back to all</NavLink>
            </div>
        </div>
    )
}


export default SingleArticlePage;

