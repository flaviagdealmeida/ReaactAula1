import React from 'react'; // necessário para qualquer componente react

import Header from './components/Header';
import Profile from './components/Profile';
import Main from './views/Main';


import { Row, Col } from 'react-materialize';

//class App extends React.Component { removendo para refator o codigo para utilizar o hooks 

export default function App() {
  //função de renderização do conteudo html
  //sobrescrita de metodos que vem da classe react.component
 // render() { somente aparece na sintaxe de class para hooks a obrigatoriedade é apenas de ter um return
    return (
      <Row>
        <Header />
        <Row>
          <Col m={2}>
            <Profile />
          </Col>
          <Col m={10}>
            <Main />
          </Col>
        </Row>
      </Row>

    )
  }
//é necessário tornar o componente publico para aparecer na tela apenas quando usamos bibliotecas
//export default App;