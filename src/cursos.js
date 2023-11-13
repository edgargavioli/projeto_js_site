const url = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27cursos%27%5D%7B%0A++nome_curso%0A%7D";
const select = document.querySelector("#cursos");
const footer_links = document.querySelectorAll(".footer-col")[2]; //2
const ul = document.createElement('ul')

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
            let li = document.createElement('li')
            let a = document.createElement('a')

            option.value = removerAcentos(nome.toLowerCase())
            option.innerHTML = nome
            p.innerText += `• ${nome}`
            p.appendChild(document.createElement('br'))
            a.innerText = nome;
            
            li.appendChild(a)
            ul.appendChild(li)
            footer_links.appendChild(ul)
            select.appendChild(option)
        });
    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })
