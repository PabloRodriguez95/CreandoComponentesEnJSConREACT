import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Promesas = () => {
    const [data, setData] = useState(null)



    useEffect(() => {
         axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
         .then((res) => {
             setData(res.data)
         })
         .catch((err) => {
             console.log(err, "eerror")
         })
    }, [])

    setTimeout(() => {
        console.log(data, "data")
    }, 2000)
        

   
  

//   const promesa = new Promise((resolve) => {

//     setTimeout(() => {
//         const promesaResuelta = {menssage: 'Promesa resuelta'}
//         resolve(promesaResuelta)
//     }, 3000)    
//     })

//     promesa.then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     }) 
  
  const navigate = useNavigate();
  
    return (
   <>
    <h1> Conexion Api </h1>
    {data === null ? null : data.map((item) => {
        return (
            <div key={item.quote}>
                <p>{item.quote}</p>
                <p>{item.character}</p>
                <img src={item.image} alt={item.character} />
            </div>
        )
    })
    }

   <div>
    <button onClick={()=>{navigate('/test')}}>Ir a test</button>
   </div>
   </>
  )
}

export default Promesas

