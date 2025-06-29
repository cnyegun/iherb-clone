const categories = [
    {
        id: 1,
        name: "Supplements",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Supplements_v2.png",
        url: "/supplements"
    },
    {
        id: 2,
        name: "Sports",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Sports_v2.png",
        url: "/sports"
    },
    {
        id: 3,
        name: "Bath & Personal Care",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Bath_v2.png",
        url: "/bath-personal-care"
    },
    {
        id: 4,
        name: "Beauty",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Bath_v2.png",
        url: "/beauty"
    },
    {
        id: 5,
        name: "Grocery",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Grocery_v2.png",
        url: "/grocery"
    },
    {
        id: 6,
        name: "Home",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Health_v2.png",
        url: "/home"
    },
    {
        id: 7,
        name: "Baby & Kids",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Baby_v2.png",
        url: "/home"
    },
    {
        id: 8,
        name: "Pets",
        imageUrl: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/homepage/L1%20Categories/Pets_v2.png",
        url: "/pets"
    },
]

export default function CategorySection() {
    return (
        <div className="flex flex-col items-center-safe">
            <div className="w-360">
                <p className="m-5 font-bold text-lg">Shop by category</p>
            </div>
            <div className="flex justify-center-safe">
                {categories.map(category =>
                    <a className="w-40" key={category.id} href={category.url}>
                        <img className="rounded-full bg-gray-100 p-5 w-30" src={category.imageUrl} alt={category.name} />
                        <p className="m-5 flex font-bold text-sm">{category.name}</p>
                    </a>
                )}
            </div>
        </div>
    )
}