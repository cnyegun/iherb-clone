import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { green } from '@mui/material/colors';

function Button({ children }) {
    return (
        <div className="p-3 hover:bg-lime-900 rounded-full flex justify-between items-center-safe">
            {children}
        </div>
    )
}

function SearchBar() {
    return (
        <>
            <input className="bg-white w-220 h-10 rounded-3xl pl-5 pr-5 placeholder:text-gray-500"
                placeholder="Search all of Druggies" />
            <SearchIcon sx={{ color: green[100] }}/>
        </>

    )
}

export default function MainHeader() {
    return (
        <div className="h-20 flex justify-center-safe bg-lime-700">
            <div className="w-330 flex items-center-safe justify-between">
                <a href="https://vn.iherb.com/" className="font-roboto text-white font-bold text-4xl">Druggies<span className="text-xl">©</span></a>
                <SearchBar />
                <Button>
                    <div className="ml-1">
                        <PersonIcon sx={{ color: green[100] }}/>
                        <strong className="text-white">Sign in</strong>
                        <ExpandMoreIcon sx={{ color: green[100] }}/>
                    </div>
                </Button>
                <Button>
                    <ShoppingCartIcon sx={{ color: green[100] }}/>
                </Button>
            </div>
        </div>
    )
}