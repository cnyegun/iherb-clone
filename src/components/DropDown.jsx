const byCategories = ["Supplements", "Sports", "Bath", "Beauty", "Grocery", "Home", "Baby", "Pets"]
const byBrandAndTopics = ["Brands A-Z", "Health Topics"]
const bySpecials = ["Specials", "Best Sellers", "Try", "New", "More"]

function LinkBarItem({ name, url }) {
    return (
        <li key={name} className="p-2 border-white border-b-3 hover:text-lime-700 hover:border-lime-700">
            <a href={url}><strong>{name}</strong></a>
        </li>
    )
}

function LinkBarGroup({ menulist }) {
    return (
        <ul className="flex pl-2 pr-2 justify-between">
            {menulist.map(menu =>
                <LinkBarItem name={menu} url="#" />
            )}
        </ul>
    )
}

export default function DropDown() {
    return (
        <div className="items-center-safe border border-gray-300 bg-white flex justify-center-safe">
            <div className="w-330 flex justify-between">
                <div className="flex items-center-safe">
                    <LinkBarGroup menulist={byCategories} />
                    <div className="w-px h-5 bg-gray-300" />
                    <LinkBarGroup menulist={byBrandAndTopics} />
                </div>
                <LinkBarGroup menulist={bySpecials} />
            </div>
        </div>
    ) 
}