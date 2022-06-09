import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faListCheck,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export default function List() {
  return (
    <main className="w-full md:flex">
      <aside className="pb-6 w-full md:w-1/5 md:min-h-screen bg-white flex items-center justify-between flex-col">
        <figure className="w-full">
          <img
            className="w-28 md:w-32 mx-auto"
            src="https://img1.wsimg.com/isteam/ip/435d823f-8ba0-44d5-bd88-39cfeb1156fb/IMG_3653.jpg/:/rs=w:137,h:98,cg:true,m/cr=w:137,h:98/qt=q:95"
            alt="logo"
          />
        </figure>
        <ul className="w-11/12 md:w-4/5 mx-auto flex md:block items-center">
          <li className="w-full hidden md:block items-center">
            <img
              className="md:mb-3 w-8 md:w-32 mx-auto rounded-full "
              src="/images/profile.jpg"
              alt="perfil"
            />
            <div className="text-left md:text-center">
              <p className="md:text-2xl leading-3">Ismael Peñaranda</p>
              <p className="text-sm md:text-md text-gray-500">
                brayan@gmail.com
              </p>
            </div>
          </li>
          <li className="px-4 md:mt-7 cursor-pointer duration-300 flex md:block lg:flex items-center justify-center w-full rounded-xl hover:bg-gray-200 py-2">
            <FontAwesomeIcon
              className="mr-2 text-xl md:text-3xl lg:text-xl"
              icon={faListCheck}
            />
            <p className="leading-5">Registrar movimiento</p>
          </li>
          <div className="md:mt-24 w-1/2 md:w-4/5 mx-auto">
            <Link
              to="logout"
              className="px-4 cursor-pointer duration-300 flex items-center justify-center w-full rounded-xl hover:bg-red-200 hover:text-red-800 py-2"
            >
              <FontAwesomeIcon
                className="mr-2 text-xl"
                icon={faRightFromBracket}
              />
              Exit
            </Link>
          </div>
        </ul>
      </aside>
      <section className="w-full md:w-4/5 bg-gray-900">
        <article className="w-full py-10">
          <table className="table table-auto w-full mx-auto">
            <thead className="font-semibold text-gray-200 bg-black py-3 rounded-md overflow-hidden">
              <tr className="mx-auto w-4/5">
                <th className="p-2 whitespace-nowrap font-semibold text-center">
                  #
                </th>
                <th className="p-2 whitespace-nowrap font-semibold text-left">
                  Movimientos
                </th>
                <th className="p-2 whitespace-nowrap font-semibold text-left">
                  Precio
                </th>
                <th className="p-2 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-100 bg-gray-900">
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
              <tr className=" hover:bg-black border-y-4 border-transparent">
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center font-medium">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left text-sm opacity-70">19/05/2022</div>
                  <div className="text-left text-xl leading-3">
                    Compra de perro caliente
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium">$ -15.000</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">
                    <FontAwesomeIcon
                      className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                      icon={faEye}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mx-auto ml-7 text-left">
            <button className="rounded-lg mt-7 w-32 hover:text-black hover:bg-white duration-300 p-2 bg-blue-500 text-white">
              Ver más
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
