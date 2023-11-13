const url_coordenadores = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27coordenacao%27%5D%7B%0A++%27nome%27%3A+nome%2C%0A++%27imagem%27%3A+imagem.asset-%3Eurl%0A%7D";
const main__img = document.querySelector(".main__img");


fetch(url_coordenadores)
    .then (response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }

        return response.json()
    })
    .then(data => {
        let element = data.result[0]
        let imagem = document.createElement("img")
        let bpk_img = document.createElement("img")
        let p = document.createElement("p")
        bpk_img.src = "./assets/img/logos/biopark.png"
        imagem.src = element.imagem
        imagem.alt = element.nome
        imagem.style = "width: 75%;"

        p.innerHTML = element.nome
        p.classList.add("name")
        bpk_img.classList.add("biopark-logo")

        main__img.appendChild(imagem)
        main__img.appendChild(bpk_img)
        main__img.appendChild(p)
        
    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })
