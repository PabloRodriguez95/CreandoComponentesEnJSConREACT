//import "./App.css";
 import { useState } from "react";
 import Test from "./components/Test";
// import { Button, Form } from "react-bootstrap";
 import Destructuring from "./components/Destructuring";
 import Promesas from "./components/Promesas";
import UsoDeEfecto from "./components/UsoDeEfecto";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./components/Error";
import SignUp from "./components/SignUp";

function App() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const agregarNota = () => {
    if (value.trim() !== "") {
      setNotes([...notes, value]);
      setValue("");
    }
  };
  const currentUser='ADMIN';
  return (
    <main className="container-fluid border border-dark border-5">
      <BrowserRouter>
          <div className="text-dark">
            <a href="/">Inicio</a>
          </div>
        <div className="border border-danger border-5 m-5">
          <Routes>
            <Route  index exact path="/" element={<UsoDeEfecto />} />
            <Route exact path="/destructuring" element={<Destructuring />} />
            {currentUser==='ADMIN' &&  <Route exact path="/test" element={<Test notes={notes} setNotes={setNotes}  />} />}           
            <Route exact path="/promesas" element={<Promesas />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>

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
      {/* <UsoDeEfecto /> */}
    </main>
  );
}

export default App;
