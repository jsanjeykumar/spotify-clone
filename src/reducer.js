export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,

    //token: 'BQC_cRWeDhAqF8X4Z_vQfCF_8RT5QMYlAZWYIC_sa7WcNQ6UkI7WTmkskO0oO5skSD9kDaSjUo6RLw2CNjxOUKIodKGTpZzLfy6aA8FfZY2PmPcaxAGqXl7xdi-LkQloM5yvRFIy4yQZ4-T4zxzC73hfiPNBu3iL7JAYcvP881new8GRzbC5'
}
const reducer = (state, action) => {
    //Action ->type,[payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default: return state
    }
}
export default reducer