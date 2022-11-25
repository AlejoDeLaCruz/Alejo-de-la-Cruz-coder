import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { db } from "./firebase"

const Carrito = () => {

    const refName = useRef() 
    const refAge = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            
        }
            
            const ordersCollection = collection(db, "orden")
            const consulta = addDoc(ordersCollection, orden)
            consulta
            .then((docRef) => {
                console.log(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }

        


    return (
        <div>
            {/* {id ? <h1>Orden generada con exito, su id es {id}</h1> : null} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >guardar</button>
            </form>
        </div>
    )
}

export default Carrito