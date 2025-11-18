import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, user_photoURL, review:Testimonial, user_email } = review;

    return (

        <div className="py-8 px-4">
            <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 relative sm:max-w-sm"> 
                <div className="absolute -top-4 left-4 text-3xl sm:text-4xl text-teal-200">
                    <FaQuoteLeft />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
                   {Testimonial}
                </p>
                <div className="my-6">
                    <hr className="border-dashed border-t-2 border-gray-200" />
                </div>

                <div className="flex items-center gap-4">
                    <img
                        src={user_photoURL}
                        alt="avatar"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-white shadow-sm"
                    />

                    <div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">{userName}</div>
                        <div className="text-xs sm:text-sm text-gray-400">
                           {user_email}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;