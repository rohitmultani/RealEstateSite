import {useEffect} from 'react';
const FetchData=()=>{

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
.then(response => console.log(response))
.catch(err => console.error(err));
}
useEffect(()=>{
    getData();
    console.log("mwo")
},[])

}
export default FetchData;