function enviarDados() {

    // URL para enviar os dados para a Google Sheets
    let url = "https://script.google.com/macros/s/AKfycbyzb7Puw1hm_Ez8M0AloO0do0zICRIeUjEUJjsCwZy_gJyZZ98V5C4Bv5y4opk7CPzP/exec";

    let caixaDeTexto = window.document.getElementById("inputdenome");

    let textoDigitado = caixaDeTexto.value.trim();

    let resultado = window.document.getElementById("resultado");

    const dataAtual = new Date();

    if (textoDigitado != "") {
        let textoDigitadoCodificado = encodeURIComponent(textoDigitado);
        let dataAtualCodificada = encodeURIComponent(dataAtual);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `nome=${textoDigitadoCodificado}&data=${dataAtualCodificada}` // Enviar o nome e data do usuário
        })
            .then(response => response.text())
            .then(data => {
                console.log("Dados enviados com sucesso: " + data);
            })
            .catch(error => {
                console.error('Erro ao enviar os dados:', error);
            });

        resultado.innerHTML = `Olá, ${textoDigitado}! Como vai?<br>`
        resultado.innerHTML += `Seu nome tem ${textoDigitado.length} letras.<br>`
        resultado.innerHTML += `Seu nome em maiúsculas é "${textoDigitado.toUpperCase()}"<br>`
        resultado.innerHTML += `Seu nome em minúsculas é "${textoDigitado.toLowerCase()}"<br>`

        caixaDeTexto.value = ""
        caixaDeTexto.placeholder = "Salvo!"

    } else {
        caixaDeTexto.placeholder = "Digite algum texto!"
        caixaDeTexto.value = ""
        resultado.innerHTML = ""

    }


}