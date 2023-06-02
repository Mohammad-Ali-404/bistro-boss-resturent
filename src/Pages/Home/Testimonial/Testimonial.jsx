import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>
           <SectionTitle
            heading={"---What Our Clients Say---"}
            subHeading={"TESTIMONIALS"}
            ></SectionTitle>
            <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
                <div className='m-24 flex flex-col items-center'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                    <p className='mt-8'>{review.details}</p>
                    <h2 className='text-3xl font-bold mt-8 text-orange-400'>{review.name}</h2>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </>
        </section>
    );
};

export default Testimonial;