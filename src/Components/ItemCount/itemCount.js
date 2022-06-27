import React, { useState } from "react"



const ItemCount = ({ stock, init, onAdd }) => {

    const [counter, setCounter] = useState(init);

    const agregar = () => {
        counter !== { stock }.stock && setCounter(counter + 1)
    }

    const quitar = () => {
        counter !== 0 && setCounter(counter - 1)
    }

    const addCart = () => {
        counter !== 0 ? onAdd(counter) : alert("No se puede agregar")
    }




    return (
        <section>
            <div>ItemCount</div>
            <div>
                <button onClick={quitar}>◄</button>
                <div>{counter}</div>
                <button onClick={agregar}>►</button>
            </div>
            <button onClick={addCart}> Agregar al carro</button>
        </section>)
}

export default ItemCount