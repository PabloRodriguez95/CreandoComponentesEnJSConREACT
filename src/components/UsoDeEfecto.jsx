import { useState, useEffect } from "react";

const UsoDeEfecto = () => {
  const [users, setUsers] = useState([]);
  const [mostrar, setMostrar] = useState(true);
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
    <>
      <button onClick={() => setMostrar(false)}> Ocultar Personajes</button>
      <button onClick={() => setMostrar(true)}> Mostrar Personajes</button>

      {mostrar ? (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <img src={user.image} alt={user.name} />
            </div>
          ))}
        </div>
      ) : (
        <h1>Presione el boton para mostrar los personajes</h1>
      )}
    </>
  );
};

export default UsoDeEfecto;
