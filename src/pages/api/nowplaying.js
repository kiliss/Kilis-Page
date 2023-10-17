import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
  clientId: process.env.SPOTY_API_KEY,
  clientSecret: process.env.SPOTY_API_SECRET,
  redirectUri: process.env.SPOTY_REDIRECT_URI,
});

const handler = async (req, res) => {
  try {
    api.setRefreshToken(process.env.SPOTY_REFRESH_TOKEN);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body.access_token);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });
    res.status(200).json(recentTracks.body.items[0].track);

  } catch (err) {
    console.log("Something went wrong!", err);
  }
};

export default handler;
