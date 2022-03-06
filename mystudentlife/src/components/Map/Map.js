import { useEffect, useState} from 'react';
import { MapContainer, TileLayer,Marker,Popup,useMap} from 'react-leaflet';
import {Form,FormControl,Button } from 'react-bootstrap'
import Geocode from "react-geocode";
import './customLeaflet.css';



 


export default function GetMap(){
  const defaultCenter = [38.9072, -77.0369];
  const defaultZoom = 8;
  
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
      e.preventDefault();
     
      if(postalCodeRegex.test(searchString) ){
        console.log('regex successful')

        Geocode.setRegion("ca");
        Geocode.fromAddress(searchString).then(
          (response) => {
          const {lat, lng}  = response.results[0].geometry.location;
            console.log(lat, lng);
            setLatitude(lat);
            setLongitude(lng);
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
     }

     
     
    
    useEffect(() => {
     
      
      
      }, []);

     

 
    return (
      <>
 <Form validated={validated} onSubmit={handleSubmit} className='d-flex'>
    <FormControl type="text" placeholder="Ontario Postal Code" className="mr-sm-2" value={searchString}
   onChange={handleChangePostalCode} required/>
   
   <span className="border border-dark"><Button type="submit" variant="primary">Search Clinics</Button></span>
    

   
    </Form>  
        
    <MapContainer center={defaultCenter} zoom={defaultZoom} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[Latitude,Longitude]}>
    <Popup>
    You are Here
    </Popup>
   
  </Marker>
  
</MapContainer>

 </>     
    
 )
   
 

}



