import React from 'react';
import { BsUiChecksGrid } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { Link } from "react-router-dom";
import classes from './nav.module.css';
const Nav = () => {

    return (<div className={classes.navContainer}>
    
        <Link to='/'>
            <BsUiChecksGrid size={20} style={{ cursor: "pointer" }} />
        </Link>
       
      
        <Link to='/dash1'>
        <GiProgression size={20} style={{cursor:"pointer"}}/>
        </Link>
     
        <Link to='/dash2'> <HiOutlineDocumentText size={20} style={{cursor:"pointer"}}/></Link>
      

        
    </div>)
}
export default Nav;