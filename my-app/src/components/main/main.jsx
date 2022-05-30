import classes from './main.module.css'
import Header from '../header/header';
import SurveyInfo from '../survey/surveyInfo';
import FarmerInfo from '../Farmers/farmerInfo';
import GoogleApiWrapper from '../UI/googleMap';
import LinearChart from '../UI/chart';
import { useEffect, useState } from 'react';
const Main = () => {
      let [coords,setCoords]=useState(null);
    function success(pos) {
        let crds = pos.coords;
        setCoords(crds)
//    let map=new props.google.maps.Map(document.getElementById('map'),mapOptions)
    //     let markerOptions = {
    //         position: new props.google.maps.LatLng(16.2478999, 74.7676582),
    //         map
    //     }
    //     let marker = new props.google.maps.Marker(markerOptions)
    //  console.log(marker)
//   setCoords(crd)
  console.log('Your current position is:');
  console.log(`Latitude : ${crds.latitude}`);
  console.log(`Longitude: ${crds.longitude}`);
  console.log(`More or less ${crds.accuracy} meters.`);
    }


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error); 
    },[])

    return (
        <div className={classes.mainContainer}>
            <Header />
            <div className={classes.main}>
                <div style={{marginLeft:"20px"}}>
                <LinearChart/>
                </div>
          
                <GoogleApiWrapper lat={coords?.latitude} lng={ coords?.longitude}/>
            </div>
            <SurveyInfo />
            <div className={classes.farmerInfo}>
            <FarmerInfo/>
            </div>
           
      </div>
  )  
}
export default Main;