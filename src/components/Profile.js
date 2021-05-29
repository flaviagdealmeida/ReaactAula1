import React, {useEffect, useState} from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../services/deliveryServices';

//esse componente possui state ou seja recursos
// que armazenam variaveis e controlar o estado do compomente
//mas é necessário escrever d+ pra isso
//' ' = texto, [] = array, {} = objeto

export default function Profile() {
    //state variável ("chave")
    //setState função que grava ("função que retorna o valor")
    //useState({}) inicializa o state do componente e as chaves indicam que o conteudo é um objeto JSON
    
    const [state, setState] = useState({});

    //utilizamos os efects para substituir o DidMount que uma forma de contornar a utilização esse componente
    useEffect(() =>{
        services
            .getDadosRestaurante()
            .then((data) => { // promisse de sucesso
                // preciso armazenar o JSON retornado pela API no setState esse passara o dado para o atributo state
                setState(data);
            })
            .catch((e) => { // promisse de erro
                console.log(e);
            })
    }, []);

    return(
       <Card>
           <Row>
               <img 
                src={services.getApiUrl() + state.foto}
                className="responsive-img"
               />
           </Row>
           <Row>
                <div style={{ lineHeight: 1.2 }}>
                    {state.descricao}
                </div>
           </Row>
       </Card>
    );
}