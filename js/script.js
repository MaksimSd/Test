
const numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

  const a = prompt ('Один из последних просмотренных фильмов?', ''),
        b = prompt ('На скольтко его оцениваете?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
  }   else {
        i--;
  }  

}

if (numberOfFilms.count < 10){
      console.log ('Просмотрено довольно мало фильмов', '');
}
else if (numberOfFilms.count < 30){
      console.log ('Вы классический зритель', '');
}
else if (numberOfFilms.count => 30){
      console.log ('Вы киноман', '');
}
else {
      console.log( 'Произошла ошибка', '' );
}

console.log (personalMovieDB);
