//PUT REQUEST TO SAVE ALBUM TO DB

// PUT REQUEST TO DELETE ALBUM FROM DB
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0f9c2e4cdmshbe352db2ac16675p113388jsne92dbdd69642',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

let oneAlbumData = [];

async function formatAlbumData(data) {
	for (let i = 0; i < data.albums.items.length; i++) {
		// console.log(data.albums.items[i]);
		let albumName = data.albums.items[i].data.name;
		let artist = data.albums.items[i].data.artists.items[0].profile.name;
		let albumCover = data.albums.items[i].data.coverArt.sources[0];
		let albumId = data.albums.items[i].data.uri;

		const oneAlbum = {
			albumName,
			artist,
			albumCover,
			albumId
		};
		oneAlbumData.push(oneAlbum);

		console.log(oneAlbum);
	}
}

export async function getAlbumData() {
  fetch('https://spotify23.p.rapidapi.com/search/?q=%25a%25&type=albums&offset=100&limit=10&numberOfTopResults=5', options)
	.then(response => { response.json().then(data => { formatAlbumData(data)})})
}