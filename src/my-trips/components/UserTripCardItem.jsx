import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg'); // Default image
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; 

  useEffect(() => {
    if (trip?.userSelection?.location?.label) {
      GetUnsplashPhoto(trip.userSelection.location.label);
    }
  }, [trip]);

  const GetUnsplashPhoto = async (keyword) => {
    try {
      if (!ACCESS_KEY) return;

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&per_page=1&client_id=${ACCESS_KEY}`
      );
      
      if (!response.ok) {
        console.log("Unsplash Error:", response.status);
        return;
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setPhotoUrl(data.results[0].urls.small);
      }
    } catch (error) {
      console.log("Error loading trip image:", error);
    }
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='group hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden cursor-pointer border border-gray-100 bg-white h-full'>
        
        {/* Image Container */}
        <div className='relative h-[220px] overflow-hidden'>
             <img
                src={photoUrl}
                alt={trip?.userSelection?.location?.label}
                className='object-cover h-full w-full group-hover:scale-110 transition-transform duration-500'
                onError={(e) => (e.target.src = '/placeholder.jpg')}
             />
             {/* Gradient overlay for text readability if needed */}
             <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <h2 className='font-bold text-lg text-gray-800 line-clamp-1'>
            {trip?.userSelection?.location?.label}
          </h2>

          <div className='flex justify-between items-center text-gray-500 text-sm'>
             <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
                📅 {trip?.userSelection?.noOfDays} Days
             </span>
             <span className='bg-gray-100 px-2 py-1 rounded text-xs'>
                💰 {trip?.userSelection?.budget}
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;