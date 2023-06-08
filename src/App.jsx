//import "./App.css";
// import { useState } from "react";
// import Test from "./components/Test";
// import { Button, Form } from "react-bootstrap";
// import Destructuring from "./components/Destructuring";
// import Promesas from "./components/Promesas";
import UsoDeEfecto from "./components/UsoDeEfecto";

function App() {
  // const [value, setValue] = useState("");
  // const [notes, setNotes] = useState([]);

  // const agregarNota = () => {
  //   if (value.trim() !== "") {
  //     setNotes([...notes, value]);
  //     setValue("");
  //   }
  // };

  return (
    <div className="border border-danger border-5 m-5 container-fluid">
      {/* <h1>Notas</h1>

      <div className="m-5 border border-info p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrese la nota deseada</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nota..."
              minLength={4}
              maxLength={50}
              value={value}
              onChange={({ target }) => {
                setValue(target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={agregarNota}
            disabled={!value.trim()}
          >
            Agregar Nota
          </Button>
        </Form>
      </div>
      <div>
        <div>
          <Test notes={notes} setNotes={setNotes}></Test>
        </div>
      </div> */}
      {/* <Destructuring />
      <Promesas /> */}
      <UsoDeEfecto />
    </div>
  );
}

export default App;
