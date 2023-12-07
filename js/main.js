
document.addEventListener('DOMContentLoaded', () => {

    const dataContainer = document.getElementById('data-container');
    
    // função para tratar os erros das solicitações
    const handleErrors = (response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        
        return response;
    };
    
    // função para buscar os dados da API
    const fetchData = async () => {
        try {
            // fazendo uma requisição GET
            const response = await fetch('http://localhost:3000/filmes');
    
            // tratando o erro na resposta
            handleErrors(response);
    
            // converter os dados para JSON
            const filmes = await response.json();
    
            // exibindo os dados na pagina
            filmes.forEach(filme => {
                const filmeElement = document.createElement('div');
        filmeElement.innerHTML=`<strong>${filme.title}</strong><p>${filme.title}</p>`
        dataContainer.appendChild(filmeElement);
            });
    
    
        } catch (error) {
            console.log('erro ao buscar os dados', error);
        }
    
    };
    
    // chamando a função para carregar os dados na tela
    fetchData();
    
    
    });