
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Star } from "lucide-react";
import { Movie, BookingData } from "@/pages/Index";

interface MovieBookingProps {
  movie: Movie;
  onBookingComplete: (booking: BookingData) => void;
  onBack: () => void;
}

export const MovieBooking = ({ movie, onBookingComplete, onBack }: MovieBookingProps) => {
  const [selectedShowtime, setSelectedShowtime] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Generate seat layout (10 rows, 12 seats per row)
  const generateSeats = () => {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    
    for (const row of rows) {
      for (let i = 1; i <= 12; i++) {
        seats.push(`${row}${i}`);
      }
    }
    return seats;
  };

  const seats = generateSeats();
  const occupiedSeats = ['A5', 'A6', 'B3', 'C7', 'C8', 'D1', 'F9', 'F10', 'H5'];

  const handleSeatClick = (seat: string) => {
    // Block occupied seats from being selected
    if (occupiedSeats.includes(seat)) {
      return;
    }
    
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatClass = (seat: string) => {
    if (occupiedSeats.includes(seat)) {
      return "bg-red-600 cursor-not-allowed opacity-75";
    }
    if (selectedSeats.includes(seat)) {
      return "bg-green-600 hover:bg-green-700 cursor-pointer";
    }
    return "bg-slate-600 hover:bg-slate-500 cursor-pointer";
  };

  const handleBooking = () => {
    if (!selectedShowtime || selectedSeats.length === 0) return;
    
    const booking: BookingData = {
      movie,
      showtime: selectedShowtime,
      seats: selectedSeats,
      totalPrice: selectedSeats.length * movie.price
    };
    
    onBookingComplete(booking);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Button 
        onClick={onBack} 
        variant="ghost" 
        className="mb-6 text-white hover:text-slate-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Movies
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Movie Info */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">{movie.title}</CardTitle>
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
          </CardHeader>
          <CardContent>
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-slate-300 text-sm">{movie.description}</p>
          </CardContent>
        </Card>

        {/* Booking Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Showtime Selection */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Select Showtime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {movie.showtimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedShowtime === time ? "default" : "outline"}
                    onClick={() => setSelectedShowtime(time)}
                    className={selectedShowtime === time ? "bg-red-600 hover:bg-red-700" : "border-slate-600 text-white hover:bg-slate-700"}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seat Selection */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Select Seats</CardTitle>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-600 rounded"></div>
                  <span className="text-slate-400">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-slate-400">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-slate-400">Booked</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Screen */}
              <div className="text-center mb-8">
                <div className="bg-slate-700 text-white py-2 px-8 rounded-lg inline-block">
                  SCREEN
                </div>
              </div>

              {/* Seats Grid */}
              <div className="grid grid-cols-12 gap-2 max-w-2xl mx-auto">
                {seats.map((seat) => (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    className={`w-8 h-8 rounded text-xs font-medium transition-colors ${getSeatClass(seat)}`}
                    disabled={occupiedSeats.includes(seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Summary */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Movie:</span>
                  <span>{movie.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Showtime:</span>
                  <span>{selectedShowtime || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Seats:</span>
                  <span>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per ticket:</span>
                  <span>${movie.price}</span>
                </div>
                <div className="border-t border-slate-600 pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold text-white">
                    <span>Total:</span>
                    <span>${selectedSeats.length * movie.price}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleBooking}
                disabled={!selectedShowtime || selectedSeats.length === 0}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 disabled:bg-slate-600"
              >
                Complete Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
