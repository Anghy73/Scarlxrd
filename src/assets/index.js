const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC-0Urs9tifl-7DDE1RLbBHQ&part=snippet%2Cid&order=date&maxResults=8";

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ea1eef78c5msh9702f8e55579dd5p11fe12jsn0912b21e53a0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
  const json = response.json()
  return json;
}

(async () => {
  try {
    const videos = await fetchData(API);

    let view = `${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-40 lg:aspect-none">
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="">
          </a>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-500">
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}`;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();