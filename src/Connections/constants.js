const API_KEY = process.env.React_App_API_KEY;
console.log(API_KEY);

export const main = {
    'base': 'https://api.themoviedb.org/3/',
    'image': 'https://image.tmdb.org/t/p/original',
    'key': API_KEY
}

export const videos = {
    'trending': `trending/all/week?api_key=${API_KEY}&language=en-US`,
    'originals': `discover/tv?api_key=${API_KEY}&with_networks=213`,
    'documentaries': `discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export const movies = {
    'action': `discover/movie?api_key=${API_KEY}&with_genres=28`,
    'comedy': `discover/movie?api_key=${API_KEY}&with_genres=35`,
    'horror': `discover/movie?api_key=${API_KEY}&with_genres=27`,
    'romance': `discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

console.log(videos.trending);
console.log(main.base)