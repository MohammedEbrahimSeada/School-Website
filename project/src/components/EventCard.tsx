import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, image }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="md:w-1/3">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 md:w-2/3">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;