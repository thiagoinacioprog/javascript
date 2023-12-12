import { getAllGames } from "./service.js";

window.onload = () => {
    loadGames();
};

const loadGames = () => {
    console.log('>>>')
    const dataContainer = document.getElementById('data-container');
    getAllGames().then(resp => {
        resp.forEach(game => {
            const gamesElement = document.createElement('div');
            gamesElement.innerHTML = `<strong>${game.nome}</strong><p>${game.preco}</p>`;
            dataContainer.appendChild(gamesElement);
            
        });
    })
};

const createGame = () => {
    const jogoTeste = {
            "nome": "The Legend of Zelda",
            "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
            "preco": 100
        };
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(jogoTeste)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));

};

const deleteGame = () => {
    const game = {
        "nome": "The Legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100,
        "id": 3
        };
    fetch(URL+`/${game.id}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};

const updateGame = () =>{
    const game = {
        "nome": "The Legend of Zelda 2",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 300,
        "id": 3
    };
    
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
}