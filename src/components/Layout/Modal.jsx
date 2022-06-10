import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { uploadUserBillApi, deleteUserBillApi } from "../../api/bill";
import { getTokenApi } from "../../api/auth";

export default function Modal({
  isRegisterModal,
  setModal,
  currentBill,
  setReloadBills,
}) {
  const [bill, setBill] = useState({
    type: "1",
    observation: "",
    value: "",
  });

  const [titlesModal, setTitlesModal] = useState({
    title: "Registro de",
    buttonTitle: "Guardar",
  });

  const handleToggleBill = (e) => {
    setModal(false);
  };

  const handlerObservation = (e) => {
    const observation = e.target.value;
    setBill({
      ...bill,
      observation,
    });
  };

  const handlerValue = (e) => {
    const value = e.target.value;
    setBill({
      ...bill,
      value,
    });
  };

  const handleChangeType = (type) => {
    if (isRegisterModal) {
      setBill({ ...bill, type });
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (bill.observation !== "" && bill.type !== "" && bill.value !== "") {
      await uploadUserBillApi(getTokenApi().username, bill);
      setModal(false);
      toast.success("Registro exitoso.", {
        position: "bottom-center",
      });
      setReloadBills(true);
    } else {
      toast.error("Campos incompletos.");
    }
  };

  const deleteBill = async (e) => {
    e.preventDefault();
    await deleteUserBillApi(getTokenApi().username, bill.id);
    setModal(false);
    toast.error("Bill eliminado.");
    setReloadBills(true);
  };

  useEffect(() => {
    if (!isRegisterModal) {
      setTitlesModal({ title: "Ver", buttonTitle: "Eliminar" });
      setBill(currentBill);
    }
  }, [isRegisterModal, currentBill]);

  return (
    <div className="w-full z-20 fixed top-0 left-0 bg-black bg-opacity-75 min-h-screen text-left flex items-center justify-center">
      <div className="bg-white rounded-2xl overflow-hidden w-4/5 md:w-3/5 lg:w-2/5 p-10">
        <div className="flex items-center w-full justify-between mb-6">
          <h1 className="text-2xl">{titlesModal.title} movimiento</h1>
          <button
            onClick={handleToggleBill}
            className="ml-6 hover:scale-95 text-2xl transform duration-300 hover:text-red-600 hover:bg-red-200 h-10 w-10 rounded-lg"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <label className="w-full" htmlFor="description">
          <p className="font-semibold mb-1">Descripción</p>
          <input
            type="text"
            onChange={handlerObservation}
            value={bill.observation}
            className="flex items-start h-20 placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"
          />
        </label>
        <label className="w-full" htmlFor="typemov">
          <p className="font-semibold mb-1">Tipo de movimiento</p>
          <div className="md:flex items-center mb-6">
            <div className="flex items-center mr-6 border border-gray-300 rounded-md py-2 px-3 w-full md:w-1/2">
              <input
                onChange={() => handleChangeType("1")}
                checked={bill.type === "1"}
                className="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                name="typebill"
                type="radio"
              />
              <p>Ingreso</p>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md py-2 px-3 w-full md:w-1/2">
              <input
                onChange={() => handleChangeType("2")}
                checked={bill.type === "2"}
                className="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                name="typebill"
                type="radio"
              />
              <p>Gasto</p>
            </div>
          </div>
        </label>
        <label className="w-full" htmlFor="value">
          <p className="font-semibold mb-1">Valor</p>
          <input
            value={bill.value}
            onChange={handlerValue}
            className="placeholder-blue-400 p-3 bg-gray-100 appearance-none border border-transparent w-full text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600 mb-6"
            type="text"
          />
        </label>
        <button
          onClick={isRegisterModal ? sendData : deleteBill}
          className="duration-300 flex items-center justify-center w-32 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transform hover:scale-95"
        >
          {titlesModal.buttonTitle}
        </button>
      </div>
    </div>
  );
}
