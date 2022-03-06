import { useEffect, useState,useRef } from 'react';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet';
import {Form,FormControl,Button,Col } from 'react-bootstrap'
import Geocode from "react-geocode";
import './customLeaflet.css';
import { latLng,IconOptions,Icon} from 'leaflet';
import MarkerIcon from './marker.png'

var globalLat = 0;
var globalLng = 0;
const newicon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [30, 30]
});
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    
    keydown(event) {
      if(event.originalEvent.key === "Enter"){
        map.locate()
      }
     
     
    },
    locationfound(e) {
      setPosition(latLng(globalLat,globalLng))
      map.setView(latLng(globalLat,globalLng), 18)
    },
  })

  return position === null ? null : (
    <Marker position={position} icon = {newicon}>
      
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function GetMap(){
 
  const defaultZoom = 5;
  
    const [validated, setValidated] = useState(false);

    const [searchString, setSearchString ] = useState("");
    const [Longitude,setLongitude] = useState(0);
    const [Latitude,setLatitude] = useState(0);

 
    Geocode.setApiKey("AIzaSyC2wMHrM8FI1xA8z-6VG2B6X-tzasCQShk");

    function handleChangePostalCode(e){
      
      setSearchString((e.target.value).replace(/ /g,''))
      
   
 }





    function handleSubmit(e){
  
  
      const postalCodeRegex = new RegExp(/^[KLMNP]\d[ABCEGHJKLMNPRSTVXYZ]?\d[ABCEGHJKLMNPRSTVXYZ]\d$/i);
     
     
      if(postalCodeRegex.test(searchString) ){
        console.log('regex successful')

        Geocode.setRegion("ca");
        Geocode.fromAddress(searchString).then(
          (response) => {
          const {lat, lng}  = response.results[0].geometry.location;
            console.log(lat, lng);
            setLatitude(lat);
            setLongitude(lng);

            globalLat = lat;
            globalLng = lng;
             
          },
          (error) => {
            console.error(error);
          }
        );
        
          
       
      }else{
        
        setSearchString("")
        
        console.log('regex fail')
      }
      
      setValidated(true);

      e.preventDefault();

      
     }

     
     
    
    useEffect(() => {
     
      
      
      }, []);

     

 
    return (
      <>
 <Form validated={validated} onSubmit={handleSubmit} className='d-flex'>
 <Form.Group as={Col} md="3" controlId="validationCustom05">
    <FormControl type="text" placeholder="Enter Ontario Postal Code e.g L1A 1A1" className="mr-sm-2" value={searchString}
   onChange={handleChangePostalCode} required />
      
   <Form.Control.Feedback type="invalid"> 
            Invalid Postal Code
          </Form.Control.Feedback>
          
          </Form.Group>  
          <span ><Button type="submit" variant="success">Set Postal Code</Button></span>
           Hover Over The Map and Press Enter To Zoom Toward Postal Location
    </Form>  
        
    <MapContainer center={[Latitude,Longitude]} zoom={defaultZoom} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  
    <LocationMarker />
</MapContainer>

 </>     
    
 )
   
 

}



