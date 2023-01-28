
import { Typography } from "@mui/material";


type PropsType = {
     results: number|string
}

const SearchInfo = (props:PropsType) => {

    return (
        <Typography variant="h6" sx={{paddingTop: "45px"}}>
            Results {props.results}
        </Typography>
    )
}

export default SearchInfo;