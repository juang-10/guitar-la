/* eslint-disable no-unused-vars */
import {  createRef, useEffect, useState } from "react";
import { Guitar } from "./components/Guitar";
import { Header } from "./components/Header";
import { db } from "./data/db";
import { useCart } from "./hooks/useCart";

function App() {
  
  const {
    data,
    addToCart,
    removeFromCart,
    increaseQuantity,
    descreaseQuantity,
    clearCart,
    cart,
    isEmpty,
    cartTotal
  } =  useCart();

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        descreaseQuantity={descreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
          <Guitar />
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
