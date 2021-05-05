// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = "http://localhost:3000/";

const clientId = "954801ec31794ad5b8a18b95a3c0f53e";

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//     "%20"
// )}&response_type=token&show_dialog=true`;