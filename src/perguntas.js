const url_perguntas = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27perguntas_frequentes%27%5D%7B%0A++%27pergunta%27%3A+pergunta%2C%0A++++%27resposta%27%3A+resposta%0A%7D"

const div_layout = document.querySelector(".layout")

fetch(url_perguntas)
    .then (response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }

        return response.json();
    })
    .then(data => {
        data.result.forEach(element => {
            let div_accordion = document.createElement("div")
            let pergunta = document.createElement('p')
            let resposta = document.createElement('p')
            let div_question = document.createElement("div")
            div_accordion.classList.add("accordion")
            div_question.classList.add("accordion__question")
            let div_answer = document.createElement("div")
            div_answer.classList.add("accordion__answer")
            pergunta.innerHTML = "+ "+element.pergunta+"?";
            div_question.appendChild(pergunta)
            resposta.innerHTML = element.resposta
            div_answer.appendChild(resposta)
            div_accordion.appendChild(div_question)
            div_accordion.appendChild(div_answer)
            div_layout.appendChild(div_accordion)
        });
        let answers = document.querySelectorAll(".accordion");
        answers.forEach((event) => {
            event.addEventListener('click', () => {
                if (event.classList.contains("active")) {
                    event.classList.remove("active");
                }
                else {
                    event.classList.add("active");
                }
            })
        })

    })
    .catch(error =>{
        console.error("ERRO: ", error)
    })