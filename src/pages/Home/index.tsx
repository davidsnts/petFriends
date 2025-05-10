import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { CartContext } from "../../context/cartContext";
import toast from "react-hot-toast";

export interface productProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export function Home() {
  const [products, setProducts] = useState<productProps[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  async function handleAddToCart(product: productProps) {
    toast.success("Produto adicionado ao carrinho!", {
      style: {
        background: "#333",
        color: "#fff",
      },
      iconTheme: {
        primary: "#4CAF50",
        secondary: "#fff",
      },
    });
    await addToCart(product);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[80vh]">
      {products.map((item) => (
        <section
          key={item.id}
          className="bg-white shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden flex flex-col items-center p-4"
        >
          <img
            src={item.cover}
            alt={item.title}
            className="w-full sm:h-35 md:h-45 object-cover rounded-lg"
          />
          <div className="w-full mt-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="mt-1 text-gray-600 text-sm line-clamp-2">{item.description}</p>
          </div>
          <div className="w-full mt-4 flex flex-col gap-2 items-center">
            <span className="text-xl font-bold text-green-700">
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <button onClick={() => handleAddToCart(item)} className="w-full bg-green-950 hover:bg-green-800 transition text-white font-bold py-2 rounded-md">
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      ))}
    </main>
  );
}
