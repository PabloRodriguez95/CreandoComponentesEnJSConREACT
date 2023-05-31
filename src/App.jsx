//import "./App.css";
import { useState } from "react";
import Test from "./components/Test";
import { Button, Form } from "react-bootstrap";

function App() {
  //const [count, setCount] = useState(0);
  //const [name, setName] = useState("");
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState([]); //array de notas

  //console.log("Name", name);
  return (
    <div className="border border-danger border-3 container m-5 pt-5">
      <h1>Notas</h1>

      <div className="m-5 border border-info p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrese la nota deseada</Form.Label>
            <Form.Control type="text" placeholder="Nota..." minLength={4} maxLength={50} value={value} onChange={({target})=>{
              setValue(target.value);
            }}/>
          </Form.Group>
          <Button
          variant="primary"
          type="button"
          onClick={() => {
            setNotes([...notes, value]);
            setValue("");
          }}
        >
          Agregar Nota
        </Button>
        </Form>
       
      </div>
      <div>
        <div>
          <Test notes={notes} setNotes={setNotes}></Test>
        </div>
      </div>
    </div>
  );
}

export default App;
