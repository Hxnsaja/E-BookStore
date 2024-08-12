import { useState, useContext } from "react";
import { FaRegBell, FaRegMoon, FaUser, FaUserPlus } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { BooksContext, ThemeContext } from "../context";
import CartDetails from "../pages/books/CartDetails";
import { Link } from "react-router-dom";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link to="/" className="flex gap-2 items-center">
          <IoBookSharp className="w-8 h-8" />
          <span className="font-bold uppercase">E - Books</span>
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to="/login"
            >
              <FaUser />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to="/signup"
            >
              <FaUserPlus />
            </Link>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
