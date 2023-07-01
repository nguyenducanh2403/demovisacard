import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

function NavBar() {
    const [openMenu, setopenMenu] = useState(false);
    const handleMenu = () => {
        setopenMenu(!openMenu);
    };
    return (
        <nav className=" ">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-[20px] font-bold">NewVisaCard</div>
                </div>
                <div>
                    <HiOutlineMenu size={'24px'} className="cursor-pointer md:hidden " onClick={handleMenu} />
                    <ul
                        className={`text-{16px} ${
                            openMenu ? '' : 'hidden'
                        } absolute right-8 ml-auto bg-white p-4 text-center font-semibold text-black md:static md:mr-8 md:flex md:gap-10 md:bg-transparent md:p-0 md:text-white`}
                    >
                        <li className=" btn-hover ">Fearure</li>
                        <li className=" btn-hover ">Menu</li>
                        <li className=" btn-hover ">Our Story</li>
                        <li className=" btn-hover md:ml-28">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
