import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <div className="p-4 bg-green-950 ">
      <div className="flex justify-between mx-10">
        <Link
          to="/"
          className="font-bold text-yellow-300 border-b-2  text-3xl dashed"
        >
          Pet<span className="text-white font-bold">Friend's</span>
        </Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={36} className="text-white " />{" "}
          <span className="absolute -top-3 -right-3 bg-yellow-300 p-1 rounded-full px-2.5 font-bold text-red-500 text-2sm ">4</span>{" "}
        </Link>
      </div>
    </div>
  );
}
