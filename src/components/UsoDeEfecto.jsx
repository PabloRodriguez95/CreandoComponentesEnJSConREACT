
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UsoDeEfecto = () => {
  const [users, setUsers] = useState([]);
  const [mostrar, setMostrar] = useState(true);

  const navigate=useNavigate();

  
  //useEffect se renderiza una vez que se ejecuta el componente.

  // useEffect(() => { //este se ejecuta cada vez que se actualiza el estado del componente
  //   console.log("Se monto el componente y se ejecuto una vez el useEffect")
  // })

  // useEffect(() => { // se ejecuta cuando se monta el componente y no se ejecuta mas.
  //   console.log("Se monta el componente y se ejecuta una vez el useEffect")
  // }, [])

  // useEffect(() => { //ejecuta una vez que se monta el componente y luego se va a ejecutar cuando escuche un cambio en el estado del componente.
  //   console.log("UseEffect escucha un cambio en el estado del componente")
  // }, [contador])

  // useEffect(() => {
  //   //ejecuta una vez que se monta el componente y luego se va a ejecutar cuando escuche un cambio en el estado del componente.
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

 
  useEffect(() => {
    try {
      const getUsers = async () => {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log(data.results);
        setUsers(data.results);
      };
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className=" w-100 p-5">
      <div className="d-flex justify-content-start my-2">
        <button className="btn mx-2 btn-outline-info" onClick={()=>navigate("/promesas")}>Promesas</button>
        <button className="btn mx-2 btn-outline-info" onClick={()=>{ navigate('/test')}}>test</button>
        <button className="btn mx-2 btn-outline-info" onClick={()=>{navigate('/destructuring')}}>destructuring</button>
      </div>
      <div className="d-flex justify-content-center my-2">
      <button onClick={() => setMostrar(false)} className="mx-3 btn btn-outline-danger"> Ocultar Personajes</button>
      <button onClick={() => setMostrar(true)} className="mx-3 btn btn-outline-primary"> Mostrar Personajes</button>
      </div>
      <div className="d-flex justify-content-center">
      {mostrar ? (
        <div>
          {users.map((user) => (
            <div key={user.id} className="border border-info border-2 my-2 text-center">
              <h1>{user.name}</h1>
              <img src={user.image} alt={user.name} className=""/>
            </div>
          ))}
        </div>
      ) : (
        <h1>Presione el boton para mostrar los personajes</h1>
      )}
      </div>
    </div>
  );
};

export default UsoDeEfecto;
