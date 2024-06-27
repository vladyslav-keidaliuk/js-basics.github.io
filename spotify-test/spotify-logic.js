// Инициализация библиотеки
const spotifyApi = new SpotifyWebApi();

document.getElementById('search-button').addEventListener('click', function() {
    const songName = document.getElementById('song-input').value;
    searchSong(songName);
});

function getToken() {
    const clientId = '7f18449afd354c1a8848601f843f6fbd';
    const clientSecret = '4aa533d4cb304dcab1e36de024d0b04a';
    
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
