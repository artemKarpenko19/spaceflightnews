
import { NavLink} from "react-router-dom";



const Page404 = () => {
    return (
        <div> 
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page does not exict</p>
            <NavLink style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to='/'>Back to main page</NavLink>
        </div>
    )
}


export default Page404;