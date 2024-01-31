import React from "react";
import axios from "axios";

//Alternativa para la exportación de forma directa, si ponemos esto no es necesario la última linea de export default App
//export default function App()
function App() {
  const getUsers= async () =>{
  try {
    const url ="https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    //1.- Todos los datos de respuesta
    //console.log(response);
    //2.- Los datos obtenidos de data
    console.log(response.data);
  }catch (error){
    console.log(error);
  }

  };
  const createPost= async () =>{
    try {
      const url ="https://jsonplaceholder.typicode.com/posts";
      //lo obtengo del enlace Note: "see guide for usage examples" Output de placeholder
      const body = {
          id: 1,
          title: "Titulo", 
          body: "Curso de axios de React",
          userId:1,
        } 
      const response = await axios.post(url, body);
      //1.- Todos los datos que devuelve el post
      //console.log(response);
      //2.- El dato concreto que estoy pasando a través del body
      console.log(response.data);
    }catch (error){
      console.log(error);
    }
};


  return (
    <div className="App">
        <h1>HTTP- Axios</h1>
        <button onClick={getUsers}> Get USers</button>
        <button onClick={createPost}> Create Post</button>
    </div>
  );
};


export default App;
