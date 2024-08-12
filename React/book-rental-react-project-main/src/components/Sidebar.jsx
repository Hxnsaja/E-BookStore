import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <NavLink
                        className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg `}
                        activeclassname="bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaFire />
                        <span>Books</span>
                    </NavLink>
                </li>
                
            </ul>
        </aside>
    );
}
