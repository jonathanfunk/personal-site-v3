'use client';

const TestimonialSlide = ({testimonial, name}) => {
  return (
    <SwiperSlide>
      <div className="text-center">
        <p className="text-2xl mb-7 text-seance-950">
          {testimonial}
        </p>
        <p className="text-lg">{name}</p>
      </div>
    </SwiperSlide>
  )
}

export default TestimonialSlide;