import { Link } from "react-router";

export function Header() {
  return (
    <div className="p-4 bg-green-950">
      <Link to="/" className="font-bold text-yellow-300 border-b-2  text-3xl dashed">Pet<span className="text-white font-bold" >Friend's</span></Link>
    </div>
  );
}
