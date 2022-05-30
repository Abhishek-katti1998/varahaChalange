import classes from './ui.module.css'
import React,{useEffect, useState} from 'react';
import { Map, GoogleApiWrapper ,Marker} from 'google-maps-react';
function SimpleMap(props) {
    // const [coords, setCoords] = useState(null)
    // useEffect(() => {
    //        
    // },[])
    // let coords;
    // function success(pos) {
    //     coords = pos.coords;
        // let mapOptions = {
        //     center: {
        //         lat: 16.2478999,
        //     lng:74.7676582},
        //     zoom:12
        // }
//    let map=new props.google.maps.Map(document.getElementById('map'),mapOptions)
    //     let markerOptions = {
    //         position: new props.google.maps.LatLng(16.2478999, 74.7676582),
    //         map
    //     }
    //     let marker = new props.google.maps.Marker(markerOptions)
    //  console.log(marker)
//   setCoords(crd)
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
//  navigator.geolocation.getCurrentPosition(success, error);
console.log(props.lat,props.lng)
    return (
        <div className={classes.map}> 
        <Map
            google={props.google}
            style={{ width: "850px", height: "400px" }}
            zoom={10}
            initialCenter={
                {
                    lat:props.lat,
                    lng:props.lng
                }
            }
            />
            {/* <Marker lat={16.2478999} lng={74.7676582 }/> */}
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey:"AIzaSyDiyIK7-cD12dwDSOZUD7ya-xfhYeZ-Bzo"
})(SimpleMap)