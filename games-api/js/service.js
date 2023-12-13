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

export const createGame = async (game) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};

export const deleteGame = async (game) => {
    fetch(URL+`/${game.id}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};

export const updateGame = async (game) => {
    fetch(URL+`/${game.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};