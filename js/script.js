"use strict";
const numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('Насколько оцениваете его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('Насколько оцениваете его?', '');

personslMovieDB.movies [a] = b;
personslMovieDB.movies [c] = d;

console.log (personslMovieDB);
