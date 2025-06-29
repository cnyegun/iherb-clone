import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const banners = [
    { id: 1, imgUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/US_wkd-iherb-brands0627_002hden-us.jpg', url: 'https://www.iherb.com/c/iherb-brands?pcode=JUN25HB' },
    { id: 2, imgUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/VF_btseabanner0625_001hden-us.jpg', url: 'https://www.iherb.com/c/best-season-ever' },
    { id: 3, imgUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/idealovebanner0625_002hden-us.jpg', url: 'https://www.iherb.com/c/idealove?specialtyFilters=6' },
    { id: 4, imgUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/blog-quality-vita0625_001hden-us.jpg', url: 'https://www.iherb.com/blog/quality-vitamins-and-supplements/2093' },
]

export default function Banner() {
    return (
        <div className="mt-40 flex align-middle">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                className="w-380"    
                navigation
                autoplay={{ 
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                 }}
                pagination={{ clickable: true }}
                loop={true}

            >
                {banners.map(banner =>
                    <SwiperSlide key={banner.id}><a href={banner.url}><img src={banner.imgUrl} /></a></SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}