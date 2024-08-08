import { useState } from "react";

export default function Productos() {
    const [producto, setProducto] = useState("");
    const [productos, setProductos] = useState(["a", "b"])

  return (
    <div>
        <label>Ingrese un producto</label>
        <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} />
        <br />
        <button onClick={()=> setProductos([...productos, producto])}>
            Agregar producto
        </button>

        {productos.map((p)=> { return <p key={p}>{p}</p>})}
    </div>
  )
}
