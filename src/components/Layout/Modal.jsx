import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Modal() {
  const handleToggleBill = (e) => {};

  return (
    <div className="w-full z-20 fixed top-0 left-0 bg-black bg-opacity-75 min-h-screen text-left flex items-center justify-center">
      <div className="bg-white rounded-2xl overflow-hidden w-4/5 md:w-3/5 lg:w-2/5 p-10">
        <div className="flex items-center w-full justify-between mb-6">
          <h1 className="text-2xl">Registro de movimiento</h1>
          <button className="ml-6 hover:scale-95 text-2xl transform duration-300 hover:text-red-600 hover:bg-red-200 h-10 w-10 rounded-lg">
            <FontAwesomeIcon onClick={handleToggleBill} icon={faXmark} />
          </button>
        </div>
        <label className="w-full" htmlFor="description">
          <p className="font-semibold mb-1">Descripción</p>
          <textarea className="resize-none placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent border-b-black w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"></textarea>
        </label>
        <label className="w-full" htmlFor="typemov">
          <p className="font-semibold mb-1">Tipo de movimiento</p>
          <div className="md:flex items-center mb-6">
            <div className="flex items-center mr-6 border border-gray-300 rounded-md py-2 px-3 w-full md:w-1/2">
              <input
                className="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                name="typemov"
                type="radio"
              />
              <p>Ingreso</p>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md py-2 px-3 w-full md:w-1/2">
              <input
                className="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                name="typemov"
                type="radio"
              />
              <p>Gasto</p>
            </div>
          </div>
        </label>
        <label className="w-full" htmlFor="value">
          <p className="font-semibold mb-1">Valor</p>
          <input
            className="placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent border-b-black w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"
            type="text"
          />
        </label>
        <button className="duration-300 flex items-center justify-center w-32 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transform hover:scale-95">
          Registrar
        </button>
      </div>
    </div>
  );
}
