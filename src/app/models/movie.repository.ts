import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor () {
        this.movies = [
            {id: 1, title: "Örümcek Adam", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla assumenda sapiente autem ut illum ducimus dolorum dolores quidem exercitationem laborum. Blanditiis nihil esse nulla eum exercitationem ad facilis ullam aliquid?", imageUrl: "1.jpg", isPopular: false, datePublished: new Date(1990,10,10)},
            {id: 2, title: "Yenilmezler", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla assumenda sapiente autem ut illum ducimus dolorum dolores quidem exercitationem laborum. Blanditiis nihil esse nulla eum exercitationem ad facilis ullam aliquid?", imageUrl: "2.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
            {id: 3, title: "Başlangıç", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla assumenda sapiente autem ut illum ducimus dolorum dolores quidem exercitationem laborum. Blanditiis nihil esse nulla eum exercitationem ad facilis ullam aliquid?", imageUrl: "3.jpg", isPopular: false, datePublished: new Date(1990,10,10)},
            {id: 4, title: "Don't Look Up", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla assumenda sapiente autem ut illum ducimus dolorum dolores quidem exercitationem laborum. Blanditiis nihil esse nulla eum exercitationem ad facilis ullam aliquid?", imageUrl: "4.jpg", isPopular: true, datePublished: new Date(1990,10,10)}
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