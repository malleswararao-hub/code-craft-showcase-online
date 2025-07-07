
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { BookingData } from "@/pages/Index";

interface BookingConfirmationProps {
  booking: BookingData;
  onNewBooking: () => void;
}

export const BookingConfirmation = ({ booking, onNewBooking }: BookingConfirmationProps) => {
  const bookingId = `BK${Date.now().toString().slice(-6)}`;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
          <p className="text-slate-400">Your tickets have been successfully booked</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Ticket className="w-5 h-5" />
              Booking Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Booking ID</h3>
                <p className="text-white font-mono">{bookingId}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Movie</h3>
                <p className="text-white">{booking.movie.title}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Date</h3>
                <p className="text-white flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date().toLocaleDateString()}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Showtime</h3>
                <p className="text-white flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {booking.showtime}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Cinema</h3>
                <p className="text-white flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  CineBook Theater
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">Screen</h3>
                <p className="text-white">Screen 1</p>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-4">
              <h3 className="text-sm font-medium text-slate-400 mb-2">Seats</h3>
              <div className="flex flex-wrap gap-2">
                {booking.seats.map((seat) => (
                  <span 
                    key={seat}
                    className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {seat}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-600 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Amount Paid</span>
                <span className="text-2xl font-bold text-green-400">${booking.totalPrice}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardContent className="pt-6">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-white font-medium mb-2">Important Information</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Please arrive 15 minutes before showtime</li>
                <li>• Bring a valid ID for verification</li>
                <li>• No outside food or beverages allowed</li>
                <li>• Screenshots of this confirmation are valid tickets</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <Button 
            onClick={onNewBooking}
            className="bg-red-600 hover:bg-red-700 px-8"
          >
            Book Another Movie
          </Button>
          <p className="text-sm text-slate-400">
            Thank you for choosing CineBook! Enjoy your movie!
          </p>
        </div>
      </div>
    </div>
  );
};
