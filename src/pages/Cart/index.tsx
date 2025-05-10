import {
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

export function Cart() {
  return (
    <main className="min-h-[100vh-70px]  p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl p-8 rounded-2xl shadow-lg space-y-12">
        <h1 className="text-3xl font-bold text-center text-red-600 uppercase">
          Itens no Carrinho <span className="text-gray-700 font-normal">3</span>
        </h1>

        {/* Produto */}
        <section>
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              className="w-[100px] h-[100px] object-contain"
              alt="Ração"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">Ração extra grande 1234</h2>
              <p className="text-gray-600 text-lg">
                Un <span className="font-semibold">R$ 45,00</span>
              </p>
            </div>
            <div className="flex items-center">
              <button className="bg-red-600 w-8 h-8 rounded-l text-white flex justify-center items-center">
                <AiOutlineMinus />
              </button>
              <span className="px-3 font-semibold text-gray-700">3</span>
              <button className="bg-red-600 w-8 h-8 rounded-r text-white flex justify-center items-center">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </section>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl text-gray-800 flex items-center gap-3">
              <span>Total no carrinho</span>
              <span className="font-bold text-red-600">R$ 145,00</span>
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
        </div>
      </div>
    </main>
  );
}
