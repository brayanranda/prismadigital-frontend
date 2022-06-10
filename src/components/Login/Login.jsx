import { useState } from "react";
import { signInApi } from "../../api/auth";
import { setTokenApi } from "../../api/auth";
import toast, { Toaster } from "react-hot-toast";

export default function Login({ setRefreshCheckLogin }) {
  const [user, setUser] = useState({
    username: "",
    clave: "",
  });

  const handerSubmit = async (e) => {
    e.preventDefault();
    const res = await signInApi(user);
    if (user.username !== "" && user.clave !== "") {
      if (res.login) {
        setTokenApi(res);
        console.log(setRefreshCheckLogin);
        setRefreshCheckLogin(true);
      } else {
        toast.error("Usuario o contraseña incorrectos.");
      }
      return;
    }
    toast.error("Usuario o contraseña vacios.");
  };

  const handlerUser = (e) => {
    const username = e.target.value;
    setUser({ ...user, username });
  };

  const handlerPassword = (e) => {
    const clave = e.target.value;
    setUser({ ...user, clave });
  };

  return (
    <main className="relative">
      <Toaster />
      <section className="w-full md:flex items-center bg-gray-200">
        <figure className="hidden md:block w-full md:w-1/2 relative ">
          <div className="text-left text-white bg-gradient-to-r from-gray-800 w-full min-h-full z-10 absolute left-0 flex items-center justify-center">
            <div className="w-4/5">
              <h1 className="lg:w-4/5 text-3xl lg:text-4xl">
                Le damos la bienvenida a <b>Prisma digital LLC</b>
              </h1>
              <p className="w-4/5 mt-4">
                El mundo de la tecnología puede ser acelerado. Es por eso que
                nuestro objetivo es proporcionar una experiencia que se mantenga
                al día con las necesidades de su empresa
              </p>
            </div>
          </div>
          <img
            className="relative z-0 top-0 left-0 min-h-screen w-full object-cover object-center"
            src="https://img1.wsimg.com/isteam/ip/7d10058f-f975-449e-b84b-21d66a5e7290/adults-analysis-brainstorming-1661004.jpg/:/rs=w:1279,m"
            alt="img"
          />
        </figure>
        <article className="w-full md:w-1/2 flex items-center justify-center min-h-screen">
          <form className="bg-white p-7 w-4/5 lg:w-3/5 text-left">
            <h1 className="text-2xl mb-5">Iniciar sesión</h1>
            <label className="w-full" htmlFor="user">
              <p className="">User</p>
              <input
                value={user.username}
                onChange={handlerUser}
                className="placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent rounded-sm w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"
                type="text"
              />
            </label>
            <label className="w-full" htmlFor="password">
              <p className="">Password</p>
              <input
                value={user.clave}
                onChange={handlerPassword}
                className="placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent rounded-sm w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"
                type="password"
              />
            </label>
            <button
              onClick={handerSubmit}
              className="duration-300 flex items-center justify-center w-1/2 cursor-pointer mb-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transform hover:scale-95"
            >
              Login
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
