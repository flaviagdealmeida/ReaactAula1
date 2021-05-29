import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-materialize';
import * as services from '../services/deliveryServices';

export default function Products() {
    //declarando o state do componente
    const [state, setState] = useState([]);

    //evento didMount..
    useEffect(() => {
        //realizando uma chamada para a API (axios)
        services
            .getCardapio()
            .then((data) => {
                //armazenar o retorno da api (array[]) no state
                setState(data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    return (
        <Card>
            {
                state.map(
                    function (item, i) {
                        return (
                            <Row key={i}>
                                <Col m={1}>
                                    <img src={services.getApiUrl() + item.foto}
                                        className="responsive-img" />
                                </Col>
                                <Col m={9}>
                                    <h6><strong>{item.nome}</strong></h6>
                                    <p>{item.descricao}</p>
                                </Col>
                                <Col m={2}>
                                    <h5>{item.preco}</h5>
                                    <small>{item.categoria.nome}</small>
                                </Col>
                            </Row>
                        )
                    }
                )
            }
        </Card>
    )
}
