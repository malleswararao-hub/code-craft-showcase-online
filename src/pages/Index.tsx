
import { useState } from "react";
import { MovieList } from "@/components/MovieList";
import { MovieBooking } from "@/components/MovieBooking";
import { BookingConfirmation } from "@/components/BookingConfirmation";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: string;
  rating: string;
  poster: string;
  description: string;
  showtimes: string[];
  price: number;
}

export interface BookingData {
  movie: Movie;
  showtime: string;
  seats: string[];
  totalPrice: number;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<'movies' | 'booking' | 'confirmation'>('movies');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentView('booking');
  };

  const handleBookingComplete = (booking: BookingData) => {
    setBookingData(booking);
    setCurrentView('confirmation');
  };

  const handleBackToMovies = () => {
    setCurrentView('movies');
    setSelectedMovie(null);
  };

  const handleNewBooking = () => {
    setCurrentView('movies');
    setSelectedMovie(null);
    setBookingData(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            CineBook - Movie Booking
          </h1>
        </div>
      </header>

      {currentView === 'movies' && (
        <MovieList onMovieSelect={handleMovieSelect} />
      )}

      {currentView === 'booking' && selectedMovie && (
        <MovieBooking 
          movie={selectedMovie} 
          onBookingComplete={handleBookingComplete}
          onBack={handleBackToMovies}
        />
      )}

      {currentView === 'confirmation' && bookingData && (
        <BookingConfirmation 
          booking={bookingData}
          onNewBooking={handleNewBooking}
        />
      )}
    </div>
  );
};

export default Index;
