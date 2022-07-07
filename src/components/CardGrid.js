import {useCallback, useEffect,useState,useRef} from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PropertyCard from './Card';
import { useSelector,useDispatch } from 'react-redux';
import { upDate } from '../Utils/Store';
import CircularProgress from '@mui/material/CircularProgress';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CardGrid=()=> {
    const data = useSelector((state=>state.Notes))
    const dataFetched = useSelector((state=>state.Data))
    const dispatch = useDispatch();
    const isMounted = useRef(false);
    const isMounted2 = useRef(false);
    const [propertyData,setPropertyData] = useState(undefined);
    const [showData,setShowData] = useState(false);
    const [found,setFound] = useState(true);
    function getData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '749de37f52msh47fbc9075fd6a61p14bdcajsneb912b58bcae',
            'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
        }
    };
    
      fetch('https://zoopla.p.rapidapi.com/properties/list?area=Oxford%2C%20Oxfordshire&identifier=oxford&category=residential&order_by=age&ordering=descending&page_number=1&page_size=40', options)
          .then(response => response.json())
          .then(response => {
              console.log(response.listing,'sk')
              setShowData(true)
          setPropertyData(response.listing);
          dispatch(upDate(response.listing));
          setFound(true)
          
      }
    )
    .catch(err => console.error(err));
}
const getFilter=useCallback(()=>{
  const filteredData =  dataFetched.data.filter((item)=>{
    switch(data.name){
      case 'Bathrooms':
        if(item.num_bathrooms==data.data){
          setFound(true)
            console.log('found')
            return item;
        }
        else{ setFound(false)}
        break;
      case 'Bedrooms':
        if(item.num_bedrooms==data.data){
          setFound(true)
          console.log('found')
          return item;
      }
      else{ setFound(false)}
      break;
      case 'Type':
        if(item.property_type===data.data){
          setFound(true)
          console.log('found')
          return item;
        }
        else{ setFound(false)}
        break;
        case 'Price':
          const priceHouse = data.data.split("-");
          setFound(true)
        console.log(priceHouse)
        if(item.price>=priceHouse[0]&&item.price<=priceHouse[1]){
          return item;
        }
        else{ setFound(false)}
        break;
        case 'Search':
          if(item.displayable_address.includes(data.data)||item.street_name.includes(data.data)){
            setFound(true)
            console.log('found')
            return item;
          }
          else{ setFound(false)}
          break;

      default : 
setFound(false)
      return item;  
    }
    return 0;
    
  },[data.data])
setPropertyData(filteredData);
// console.log(filterData)
console.log(filteredData)
console.log(dataFetched.data)
})
useEffect(()=>{ 
    getData();
    },[])
    useEffect(()=>{
      if(isMounted.current){
        setTimeout(()=>{

          getFilter();
        },1000)
        console.log("ks")
      } else {
       isMounted.current = true;
      }
    },[data.data])
    useEffect(()=>{
      if(isMounted2.current){
            setPropertyData(dataFetched.data);
        } 
        else {
          isMounted2.current = true;
         }
      
    },[data.reset])
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        // spacing={{ xs:3}}
        sx={{flexWrap:'wrap',m:'auto',pt:3,pl:4}}
        >   
            {/* <Button variant="contained" onClick={getData}> Get</Button>     */}
            
                {showData? 
                
                (propertyData.map(x => 
                  <Item key={x.listing_id} sx={{m:2}}>
                <PropertyCard price={x.price} image={x.original_image[0]} street={x.street_name} description={x.displayable_address} bed={x.num_bedrooms} bath={x.num_bathrooms}
                type={x.property_type}/>
                </Item>
                    )):(<CircularProgress sx={{textAlign:'center' }}/>)
                }
                {!found?(
                   <Item sx={{m:2}}>
                   <PropertyCard price={"Nan"} street={"NV"} description={"NV"} bed={"NV"} bath={"NV"}
                   type={"NV"}/>
                   </Item>
                ):""}
      </Stack>
    </div>
  );
}
export default CardGrid;