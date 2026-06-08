import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function CarouselUsers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full max-w-75 sm:max-w-[60vw] xl:max-w-100 mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user1.png" />
            </Avatar>
            <p className="text-sm mt-2">Livia Bator</p>
            <p className="text-xs text-gray-400">CEO</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user2.png" />
            </Avatar>
            <p className="text-sm mt-2">Randy Press</p>
            <p className="text-xs text-gray-400">Director</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user3.png" />
            </Avatar>
            <p className="text-sm mt-2">Workman</p>
            <p className="text-xs text-gray-400">Designer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user1.png" />
            </Avatar>
            <p className="text-sm mt-2">Livia Bator</p>
            <p className="text-xs text-gray-400">CEO</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user2.png" />
            </Avatar>
            <p className="text-sm mt-2">Randy Press</p>
            <p className="text-xs text-gray-400">Director</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="select-none">
          <div className="grid text-center justify-center">
            <Avatar className="mx-auto w-20 h-20">
              <AvatarImage src="/img/users/user3.png" />
            </Avatar>
            <p className="text-sm mt-2">Workman</p>
            <p className="text-xs text-gray-400">Designer</p>
          </div>
        </SwiperSlide>

        {/* buttons */}
        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:bg-main hover:text-white bg-white shadow w-8 h-8 flex items-center justify-center rounded-full select-none"
        >
          <ChevronLeft size={24} />
        </div>

        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:bg-main hover:text-white bg-white shadow w-8 h-8 flex items-center justify-center rounded-full select-none"
        >
          <ChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
}
