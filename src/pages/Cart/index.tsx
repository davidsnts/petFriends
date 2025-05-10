import { useContext } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router";

export function Cart() {
  const { cartItems, addToCart, RemoveToCart, totalItems, totalPrice } =
    useContext(CartContext);
  return (
    <main className="min-h-[100vh-70px]  p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl p-8 rounded-2xl shadow-lg space-y-12">
        <h1 className="text-3xl font-bold text-center text-red-600 uppercase">
          Itens no Carrinho{" "}
          <span className="text-gray-700 font-normal"> {totalItems} </span>
        </h1>

        {cartItems.map((item) => (
          <section key={item.id}>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
              <img
                src={item.cover}
                className="w-[100px] h-[100px] object-contain"
                alt="Ração"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  Unidade{" "}
                  <span className="font-semibold">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => RemoveToCart(item)}
                  className="bg-red-600 w-8 h-8 rounded-l text-white flex justify-center items-center"
                >
                  <AiOutlineMinus />
                </button>
                <span className="px-3 font-semibold text-gray-700">
                  {item.amount}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-600 w-8 h-8 rounded-r text-white flex justify-center items-center"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </section>
        ))}

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl text-gray-800 flex items-center gap-3">
              <span>Total no carrinho</span>
              <span className="font-bold text-red-600">
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="text"
                className="p-3 rounded-l-lg border border-gray-400 bg-white"
                placeholder="Tem um cupom?"
              />
              <button className="px-4 bg-red-600 text-white font-bold rounded-r-lg">
                <AiOutlineArrowRight size={20} />
              </button>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 rounded-lg w-full uppercase">
            Finalizar Compra
          </button>
          <Link
            to="/"
            className="text-center text-gray-600 hover:text-red-600 transition flex items-center gap-2 font-bold float-end"
          >
            <AiOutlineArrowLeft size={20} color={"oklch(57.7% 0.245 27.325)"} />
            Voltar para a loja
          </Link>
        </div>
      </div>
    </main>
  );
}
