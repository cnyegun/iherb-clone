import Button from "./Button";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

function ProductCard({ product }) {
    return (
        <div className="m-3 w-60 bg-white rounded-2xl flex-col">
            <a href={product.product_url}>
                <img src={product.img_url} alt={product.name} className="p-10 rounded-2xl" />
                <div className="p-3">
                    <p>{product.name}</p>
                    <div className="flex items-center-safe">
                        <Rating 
                            value={product.rating}
                            precision={0.5}
                            readOnly={true}
                            size="small"
                        />
                        <span className="pt-1 ml-2 text-xs text-gray-500">{product.reviews.toLocaleString()}</span>
                    </div>

                    <p><span className="font-bold text-red-700">${product.price}</span><del className="text-gray-500 ml-2">${product.original_price}</del></p>
                </div>
            </a>
        </div>
    )
}

export default function RowSection({ name, viewAllUrl, products }) {
    return (
        <div className="flex items-center-safe justify-center-safe bg-gray-100 mt-10 ">
            <div className="w-360">
                <div className="flex items-center-safe justify-between">
                    <p className="m-5 flex font-bold text-lg">{name}</p>
                    <Button name="View all" url={viewAllUrl} />
                </div>
                <Swiper 
                    className=""    
                    slidesPerView={6}
                    spaceBetween={100}
                >
                    {products.map(product =>
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}