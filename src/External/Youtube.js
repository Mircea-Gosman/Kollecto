/**
 * Sample JavaScript code for youtube.channels.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */
async function doAll() {
    try {
        await authenticate();
        await loadClient();
        const uploadPlaylist = (await getChannels()).result.items[0].contentDetails.relatedPlaylists.uploads;
        const videoIds = (await getVideoIds(uploadPlaylist)).result.items.map(item => item.snippet.resourceId.videoId);
        console.log(await getVideosInfo(videoIds));
    } catch (e) {
        console.log(e);
    }
}

function authenticate() {
    return window.gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"});
}
function loadClient() {
    window.gapi.client.setApiKey("AIzaSyDmqPQe3sGj1o6SCdeQBc606n-iYlE-p_0");
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function getChannels() {
    return window.gapi.client.youtube.channels.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "mine": true
    })
}
function getVideoIds(uploadPlaylist) {
    console.log("playlistItems")
    return window.gapi.client.youtube.playlistItems.list({
        "part": [
            "snippet,contentDetails"
        ],
        "maxResults": 25,
        "playlistId": uploadPlaylist,
    })
}
function getVideosInfo(videoIds) {
    return window.gapi.client.youtube.videos.list({
        "part": [
            "snippet,contentDetails"
        ],
        "id": videoIds
    })
}

window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "1011436539492-iu6bnbtvb4ktluegghoolmcuqv7lsj23.apps.googleusercontent.com"});
});

export default doAll;