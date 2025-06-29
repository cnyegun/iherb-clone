import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import { green } from '@mui/material/colors';

const sitePreference = {
    locale: "VN",
    lang: "EN",
    currency: "VND"
}

const promos = [
    {
        text: "Up to 20% off Brands of the Week",
        url: 'https://vn.iherb.com/c/brands-of-the-week'
    },
    {
        text: "World's Best Value",
        url: "https://vn.iherb.com/info/about"
    },
    {
        text: "Gift Ideas",
        url: "https://vn.iherb.com/c/gifts/store"
    }
]

const mobileLink = "https://vn.iherb.com/info/app"

function Card({ children }) {
    return (
        <div className="text-gray-850 bg-white rounded-2xl mr-3 border border-gray-200 hover:border-gray-500 pl-2">
            {children}
        </div>
    )
}
function PromoHeader() {
    return (
        <ul className="flex">
            {promos.map((promo, index) =>
                <li key={index} className="flex items-center-safe">
                    <Card>
                        <a href={promo.url}>
                            {promo.text}
                            <ChevronRightIcon />
                        </a>
                    </Card>
                </li>
            )}
        </ul>
    )
}

function SitePrefHeader() {
    return (
        <div className="flex items-center-safe">
            <Card>
                <a href={mobileLink} className="pr-2">
                    <PhoneIphoneIcon sx={{ color: green[500], fontSize: 20 }}/>
                    iDruggies App
                </a>
            </Card>
            <div className="w-px h-3 bg-gray-300 mr-3" />
            <Card>
                <button className="flex items-center-safe justify-between w-35 pr-2">
                    <LanguageIcon sx={{ color: green[500], fontSize: 20 }} />
                    {sitePreference.locale}
                    <div className="w-px h-2 bg-gray-300" />
                    {sitePreference.lang}
                    <div className="w-px h-2 bg-gray-300" />
                    {sitePreference.currency}
                </button>
            </Card>
            <ShareIcon sx={{ color: green[500], fontSize: 20 }} />
        </div>
    )
}

export default function TopHeader() {
    return (
    <div className="justify-center-safe flex h-10 bg-gray-50">
        <div className="w-330 flex justify-between h-10">
            <PromoHeader />
            <SitePrefHeader />
        </div>
    </div>
    )
}