import React, {useState} from 'react';
import *as services from '../services/deliveryServices';
import { Card, Row, Col, Input, Button } from 'react-materialize';

export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');



    const [success, setSucess] = useState('');
    const [fail, setFail] = useState('');
    const [errors, setErrors] = useState({});


      //função para processar o evento SUBMIT do formulário
       //função para processar o evento SUBMIT do formulário
    const handleSubmit = (event) => {
        //anular o comportamento POST do formulário..
        event.preventDefault();
        setSucess('');
        setFail('');
        setErrors({});

        //executando a chamada para o serviço da API..
        services
            .postCliente({
                nome,
                email,
                telefone,
                senha,
                senhaConfirmacao
            })
            .then(
                data => {
                    setSucess(data.message);
                   
                    setNome('');
                    setEmail('');
                    setTelefone('');
                    setSenha('');
                    setSenhaConfirmacao('');
                }
            )
            .catch(
                e => {
                    var result = e.response;
                    switch (result.status) {
                        case 400:
                            setErrors(result.data.errors);
                            break;
                        case 500:
                            setFail(result.data.message);
                            break;
                       
                    }


                }
            )
    }


    return(
        <Card>
            <h5>Crie sua conta de cliente</h5>
            <br/>

            {
                success ?
                    <div className="card-panel green ligthen-2 white-text">
                        <strong>{success}</strong>
                    </div>
                    : <div> </div>
            
            }

            {
                fail ?
                    <div className="card-panel red ligthen-2 white-text">
                        <strong>{fail}</strong>
                    </div>
                    : <div> </div>
            
            }


            <form method='post' onSubmit={handleSubmit}>
                <Row>
                    <Col s={6}>
                        <Input
                            label="Nome do Cliente"
                            placeholder ="Ex.: João das Couves"
                            type="text"
                            s={12}
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    {
                        errors.Nome ?
                            errors.Nome.map(
                               (item, i) => (
                                   <div key={i} className="red-text text-darken-4">
                                       {item}
                                   </div>
                               )    
                            ):(
                                <span></span>
                            )
                    }

                    </Col>
                    <Col s={3}>
                    <Input
                            label="Email do Cliente"
                            placeholder ="Ex.: teste@teste.com."
                            type="text"
                            s={12}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                         {
                        errors.Email ?
                            errors.Email.map(
                               (item, i) => (
                                   <div key={i} className="red-text text-darken-4">
                                       {item}
                                   </div>
                               )    
                            ):(
                                <span></span>
                            )
                    }
                    </Col>
                    <Col s={3}>
                    <Input
                            label="Telefone do Cliente"
                            placeholder ="Ex.: 21 9999 9999"
                            type="text"
                            s={12}
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                         {
                        errors.Telefone ?
                            errors.Telefone.map(
                               (item, i) => (
                                   <div key={i} className="red-text text-darken-4">
                                       {item}
                                   </div>
                               )    
                            ):(
                                <span></span>
                            )
                    }
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <Input
                            label="Informe sua senha"
                            placeholder ="Digite aqui"
                            type="password"
                            s={12}
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                         {
                        errors.Senha ?
                            errors.Senha.map(
                               (item, i) => (
                                   <div key={i} className="red-text text-darken-4">
                                       {item}
                                   </div>
                               )    
                            ):(
                                <span></span>
                            )
                    }
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <Input
                            label="Confirme sua senha"
                            placeholder ="Digite aqui"
                            type="password"
                            s={12}
                            value={senhaConfirmacao}
                            onChange={e => setSenhaConfirmacao(e.target.value)}
                        />
                         {
                        errors.SenhaConfirmacao ?
                            errors.SenhaConfirmacao.map(
                               (item, i) => (
                                   <div key={i} className="red-text text-darken-4">
                                       {item}
                                   </div>
                               )    
                            ):(
                                <span></span>
                            )
                    }
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                    <Button type="submit" className="deep-orange">
                        Realizar Cadastro
                    </Button>
                    </Col>
                </Row>
            </form>
        </Card>
    )
}