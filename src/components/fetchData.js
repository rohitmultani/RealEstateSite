const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '749de37f52msh47fbc9075fd6a61p14bdcajsneb912b58bcae',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	}
};

fetch('https://bayut.p.rapidapi.com/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));