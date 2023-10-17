const url = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27cursos%27%5D%7B%0A++nome_curso%0A%7D";
const select = document.querySelector("#cursos");

function removerAcentos(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  }


fetch(url)
    .then (response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }

        return response.json();
    })
    .then(data => {
        data.result.forEach(element => {
            let p = document.querySelector(".description")
            let nome = element.nome_curso
            let option = document.createElement('option')
            option.value = removerAcentos(nome.toLowerCase())
            option.innerHTML = nome
            p.innerHTML += `• ${nome}<br>`
            
            select.appendChild(option)
        });
    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })
