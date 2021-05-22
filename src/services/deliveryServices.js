import axios from 'axios';

//feito atraves de funções para retornar a URL da API
//export vc afirma que a função é publica

export const getApiUrl = () => {
    return "http://apirestaurante2-001-site1.ftempurl.com";
}

//obter dados do restaurante

export const getDadosRestaurante = () => {
    return axios.get(getApiUrl() + "/api/restaurante")
    .then(
        //Promisse -> retorno do processamento da API (é assincrono)
        response => {
            return response.data;
        }
    )
}


export const getCardapio = () => {
    return axios.get(getApiUrl() + "/api/cardapio")
    .then(
        //Promisse -> retorno do processamento da API (é assincrono)
        response => {
            return response.data;
        }
    )
}