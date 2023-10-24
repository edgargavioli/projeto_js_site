const URL_NOTICIAS = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27%5D%7B%0A++%27link%27%3A+link_noticia%2C%0A++%27img%27%3A+img_noticia.asset-%3Eurl%0A%7D";

const noticiasContainer = document.querySelector(".redes-img");

 // Realiza uma solicitação GET para a URL da API
fetch(URL_NOTICIAS, { method: "GET" }) 
    .then(response => {
        return response.json(); // Converte a resposta em formato JSON
    })
    .then(data => {
        
      
        data.result.forEach(element => {
          const imgElement = document.createElement("img");
          const imga = document.createElement("a");
          imga.href = element.link;
          imgElement.src = element.img;
          imgElement.classList.add("redes-img")
          imga.appendChild(imgElement);
          noticiasContainer.appendChild(imga);

        });
      })
      
