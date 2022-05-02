import React from 'react';
import { MovieCard } from '../../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          title: 'The extraordinary life of Alan Turing',
          author: 'Michael Lee Richardson',
          illustrator: 'Ffreda Chiu',
          coverUrl: 'https://www.penguin.co.uk/content/dam/prh/books/316/316558/9780241434017.jpg.transform/PRHDesktopWide_small/image.jpg',
          releaseYear: 2020
        },
        {
          _id: 2,
          title: 'The extraordinary life of Freddie Mercury',
          author: 'Michael Lee Richardson',
          illustrator: 'Maggie Cole',
          coverUrl: 'https://www.penguin.co.uk/content/dam/prh/books/316/316555/9780241433966.jpg.transform/PRHDesktopWide_small/image.jpg',
          releaseYear: 2020

        },
        {
          _id: 3,
          title: 'Julian Is a Mermaid',
          author: 'Jessica Love',
          illustrator: 'Jessica Love',
          coverUrl: 'https://images.booksense.com/images/458/690/9780763690458.jpg',
          releaseYear: 2018
        },
        {
          _id: 4,
          title: 'My footprints',
          author: 'Bao Phi',
          illustrator: 'Basia Tran',
          coverUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/19/22/asset/44477077c29e/sub-buzz-501-1582150315-11.jpg?downsize=600:*&output-format=auto&output-quality=auto',
          releaseYear: 2019
        },
        {
          _id: 5,
          title: 'Introducing Teddy',
          author: 'Jessica Walton',
          illustrator: 'Dougal McPherson',
          coverUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/20/19/asset/0c82d8fc0a0f/sub-buzz-788-1582226458-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
          releaseYear: 2016
        },
        {
          _id: 6,
          title: 'The Christmas Truck',
          author: 'J.B. Blankenship',
          illustrator: 'Cassandre Bolan',
          coverUrl: 'https://images.booksense.com/images/408/743/9780990743408.jpg',
          releaseYear: 2014
        },
        {
          _id: 7,
          title: 'And Tango Makes Three',
          author: ['Justin Richardson', 'Peter Parnell'],
          illustrator: 'Henry Cole',
          coverUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/19/20/asset/9bc4c1b086f2/sub-buzz-374-1582143100-10.jpg?downsize=600:*&output-format=auto&output-quality=auto',
          releaseYear: 2015
        },
        {
          _id: 8,
          title: 'Prince & Knight',
          author: 'Daniel Haack',
          illustrator: 'Stevie Lewis',
          coverUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/19/20/asset/2688b0364b69/sub-buzz-386-1582143959-32.jpg?downsize=600:*&output-format=auto&output-quality=auto',
          releaseYear: 2018
        },
        {
          _id: 9,
          title: 'When Aidan became a brother',
          author: 'Kyle Lukoff',
          illustrator: 'Kaylani Juanita',
          coverUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/19/19/asset/7cbde0618b40/sub-buzz-316-1582140393-5.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
          releaseYear: 2019
        },
        {
          _id: 10,
          title: 'Sharice\'s Big Voice',
          author: ['Sharice Davids', 'Nancy K. Mays'],
          illustrator: 'Joshua Mangeshig Pawis-Steckley',
          coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71jlUAwd5FL.jpg',
          releaseYear: 2021
        },
        {
          _id: 11,
          title: 'Stonewall: A Building. An Uprising. A Revolution',
          author: 'Rob Sanders',
          illustrator: 'Jamey Christoph',
          coverUrl: 'https://images3.penguinrandomhouse.com/cover/700jpg/9781524719524',
          releaseYear: 2019
        },
        {
          _id: 12,
          title: 'Pride: The Story of Harvey Milk and the Rainbow Flag',
          author: 'Rob Sanders',
          illustrator: 'Steven Salerno',
          coverUrl: 'https://images3.penguinrandomhouse.com/cover/700jpg/9780399555312',
          releaseYear: 2018
        }

      ],
      selectedMovie: null

    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    /* if (selectedMovie) return <MovieView movie={selectedMovie} />; */

    if (movies.length === 0)
      return <div className='main-view'>The list is empty!</div>

    return (
      <div className='main-view'>

        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (<MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}

