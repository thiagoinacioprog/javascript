// definindo um array de alunos
let alunos = [
    {
        nome: "Aninhha",
        email: "ninha@gmail.com",
        telefone: 21935484773,
        profissao: "frontend"
    },
    { nome: "Jaque", email: "jaque@gmail.com", telefone: 21974450073, profissao: "backend" },
    { nome: "Julinha", email: "juju@msn.com", telefone: 21979984073, profissao: "fullstack" },
    { nome: "Lucao", email: "lucao@hotmail.com", telefone: 21954454075, profissao: "mobile" },
    { nome: "Inacio", email: "inacio@yahoo.com", telefone: 21977458473, profissao: "mobile" },
    { nome: "Maurao", email: "maurao@hotmail.com", telefone: 21944488576, profissao: "frontend" },
    { nome: "Ramonzao", email: "monzao@gmail.com", telefone: 2173484973, profissao: "frontend" },
    { nome: "Davizao", email: "davi@msn.com", telefone: 21975584073, profissao: "frontend" },

];

// carregar os dados do array na tabela
window.onload = (event) => {
    let tbody = document.querySelector("tBody");
    alunos.forEach((aluno, index) => {
        let tr = document.createElement("tr");
        tr.id = index + 1;

        let tdCod = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdTelefone = document.createElement("td");
        let tdProfissao = document.createElement("td");
        let tdBotao = document.createElement("td");

        tdCod.textContent = index;
        tdNome.textContent = aluno.nome;
        tdEmail.textContent = aluno.email;
        tdTelefone.textContent = aluno.telefone;
        tdProfissao.textContent = aluno.profissao;
        tdBotao.innerHTML = `<button class="btn btn-danger" onclick="remover(this)" >Remover</button>`

        tr.appendChild(tdCod);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdProfissao);
        tr.appendChild(tdBotao);

        tbody.appendChild(tr);

        initPieChart()


    });


}

function remover(id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);
    return false
}

// Definindo as variaveis e recebendo os dados

function adicionar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let profissao = document.getElementById('profissao').value;
    let table = document.getElementById('myTable');


    // calculando o tamanho da tabela
    let tableSize = table.rows.length;

    // inserindo uma linha abaixo da tabela
    let row = table.insertRow(tableSize);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    let col6 = row.insertCell(5);

    // Adicionando o id no elemento a ser criado
    row.id = tableSize;

    // Criando o codigo do botão para remover a linha
    let btnCode = "<button class='btn btn-danger' onclick='remover(this)'>Remover</button>";

    // Preenchendo as celulas da linha
    col1.innerHTML = tableSize;
    col2.innerHTML = nome;
    col3.innerHTML = email;
    col4.innerHTML = telefone;
    col5.innerHTML = profissao;
    col6.innerHTML = btnCode;

    // Limpando os campos de inseção de dados
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('profissao').value = "";
    // Retornando "false" para impedir o reload da
    return false

}

const initPieChart = () => {
    const ctx = document.getElementById("myChart");
    const data = {
        labels: ['Frontend', 'Backend', 'Fullstack', 'Mobile'],
        datasets: [
            {
                label: 'Quantidade',
                data: [10, 20, 50, 20],
                backgroundColor: ['pink', 'lightblue', 'lightgreen', 'orange'],
                hoverOffset: 4
            }
        ]
    }

    const pieChart = new Chart(
        ctx,
        {
            type: 'pie',
            data: data
        }
    )
};

const initPolarAreaChart = () => {
    removerChart();
    // 1 passo: pegar o elemento #myChart
    const ctx = document.getElementById('myChart');

    //2 passo: definir os dados do grafico
    const data = {
        labels: ['Frontend', 'Backend', 'Fullstack','Mobile'],
        datasets: [{
            label: 'Quantidade',
            data: [ 11, 15, 7, 3],
            backgroundColor: ['pink', 'lightblue', 'lightgreen', 'orange']
        }]
    };

    const polarAreaChart = new Chart(
        ctx,
        {
            type: 'polarArea',
            data: data
        }
    );
};


const removerChart = () => {
    const divChart = document.querySelector('.chart');
    document.getElementById("myChart").remove();
    const myChart = document.createElement("canvas");
    myChart.id="myChart";
    divChart.appendChild(myChart);
};