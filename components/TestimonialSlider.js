'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import testimonials from '@/data/testimonials';

const TestimonialSlider = () => {
  return (
    <div className="container m-auto lg:m-0 relative pb-12">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true }}
        navigation
        loop={true}
        autoHeight={true}
        className="max-w-3xl !pb-12 [&_.swiper-pagination-bullet-active]:bg-seance-950"
      >
       {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="text-center">
              <p className="text-2xl mb-7 text-seance-950">
                {testimonial.testimonial}
              </p>
              <p className="text-lg">{testimonial.name}</p>
            </div>
          </SwiperSlide>
				))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
