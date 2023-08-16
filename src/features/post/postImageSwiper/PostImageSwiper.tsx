import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

import 'swiper/css';
import 'swiper/css/pagination';

const PostImageSwiper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-40 border rounded-lg"
        pagination
      >
        <Lightbox
          plugins={[Zoom]}
          open={isModalOpen}
          close={() => setIsModalOpen(false)}
          slides={[
            {
              src: 'https://i.namu.wiki/i/HRitIun-bFhfBmD5I81Sb9B3rCv7VIUBMOk3vGPvK-QjQodEG37NButl5BZ8sIPLlXh0Nk6m1_Krc6lNXyAIlg.jpg',
            },
          ]}
        />
        {/* 테스트용 이미지입니다. */}
        <SwiperSlide onClick={() => setIsModalOpen(true)}>
          <img
            className="object-cover object-top w-full h-full "
            src="https://i.namu.wiki/i/HRitIun-bFhfBmD5I81Sb9B3rCv7VIUBMOk3vGPvK-QjQodEG37NButl5BZ8sIPLlXh0Nk6m1_Krc6lNXyAIlg.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-top w-full h-full"
            src="https://www.ccnnews.co.kr/news/photo/201511/52489_56243_00.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PostImageSwiper;
