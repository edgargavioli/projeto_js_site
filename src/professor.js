const url_professor = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27professor%27%5D%7B%0A++%22nome%22%3A+nome%2C%0A++++%22disciplina%22%3A+disciplina%2C%0A++++%22img%22%3A+imagem_professor.asset-%3Eurl%0A%7D%5B0..6%5D%0A"
const caixas = document.querySelector(".caixas")

fetch(url_professor)
    .then (response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }

        return response.json();
    })
    .then(data => {
        
        data.result.forEach(element => {
            let nome = element.nome
            let materia = element.disciplina
            let p_professor = document.createElement("p")
            let p_materia = document.createElement("p")
            let div_box = document.createElement("div")
            div_box.classList.add("box"+2)
            let imagem = document.createElement("img")
            imagem.src = element.img
            imagem.classList.add("img-profile")
            p_professor.innerHTML = nome
            p_professor.classList.add("nome-professor")
            p_materia.innerHTML = materia 
            p_materia.classList.add("materia-professor")
            div_box.appendChild(imagem)
            div_box.appendChild(p_professor)
            div_box.appendChild(p_materia)

            caixas.appendChild(div_box)
            
        });
    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })
