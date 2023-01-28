// https://api.spaceflightnewsapi.net/v3/articles?_limit=6
import { useHttp } from "./useHttp";
import {Article} from "../../types/types";

const useSpaceFlightNews = () => {
    
    const {loading, request} = useHttp();

    const getAllArticles = async() => {
    const res = await request("https://api.spaceflightnewsapi.net/v3/articles?_limit=100");
    return res.map(_transformData);
    }

    const getArticleById = async (id:number|string|undefined) => {
        const res = await request(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        return _transformData(res);
    }

   
       
   const _transformData = (data:Article) => {
  
        return {
                id: data.id,
                title: data.title ? data.title : " ",
                summary: data.summary.length > 100 ? `${data.summary.slice(0, 100)}...` : data.summary,
                image: data.imageUrl,
                date: data.publishedAt,
        }
    }

    return {loading, getAllArticles, getArticleById};
}

export default useSpaceFlightNews;