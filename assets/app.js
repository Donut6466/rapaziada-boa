window.addEventListener("load", () => {
  const titulo = document.getElementById('titulocliente1');

  fetch("http://localhost:3000/clientes")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      json.forEach(element => {
        var cliente = `<title id="titulocliente1">${element.clientes.nome}</title>`
        let pai = document.getElementById('jesus');
        pai.innerHTML = cliente
      });
      // json.data.forEach(cliente => { 
      //   let li = document.createElement('li');
      //   li.innerHTML = `<img src="${cliente.logo}"/><span>${cliente.nome}</span>`; 
      //   list.appendChild(li);
      // });
    });
});

