const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let loading = `<p> ⏳processando o seu desconto...</p>`

    let ready = `<p>✅ K.O. Cadastrado(a) para recebimento de novidades e promoções.</p>`

    content.innerHTML = loading
    
    
    setTimeout(() => {
        content.innerHTML = ready
    },2000);
})