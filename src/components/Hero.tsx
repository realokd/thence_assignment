import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionContent } from "@/constants/constants";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-around w-full items-center">
      <div className="flex flex-col gap-y-2 w-full items-center my-16 leading-[4rem]">
        <p className=" font-grace text-[#2DA950] text-3xl">Success stories</p>
        <p className="  text-[3.5rem] font-semibold text-center max-w-[45rem]">
          Every success journey we’ve encountered.
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col md:justify-around justify-center items-center px-20">
        <div className="relative">
          <img src="./girl.png" />
          <img
            src="./40perct.png"
            className=" z-50 absolute top-20 left-[-36%] hover:scale-105 ease-in-out transition-transform"
          />
          <img
            src="./10days.png"
            className=" z-50 absolute bottom-0 left-[-18%] hover:scale-105 ease-in-out transition-transform"
          />
          <img
            src="./million.png"
            className=" z-50 absolute bottom-[-20%] right-[-20%] hover:scale-105 ease-in-out transition-transform"
          />
        </div>

        <div className=" w-1/3 h-full">
          <Swiper
            style={{
              // @ts-ignore: Unreachable code error
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            // autoHeight
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            // className="mySwiper"
          >
            <SwiperSlide>
              <p className="font-semibold text-4xl">
                Enhance fortune 50 company’s insights teams research
                capabilities
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="font-semibold text-4xl">
                Enhance fortune 50 company’s insights teams research
                capabilities
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="font-semibold text-[2.3rem]">
                Enhance fortune 50 company’s insights teams research
                capabilities
              </p>
            </SwiperSlide>
          </Swiper>
          <div className=" w-full flex justify-start mb-2">
            <Button size={"lg"} className="rounded-full font-semibold w-60 h-20 text-xl mt-8">
             <span className="flex gap-x-2">Explore More<img src="./arrow.png" alt="" /></span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[#E8EEE7] flex justify-evenly items-start rounded-3xl mt-52  py-20 relative">
        <div className="flex flex-col gap-y-2 w-1/2 px-20 ">
          <p className="font-semibold font-grace text-3xl text-[#2DA950]">
            What’s on your mind
          </p>
          <p className="font-semibold font-manrope text-6xl">Ask Questions</p>
        </div>
        <div className="w-1/2 px-16 h-full flex items-center">
          <Accordion type="single" collapsible className="w-full">
            {accordionContent.map((each, i) => (
              <AccordionItem value={`${i}`}>
                <AccordionTrigger>
                  <p className=" max-w-[70%]">{each.title}</p>
                </AccordionTrigger>
                <AccordionContent>{each.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <img src="./union.png" className="absolute bottom-0 left-0" alt="" />
      </div>

      
    </div>
  );
};

export default Hero;
