import React from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../services/deliveryServices';

class Profile extends React.Component {

    //construtor do componente..
    constructor(props){
        super(props);

        //definindo o state do componente
        //(dados / atributos)
        this.state = {
            nome : '',
            foto : '',
            descricao : ''
        }
    }

    //evento executado antes do componente ser renderizado
    componentDidMount() {
        //executando a consulta na API..
        services.getDadosRestaurante()
            .then( //promisse de sucesso!
                data => {
                    //armazenar as informações no state..
                    this.setState({
                        ...data
                    });
                }
            )
            .catch( //promisse de erro!
                e => {
                    console.log(e);
                }
            )
    }

    render(){
        return (
            <Card>
                <Row>
                    <img src={services.getApiUrl() + this.state.foto}
                        className="responsive-img"
                    />
                </Row>
                <Row>
                    <strong>{this.state.nome}</strong>
                </Row>
                <Row>
                    <small>{this.state.descricao}</small>
                </Row>
            </Card>
        )
    }
}

export default Profile;

