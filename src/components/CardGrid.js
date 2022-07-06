import {useEffect,useState} from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropertyCard from './Card';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CardGrid=()=> {
    const data = useSelector((state=>state))
    const [propertyData,setPropertyData] = useState({});
    const [showData,setShowData] = useState(false);
    function getData(){
    
            // const options = {
            //     method: 'GET',
            //     headers: {
            //         'X-RapidAPI-Key': '749de37f52msh47fbc9075fd6a61p14bdcajsneb912b58bcae',
            //         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            //     }
            // };
        
        // fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=50&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
        //     const options = {
        //         method: 'GET',
        //         headers: {
        //             'X-RapidAPI-Key': '749de37f52msh47fbc9075fd6a61p14bdcajsneb912b58bcae',
        //             'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        //         }
        //     };
            
            // fetch('https://bayut.p.rapidapi.com/properties/detail?externalID=4937770', options)
            //     .then(response => response.json())
            //     .then(response => console.log(response))
            //     .catch(err => console.error(err));

    //         fetch('https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
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
        
    }
    )
    .catch(err => console.error(err));
}
const getFilter=()=>{
    console.log(data[0])
    
    console.log("filter")
  const filteredData =  propertyData.filter((item)=>{
    if(item.property_type==data[0]){
        console.log('found')
        return item;
    }
    
  })
setPropertyData(filteredData);
console.log(filteredData)
console.log(propertyData)
}
// useEffect(()=>{ 
//     getData();
//     console.log(propertyData.listing,"simws")   
//     },[])
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        // spacing={{ xs:3}}
        sx={{flexWrap:'wrap',m:'auto',pt:3,pl:4}}
        >
            <Button variant="contained" onClick={getData}> SignUp</Button>    
            <Button variant="contained" onClick={getFilter}> filter</Button>    
                {showData?propertyData.map(x => 
                
                <Item key={x.listing_id}>
                <PropertyCard price={x.price} image={x.original_image[0]} street={x.street_name} description={x.displayable_address} bed={x.num_bedrooms} bath={x.num_bathrooms}
                type={x.property_type}/>
                </Item>
                    ):" "
                }
      </Stack>
    </div>
  );
}
export default CardGrid;