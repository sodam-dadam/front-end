import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';

const CarouselCard = ({ content, img }: { content: string; img: string }) => {
  return (
    <div
      className={`${img} w-full h-full mx-auto flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center`}>
      <div className="flex justify-center w-full text-4xl font-bold leading-10 tracking-widest ">
        <div className="flex items-center justify-center w-full max-w-3xl">
          <span className="text-2xl text-center text-white sm:text-2xl md:text-3xl lg:text-4xl">{content}</span>
        </div>
      </div>
    </div>
  );
};

function TopCarousel() {
  SwiperCore.use([Autoplay]);

  return (
    <section className="flex w-full mx-auto mb-10 font-extrabold h-80 msm:h-52 mlg:mb-5">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <CarouselCard content={'작은 이야기도 다 담겠습니다'} img={'bg-mainTopCarouselBgFirst'}></CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard content={'작은 이야기도 다 담겠습니다'} img={'bg-mainTopCarouselBgSecond'}></CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard content={'작은 이야기도 다 담겠습니다'} img={'bg-mainTopCarouselBgThird'}></CarouselCard>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default TopCarousel;
