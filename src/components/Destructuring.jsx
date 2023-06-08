
const Destructuring = () => {
//   const arreglo = [1,2,3,4,5,6,7]

//   const [...resto] = arreglo //destructuring
  
//   console.log( resto, "resto")

  const persona = { 
    nombre: "Homero",
    apellido: "Simpson",
    edad: 39,
    direccion: {
        calle: "Av. Siempreviva",
        numero: 123
    }
  }

  // eslint-disable-next-line no-unused-vars
  const {nombre, apellido, edad, direccion:{calle, numero}} = persona

    // console.log(nombre, apellido, edad, calle, numero)

 // Operador ternario

 const edadPersona = 5

//  const mensaje = edadPersona >= 18 ? "Puede conducir" : "No puede conducir"

//   alert(mensaje)


  
  
    return (
    
    <>
    <p>Nombre: {nombre}</p>
    <div>{edadPersona >= 18 ? <p> {"Puede conducirrrrrr"}   </p> : <p> {"No puede conducir"}  </p> }</div>
    
    </>
  )
}

export default Destructuring