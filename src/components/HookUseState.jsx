import { useState } from "react"; //Importando o hook useState
function HookUseState() {
  //SINTAXE
  //const [ESTADO, FORMA DE MODIFICAR O ESTADO] = Hook useState (VALOR INICIAL)
  const [cantor, setCantor] = useState("Zeca Pagodinho");

  //Uma função para mudar os cantores utilizando IF e ELSE
  //   const Mudar = () => {
  //     if (cantor === "Zeca Pagodinho") {
  //       setCantor("Alcione");
  //     } else {
  //       setCantor("Zeca Pagodinho");
  //     }
  //   };

  //Uma função para mudar os cantores utilizando o ternário
  //  ? Perguntando 'SE'  a comparação é verdadeira
  // : Senão, caso não seja verdadeira

  const Mudar = () => {
    setCantor(cantor === "Zeca Pagodinho" ? "Alcione" : "Zeca Pagodinho");
  };

  return (
    <>
      <h1> {cantor} </h1>
      <button
        onClick={() => {
          Mudar();
        }}
      >
        TROCAR O CANTOR
      </button>
    </>
  );
}

export default HookUseState;
