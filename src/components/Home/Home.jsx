import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
	return (
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
			<SwiperSlide className="bg-[url('https://i.ibb.co.com/Z1h5YFP/shundorbon.jpg')] main-slide">
				<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20"></div>
			</SwiperSlide>
			<SwiperSlide className="bg-[url('https://i.ibb.co.com/V9vr3PH/Shat-Gombuj-Mosque.jpg')] main-slide">
				<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20"></div>
			</SwiperSlide>
			<SwiperSlide className="bg-[url('https://i.ibb.co.com/hcTcjNn/cox3.png')] main-slide">
				<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20"></div>
			</SwiperSlide>
			<SwiperSlide className="bg-[url('https://i.ibb.co.com/7X41CtP/bandarbad.jpg')] main-slide">
				<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20"></div>
			</SwiperSlide>
			<SwiperSlide className="bg-[url('https://i.ibb.co.com/44fhFFK/sylhet.jpg')] main-slide">
				<div className="flex justify-center items-center w-full h-[90vh] bg-black bg-opacity-20"></div>
			</SwiperSlide>
		</Swiper>
	);
};2
export default Home;
