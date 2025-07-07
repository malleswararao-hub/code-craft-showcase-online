
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import { Movie } from "@/pages/Index";

interface MovieListProps {
  onMovieSelect: (movie: Movie) => void;
}

const movies: Movie[] = [
  {
    id: "1",
    title: "Avengers: Endgame",
    genre: "Action, Adventure",
    duration: "181 min",
    rating: "8.4",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    showtimes: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
    price: 12
  },
  {
    id: "2",
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    duration: "152 min",
    rating: "9.0",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    description: "Batman faces the Joker, a criminal mastermind who seeks to undermine Gotham's other crime families and terrorize the city.",
    showtimes: ["11:00 AM", "3:00 PM", "7:00 PM", "11:00 PM"],
    price: 10
  },
  {
    id: "3",
    title: "Inception",
    genre: "Sci-Fi, Thriller",
    duration: "148 min",
    rating: "8.8",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
    price: 11
  },
  {
    id: "4",
    title: "Interstellar",
    genre: "Sci-Fi, Drama",
    duration: "169 min",
    rating: "8.6",
    poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
    price: 13
  }
];

export const MovieList = ({ onMovieSelect }: MovieListProps) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Now Showing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden">
            <div className="aspect-[2/3] overflow-hidden">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white line-clamp-2">{movie.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{movie.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
              </div>
              <p className="text-sm text-slate-300">{movie.genre}</p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-slate-400 mb-4 line-clamp-3">{movie.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-red-400">${movie.price}</span>
                <Button 
                  onClick={() => onMovieSelect(movie)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
