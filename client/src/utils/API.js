//PUT REQUEST TO SAVE ALBUM TO DB

// PUT REQUEST TO DELETE ALBUM FROM DB
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0f9c2e4cdmshbe352db2ac16675p113388jsne92dbdd69642',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};






export async function getAlbumData() {
  // console.log('button clicked, function called!');

  const response = fetch('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  console.log(response);

}