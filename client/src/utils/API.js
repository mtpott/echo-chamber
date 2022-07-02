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

};


//get artist albums
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6381a2b4d1msh6a99bf22aead686p1fa121jsnfa16d82c3539',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



//user profile
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6381a2b4d1msh6a99bf22aead686p1fa121jsnfa16d82c3539',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/user_profile/?id=nocopyrightsounds&playlistLimit=10&artistLimit=10', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


//user followers
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6381a2b4d1msh6a99bf22aead686p1fa121jsnfa16d82c3539',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/user_followers/?id=nocopyrightsounds', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));