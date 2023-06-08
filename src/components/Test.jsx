// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Test = ({ notes, setNotes}) => {
  // eslint-disable-next-line react/prop-types
const navegador=useNavigate();
  const eraseNote=(index)=>{
    
    const traerNotas = [...notes]
   // eslint-disable-next-line react/prop-types
   traerNotas.splice(index,1);
   setNotes(traerNotas);
}
  return (
    <div className="border border-success m-5 p-5">
      {
        // eslint-disable-next-line react/prop-types
        notes.map((note, index) => {
          return (
            <div className="bg-dark text-white p-2 m-2 fw-bolder d-flex justify-content-between align-items-center" key={index}>
              <p>
                Nota N°{index + 1}: {note}
              </p>
              <Button
                variant="danger"
                type="button"
                onClick={() => {
                  eraseNote(index);
                }}
              >
                Eliminar Nota
              </Button>
            </div>
          );
        })
      }
      <div>
        <button onClick={()=>{navegador(-1)}}>atras</button>
      </div>
    </div>
  );
};

export default Test;
