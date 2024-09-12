function enviarDadosSheets(nome, dataAtual) {
    // URL do Google Apps Script Web App
    var url = "https://script.google.com/macros/s/AKfycbwzJjMptFrrHv0C0RdqMiY0FB2ZRaa_pZSMh7BNL2dgH1zkR7XS2urlr_3Gx0_1lQlx/exec"; // URL do Google Apps Script

    // Codifica o as váriaveis para que sejam enviados caracteres como "á", "é", "ç"
    let nomeCodificado = encodeURIComponent(nome);
    let dataCodificada = encodeURIComponent(dataAtual);

    // Enviar os dados usando uma requisição POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nome=${nomeCodificado}&data=${dataCodificada}` // Enviar o nome e data do usuário
    })
    .then(response => response.text())
    .then(data => {
        console.log("Dados enviados com sucesso: " + data);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
}
