const numberOfFilms = +prompt('Скільки фільмів ви уже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
      b = prompt ('На скільки оціните його?', ''),
      c = prompt('Один із останніх переглянутих фільмів?', ''),
      d = prompt ('На скільки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
const number = 5;