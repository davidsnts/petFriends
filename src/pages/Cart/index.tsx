import { FiShoppingCart } from "react-icons/fi";

export function Cart() {
  return (
    <main>
      <div className="m-10 grid sm:grid-cols-1 md:grid-cols-2   gap-5 justify-around ">
        <div>
          {" "}
          <div>
            <section className="flex place-items-center gap-4 text-2xl text-gray-600">
              <img
                src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
              <h1 className="font-bold ">Ração extra grande 1234</h1>
              <span>
                Unid: <span className="font-bold ">R$ 45,00</span>
              </span>
              <div>
                <div className="flex">
                  <button className="bg-red-500  w-7 rounded-l-xl text-white font-bold text-xl cursor-pointer">
                    {"-"}
                  </button>{" "}
                  <span className="text-xl font-bold text-gray-500 border-gray-400 border-1 px-1 m-0 ">3</span>{" "}
                  <button className="bg-green-700  w-7 rounded-r-xl text-white font-bold text-xl cursor-pointer">
                    {"+"}
                  </button>
                </div>
              </div>
            </section>{" "}
            <hr className="h-1 bg-gray-300 border-0 rounded-xs mt-3" />
          </div>
        </div>
        <div className="bg-yellow-300 p-5 rounded-2xl ">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold uppercase">
              Resumo da sua compra
            </h1>
            <span className="align-middle flex items-center gap-2">Quantidade de itens: <span className="font-bold text-2xl">3</span></span>
            <span className="align-middle flex items-center gap-2">Valor total do carrinho: <span className="font-bold text-2xl"> R$ 145,00</span></span>

            <div>
              <input
                type="text"
                name=""
                className="bg-white p-3 rounded-l-xl"
                id=""
                placeholder="Valor do desconto"
              />
              <button className="bg-red-500 text-white font-bold p-3 rounded-r-xl">
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
