function enviarDadosSheets(nome) {
    // URL do Google Apps Script Web App
    var url = "https://script.google.com/macros/s/AKfycbw8MzUkafLE5FuxD6XofXC8hVAdSMAZpk2a0Z06aRPpKeOEJcTBVOc2VKdo9qSIKNIz/exec"; // URL do Google Apps Script

    // Enviar os dados usando uma requisição POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nome=${nome}` // Enviar o nome do usuário
    })
    .then(response => response.text())
    .then(data => {
        console.log("Dados enviados com sucesso: " + data);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
}
