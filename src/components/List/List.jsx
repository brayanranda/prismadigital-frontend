import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toaster } from "react-hot-toast";
import {
  faEye,
  faListCheck,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Layout/Modal";
import { useState, useEffect } from "react";
import { logoutApi, getTokenApi } from "../../api/auth";

export default function List({ setRefreshCheckLogin }) {
  let user = JSON.parse(localStorage.getItem("TOKEN")) || {};

  const [bills, setBills] = useState([]);
  const [billsPaginated, setBillsPaginated] = useState({
    0: [],
  });
  const [numberPages, setNumberPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [currentBill, setCurrentBill] = useState([]);
  const [isRegisterModal, setIsRegisterModal] = useState(true);
  const [reloadBills, setReloadBills] = useState(true);

  const handleToggleBill = () => {
    setModal(true);
    setIsRegisterModal(true);
  };

  const handleLogout = () => {
    logoutApi();
    setRefreshCheckLogin(true);
  };

  const handleToggleViewBill = (bill) => {
    setIsRegisterModal(false);
    setModal(true);
    setCurrentBill(bill);
  };

  const handlerNext = () => {
    if (currentPage === numberPages - 1) return;
    setCurrentPage(currentPage + 1);
  };

  const handlerPrevius = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (!reloadBills) {
      return;
    }
    const url = `https://prismatest.prismadigdev.repl.co/users/${
      getTokenApi().username
    }/bills`;

    const getBills = async (url) => {
      const billsForPage = 10;
      let res = await fetch(url);
      let data = await res.json();
      setBills(data);
      const pages = Math.ceil(data.length / billsForPage);
      setNumberPages(pages);
      const dataPaginated = {};
      for (let i = 0; i < pages; i++) {
        dataPaginated[i] = data.slice(i * billsForPage, i * billsForPage + 9);
      }
      setCurrentPage(0);
      setBillsPaginated(dataPaginated);
      setReloadBills(false);
    };
    getBills(url);
  }, [reloadBills]);

  return (
    <main className="w-full md:flex">
      <Toaster />
      {modal ? (
        <Modal
          currentBill={currentBill}
          isRegisterModal={isRegisterModal}
          setModal={setModal}
          setReloadBills={setReloadBills}
        />
      ) : null}
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
              <p className="md:text-2xl leading-3">{user.username}</p>
              <p className="text-sm md:text-md text-gray-500">{user.email}</p>
            </div>
          </li>
          <li
            onClick={handleToggleBill}
            className="px-4 md:mt-7 cursor-pointer duration-300 flex md:block lg:flex items-center justify-center w-full rounded-xl bg-gray-200 hover:bg-gray-300 py-2"
          >
            <FontAwesomeIcon
              className="mr-2 text-xl md:text-3xl lg:text-xl"
              icon={faListCheck}
            />
            <p className="leading-5">Registrar movimiento</p>
          </li>
          <div className="md:mt-24 w-1/2 md:w-4/5 mx-auto">
            <button
              onClick={handleLogout}
              type="button"
              className="px-4 cursor-pointer duration-300 flex items-center justify-center w-full rounded-xl hover:bg-red-200 hover:text-red-800 py-2"
            >
              <FontAwesomeIcon
                className="mr-2 text-xl"
                icon={faRightFromBracket}
              />
              Exit
            </button>
          </div>
        </ul>
      </aside>
      <section className="w-full md:w-4/5 bg-gray-900 h-screen overflow-y-auto">
        <article className="w-full py-10">
          <table className="table table-auto w-full mx-auto">
            <thead className="font-semibold text-gray-200 bg-black py-3 rounded-md overflow-hidden">
              <tr className="mx-auto w-4/5">
                <th className="p-2 whitespace-nowrap font-semibold text-center">
                  Id
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
            {billsPaginated[currentPage]?.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              <tbody className="text-sm text-gray-100 bg-gray-900">
                {billsPaginated[currentPage].map((bill, index) => (
                  <tr
                    className=" hover:bg-black border-y-4 border-transparent"
                    key={bill.id}
                  >
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium">{bill.id}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-sm opacity-70">
                        {bill.date_bill}
                      </div>
                      <div className="text-left text-xl leading-3">
                        {bill.observation}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">
                        $ {bill.value}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">
                        <FontAwesomeIcon
                          onClick={() => handleToggleViewBill(bill)}
                          className="cursor-pointer duration-300 transform hover:scale-105 rounded-md hover:bg-blue-200 hover:text-blue-600 p-2"
                          icon={faEye}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <div className="mx-auto ml-7 text-left">
            {currentPage !== 0 ? (
              <button
                className="text-black rounded-lg mt-7 w-32 hover:bg-white duration-300 p-2 bg-blue-200  mr-3"
                onClick={() => handlerPrevius()}
              >
                Anterior
              </button>
            ) : null}
            {currentPage < numberPages - 1 ? (
              <button
                className="rounded-lg mt-7 w-32 hover:text-black hover:bg-white duration-300 p-2 bg-blue-500 text-white"
                onClick={() => handlerNext()}
              >
                Siguiente
              </button>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  );
}
