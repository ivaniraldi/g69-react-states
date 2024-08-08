import { useState } from "react"

export default function Contador() {
    const [cuenta, setCuenta] = useState(0)
    const [estilo, setEstilo] = useState({})

  return (
    <div>
        <h1 style={estilo} >Cuenta = {cuenta}</h1>

    <button onClick={()=>{setCuenta(cuenta + 1)}}>
        Aumentar
    </button>

    <button onClick={()=>{setCuenta(cuenta - 1)}}>
        Disminuir
    </button>

    <button onClick={()=>{setCuenta(0)}}>
        Reiniciar
    </button>

    <button onClick={()=>{setEstilo({color: "red", fontSize: "24px"})}}>
        Cambiar estilo a rojo
    </button>
    <button onClick={()=>{setEstilo({color: "green", fontSize: "44px"})}}>
        Cambiar estilo a verde
    </button>
    <button onClick={()=>{setEstilo({})}}>
        Reiniciar Estilo
    </button>

    </div>
  )
}
