import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface productProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);
  console.log(products);
  return (
    <main className="grid max-w-7xl grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-4 mx-auto place-items-center gap-y-10 gap-x-16 p-4">
      {products.map((item) => (
        <section key={item.id} className="w-[300px] flex flex-col justify-center items-center border-gray-300  border-2 rounded-2xl p-5">
          <img
            src={item.cover}
            className="w-[300px] h-[300px]"
            alt=""
          />
          <div className="w-full">{item.title}</div>
          <div className="flex w-full flex-col gap-4 mt-3">
            <span className="font-bold">{item.price}</span>
            <span className="text-center bg-green-950 rounded-md text-white font-bold p-2">
              Adicionar ao carrinho
            </span>
          </div>
        </section>
      ))}
    </main>
  );
}
