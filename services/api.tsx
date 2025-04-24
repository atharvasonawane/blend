export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
};

export const fetchPopularMovies = async ({ query = '' }: { query?: string }) => {
    if (!TMDB_CONFIG.API_KEY) {
        throw new Error('TMDB API Key is missing. Check your .env file and config.');
    }

    const endpoint = query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        : '/discover/movie?sort_by=popularity.desc';

    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};
