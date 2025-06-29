import TopHeader from "./TopHeader"
import MainHeader from "./MainHeader"
import DropDown from "./DropDown"

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full shadow">
            <TopHeader/>
            <MainHeader />
            <DropDown />
        </div>
    )
}