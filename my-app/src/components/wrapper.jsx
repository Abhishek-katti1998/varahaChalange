import { useLocation } from "react-router"
import Main from "./main/main"
import Nav from "./nav/navBar.jsx"
import classes from './wrapper.module.css'

const Wrapper = () => {
    const location=useLocation()
    return (
        <div className={classes.wrapper}>
            <Nav />
             {location.pathname==='/'? <Main />:null}
            {location.pathname==='/dash1'?<h1>Dashboard1</h1>:null}
            {location.pathname==='/dash2'?<h1>Dashboard2</h1>:null}
        </div>
    )
}
export default Wrapper