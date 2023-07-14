import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselCard = ({ img, link }: { img: string; link: string }) => {
  const openTab = (link: string) => {
    window.open(link, '_blank', 'noopener, noreferrer');
  };
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={img}
        alt="bottomCarousel"
        onClick={() => openTab(link)}
        className="w-full h-auto mx-auto flex flex-col justify-center items-center max-w-[30%] bg-no-repeat bg-contain bg-center cursor-pointer "
      />
    </div>
  );
};

function BottomCarousel() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <section className="flex w-full max-w-6xl mx-auto mb-10 border-2 h-28">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <CarouselCard img={'../images/bottomFirst.jpeg'} link={'https://www.lifeline.or.kr/'}></CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard img={'../images/bottomSecond.png'} link={'https://m.work.go.kr/main.do'}></CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard img={'../images/bottomThird.png'} link={'http://www.counsel24.com/'}></CarouselCard>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BottomCarousel;
