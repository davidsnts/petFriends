import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function Header() {
  const { totalItems } = useContext(CartContext);
  return (
    <header className="bg-green-950 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-3xl font-extrabold text-yellow-300">
          Pet<span className="text-white">Friend's</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link className="text-white hover:bg-white hover:text-black transition duration-400 border-1 rounded-sm p-1" to="/login">
            ENTRAR
          </Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart size={32} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
