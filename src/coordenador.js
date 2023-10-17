const url_coordenadores = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27coordenacao%27%5D%7B%0A++%27nome%27%3A+nome%2C%0A++%27imagem%27%3A+imagem.asset-%3Eurl%0A%7D";
const main__img = document.querySelector(".main__img");


fetch(url_coordenadores)
    .then (response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }

        return response.json();
    })
    .then(data => {
        let element = data.result[0]
        let imagem = document.createElement('img')
        imagem.src = element.imagem

        main__img.appendChild(imagem)
        
    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })
