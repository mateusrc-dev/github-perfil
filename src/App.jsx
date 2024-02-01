import { useState } from "react";

import Profile from "./components/Profile";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState();
  const [nomeUsuario, setNomeUsuario ] = useState('');
  
  return (
    <>
      <header className="search">
        <h1 className="title">Repositórios do Github</h1>
        <p>Digite abaixo o nome de um perfil do GitHub. Ao retirar a seleção do campo a pesquisa será buscada.</p>
        <input className="input" type="text" onBlur={e => setNomeUsuario(e.target.value)} />
      </header>
      {nomeUsuario.length > 4 && (
        <>
          <Profile nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/*
        {formularioVisivel && (
          <Formulario />
        )}
        <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
      */}
    </>
  )
}

export default App
