<<<<<<< HEAD
//GET ME
export const getMyAlbums = (token) => {
	return fetch('/api/users/me', {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		}
	});
};

//ADD NEW USER
export const addUser = (userData) => {
	return fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(addUser),
	});
};

//LOGIN USER
export const loginUser = (userData) => {
	return fetch('/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
};

//PUT REQUEST TO SAVE ALBUM TO DB
export const saveAlbum = (albumData, token) => {
	return fetch('/api/users', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			// authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(albumData),
	});
};

// PUT REQUEST TO DELETE ALBUM FROM DB
export const removeAlbum = (albumId, token) => {
	return fetch(`/api/users/albums/${albumId}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`
		}
	});
};

=======
//PUT REQUEST TO SAVE ALBUM TO DB

// PUT REQUEST TO DELETE ALBUM FROM DB
>>>>>>> feature/components
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