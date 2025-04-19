const playlists = {
  happy: {
    name: "Happy Hits!",
    embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC"
  },
  sad: {
    name: "Sad Songs",
    embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1"
  },
  energetic: {
    name: "Beast Mode",
    embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP"
  },
  chill: {
    name: "Chill Vibes",
    embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
  }
};
function showPlaylist(mood) {
  const p = playlists[mood];

  document.body.className = '';
  document.body.classList.add(mood);

  document.getElementById("playlist").innerHTML = `
    <h2>${p.name}</h2>
    <iframe 
      src="${p.embed}" 
      width="100%" 
      height="152" 
      frameborder="0" 
      allow="autoplay; 
      encrypted-media" 
      allowfullscreen>
    </iframe>
    <p style="margin-top: 15px;">
      <a href="${p.embed.replace('/embed/', '/')}" target="_blank" style="color: inherit; text-decoration: underline;">
        Get this playlist on Spotify
      </a>
    </p>
  `;
}