/* eslint-disable no-unused-vars */

export default function Ejercicio() {
    const arrNum = [1, 5, 8, 2, 6, 28, 39, 12, 57, 11]

    const arrNumPar = arrNum.filter(num => num % 2 === 0)
    const arrNumImpar = arrNum.filter(num => num % 2 !== 0)

  return (
    <div>{console.log(
        arrNumImpar
    )}</div>
  )
}
