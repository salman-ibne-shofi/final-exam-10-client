import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
	return (
		<>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination]}
				loop
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide className="bg-[url('https://i.ibb.co.com/pPvPGdH/spotted-deer.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">BANGLADESH</div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://i.ibb.co.com/ykWVHYL/wat-arun-temple-bangkok-thailand-335224-971.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">THAILAND</div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://i.ibb.co.com/zGwY8Bk/bali-pagoda-sunrise-indonesia-1150-11013.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">INDONESIA</div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://i.ibb.co.com/4VQC1Yp/beautiful-architecture-building-exterior-singapore-city-74190-9942.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">MALAYSIA</div>
				</SwiperSlide>
				<SwiperSlide className="bg-[url('https://i.ibb.co.com/Bs4ZWbz/fresh-blue-nature-shore-waterfall-river-1417-1259.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">VIETNAM</div>
				</SwiperSlide>
                <SwiperSlide className="bg-[url('https://i.ibb.co.com/vsy9SLM/angkor-wat-historic-temple-siem-reap-cambodia-181624-22195.jpg')] main-slide">
					<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20 text-white text-6xl font-bold">CAMBODIA</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default Home;
