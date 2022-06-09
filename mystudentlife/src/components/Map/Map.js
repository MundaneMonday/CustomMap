import { useEffect, useState } from 'react';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet';
import {Form,FormControl,Button,Col } from 'react-bootstrap'
import './customLeaflet.css';
import { latLng,Icon} from 'leaflet';
import MarkerIcon from './marker.png'
import MarkerIcon2 from './icons8-map-48.png'


const newicon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [30, 30]
});
const newicon2 = new Icon({
  iconUrl: MarkerIcon2,
  iconSize: [30, 30]
});


export default function GetMap(){
 
  const defaultZoom = 5;
  
    const [validated, setValidated] = useState(false);

    const [searchString, setSearchString ] = useState("");
    const [Longitude,setLongitude] = useState(0);
    const [Latitude,setLatitude] = useState(0);
    const [NearbyPlaces,setNearbyPlaces] = useState([])
    const postalCodeRegex = new RegExp(/^[K-P]\d[A-Z]\d[A-Z]\d$/i);

    function LocationMarker() {
     
      const map = useMapEvents({
        keydown(event) {
          if(event.originalEvent.type === "submit" || event.originalEvent.key === "Enter"){
            map.locate()
          }
         
         
        },
        locationfound() {
          
          map.setView(latLng(Latitude,Longitude), 20)
        },
      })
    
      return null
    }
  
    function handleChangePostalCode(e){
      
      setSearchString((e.target.value).replace(/ /g,''))
      
      setValidated(false)
   
 }
 const FetchNearbyPlaces = async()=>{
  const NearbySearchAPI = `https://murmuring-garden-88441.herokuapp.com/api/map/${Latitude}/${Longitude}`
  try{
    const response = await fetch(NearbySearchAPI);
    const json = await response.json()


      setNearbyPlaces(json)
    
    console.log(NearbyPlaces)
   
  }catch(error){
    console.log(error);
  }
}

    function handleSubmit(e){
  
  
    
    
      //if postalcode matches the regex
      if(postalCodeRegex.test(searchString) ){
        console.log('regex successful')

       //use Google geocoding api to convert the postalcode to coordinates
        const FetchLatlng = async() =>{
          const GeocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchString}&region=ca&key=${process.env.REACT_APP_GOOGLE_MAP_API_URL}`
          try{
          const response = await fetch(GeocodingURL);
          const json = await response.json()
         
         //set the states for latitude and longitude
         setLatitude(json.results[0].geometry.location.lat)
         setLongitude(json.results[0].geometry.location.lng)
            
         

         console.log(`${json.results[0].geometry.location.lat},${json.results[0].geometry.location.lng}`)
         
         
        }catch (error) {
         console.log(error);
        }
       }
          FetchLatlng();
        FetchNearbyPlaces()
        setValidated(true) 
       
      }
      
     
       
      e.preventDefault();

      
     }

     //only fetch nearby places API if the latitude or longitude state changes 
     useEffect(()=>{
      FetchNearbyPlaces()
     },[Latitude,Longitude])

 
    return (
      <>
 <Form validated={validated} onSubmit={handleSubmit} className='d-flex'>
 <Form.Group as={Col} md="3" controlId="validationCustom05">
    <Form.Control type="text" placeholder="Enter Ontario Postal Code e.g L1A1A1" className="mr-sm-2" value={searchString} isInvalid={!postalCodeRegex.test(searchString) && searchString != ""}
   onChange={handleChangePostalCode} required />
      
   <Form.Control.Feedback type="invalid"> 
            Invalid Postal Code
          </Form.Control.Feedback>
          
          </Form.Group>  
          <span ><Button type="submit" variant="success">Set Postal Code</Button></span>
           Hover Over The Map and Press Enter To Zoom Toward Postal Location
    </Form>  
        
    <MapContainer center={[Latitude,Longitude]}  zoom={defaultZoom} minZoom={defaultZoom} maxZoom={16}>
  <TileLayer
    
    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    attribution='Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    
  />


   <Marker position={[Latitude,Longitude]} icon = {newicon2}>
   <Popup>You are here</Popup>
      
    </Marker>
{Object.keys(NearbyPlaces).map((index)=>{
  return <Marker key={index} position={[NearbyPlaces[index].geometry.location.lat,NearbyPlaces[index].geometry.location.lng]} icon = {newicon}>
      <Popup><b>Place Name:</b> {NearbyPlaces[index].name}
      <br></br>
      <b>Address:</b>{NearbyPlaces[index].vicinity}
      <br></br>
      <b>Business Status:</b>{NearbyPlaces[index].business_status}
      </Popup>
    </Marker>

})}
    

    
   
  
    <LocationMarker />

 
</MapContainer>

 </>     
    
 )
   
 

}
