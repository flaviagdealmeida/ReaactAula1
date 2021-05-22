import React from 'react';

import Header from './components/Header';
import Profile from './components/Profile';
import Main from './views/Main';


import { Row, Col } from 'react-materialize';

class App extends React.Component {

  //função de renderização do conteudo html
  //sobrescrita de metodos que vem da classe react.component
  render() {
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
}
//é necessário tornar o componente publico para aparecer na tela
export default App;