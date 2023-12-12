// importar o arquivo que tem os métodos de exceptions (erros)
import {handleErrors } from "./exception.js";
var URL = 'http://localhost:3000/jogos';

export const getAllGames = async () => {
    try {
        const response = await fetch(URL);

        // lidando com os erros na resposta
        handleErrors(response);

        // converter os dados para json
       return await response.json();

    
    } catch (error) {
        console.log('Error >>>', error);
    }
};