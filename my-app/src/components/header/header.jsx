import classes from './header.module.css';
import  { useState } from 'react';
import AgentPicker from '../UI/agentPicker';
import Datepicker from '../UI/DatePicker';
import DropDown from '../UI/DropDown';
const Header = () => {
    const [startDate, setDate] = useState(
       new Date()
    )
    return (<>
        <header className={classes.headerContainer}>
            <h3>Summary</h3>
            <div className={classes.rigthChild}>
                 <Datepicker />
                  <DropDown/>
            </div>
           
            {/* <AgentPicker/> */}
        </header>
        <div className={classes.headerInfoContainer}>
            <div className={classes.flexItems}>
                <p>Farmers</p>
               <h1>20</h1>
            </div>
              <div className={classes.flexItems}>
                <p>Villages</p>
               <h1>12</h1>
            </div>
              <div className={classes.flexItems}>
                <p>Survey Agents</p>
               <h1>5</h1>
            </div>
              <div className={classes.flexItems}>
                <p>Total Acrage</p>
               <h1>299</h1>
            </div>
              <div className={classes.flexItems}>
                <p>Farm id</p>
               <h1>26</h1>
            </div>
              <div className={classes.flexItems}>
                <p>Calculated Average</p>
               <h1>279.85</h1>
            </div>
            <div className={classes.flexItems}>
                <p>Deviation In_Acres</p>
               <h1>-8.15</h1>
            </div>
            
        </div>
     </>    
   )
}
export  default Header;