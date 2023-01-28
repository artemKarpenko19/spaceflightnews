
export  type Article = {
    "id": number,
    "featured": boolean,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
                    {
                        "id": "string",
                        "provider": "string"
                    }
                ],
    "events": [
    {
        "id": "string",
        "provider": "string"
    }
    ]
}
export type FilteredArticle = {
    "id": number
    "title": string
    "image": string
    "summary": string
    "date": string

}


