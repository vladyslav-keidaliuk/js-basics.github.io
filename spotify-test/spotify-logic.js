// Инициализация библиотеки
const spotifyApi = new SpotifyWebApi();

document.getElementById('search-button').addEventListener('click', function() {
    const songName = document.getElementById('song-input').value;
    searchSong(songName);
});

function getToken() {
    const clientId = 'a51ab37efab04ca7ad90553928947072';
    const clientSecret = '7d066baad6f846aab178ed31955a944e';
    
    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
    .then(response => response.json())
    .then(data => data.access_token);
}

async function searchSong(songName) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Searching...';

    try {
        const token = await getToken();
        spotifyApi.setAccessToken(token);

        const response = await spotifyApi.searchTracks(songName);
        const track = response.tracks.items[0];

        if (track) {
            resultDiv.innerHTML = `
                <h2>${track.name} by ${track.artists.map(artist => artist.name).join(', ')}</h2>
                <img src="${track.album.images[0].url}" alt="${track.name}">
                <p><a href="${track.external_urls.spotify}" target="_blank">Listen on Spotify</a></p>
            `;
        } else {
            resultDiv.innerHTML = 'No results found.';
        }
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = 'An error occurred. Please try again later.';
    }
}
