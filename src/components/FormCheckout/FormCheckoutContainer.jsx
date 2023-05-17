import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const FormCheckoutContainer = () => {

    // const navigate = useNavigate()

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkOutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      fecha: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) => 
      updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity})
    )

    clearCart()
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkOutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener al menos 3 caracteres")
        .max(10, "El campo debe tener menos de 10 caracteres"),
      email: Yup.string()
        .email("Este campo debe ser un e-mail")
        .required("Este campo es obligatorio"),
      // password: Yup.string().required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {message: "La contraseña debe tener una mayúscula, una minúscula, un número, un caracter y su longitud debe ser mayor a 6 y menor a 15"}),
      telefono: Yup.number().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  const compraTerminada = () => {
    Swal.fire(`La identificacion de su orden es: ` + orderId + "\n Gracias por su compra")
    // navigate("/")
  }

  return (
    <div>
      {orderId ? (
        compraTerminada()
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
