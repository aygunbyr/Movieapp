import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor () {
        this.movies = [
            {id: 1, title: "Örümcek Adam", description: "film 1 açıklama", imageUrl: "1.jpg", isPopular: false},
            {id: 2, title: "Yenilmezler", description: "film 2 açıklama", imageUrl: "2.jpg", isPopular: true},
            {id: 3, title: "Başlangıç", description: "film 3 açıklama", imageUrl: "3.jpg", isPopular: false},
            {id: 4, title: "Don't Look Up", description: "film 4 açıklama", imageUrl: "4.jpg", isPopular: true}
        ];
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getPopularMovies(): Movie[] {
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id: number): Movie {
        return this.movies.find(i=>i.id==id)
    }


}