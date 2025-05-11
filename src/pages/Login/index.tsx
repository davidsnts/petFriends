import { useState } from "react";

export function Login() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos");      
      document.getElementById("email")?.focus();
      return;
    }    
  };  

  return (
    <div className="bg-gray-200 h-[calc(100vh-70px)] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <form className="flex flex-col items-center gap-5 bg-white p-10 rounded-lg shadow-md w-[500px] text-gray-700" onSubmit={handleSubmit}>
          <h1 className="w-full text-center text-3xl font-extralight text-gray-500">
            LOGIN
          </h1>
          <div className="flex flex-col gap-1 w-full ">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="username"
              className="border border-gray-300 rounded-xs p-1 text-2xl"
              onChange={(event => setEmail(event.target.value))}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-xs p-1 text-2xl"
              onChange={(event => setPassword(event.target.value))}
              value={password}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className=" bg-gray-500 p-2 rounded-sm text-white font-extrabold float-end"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
