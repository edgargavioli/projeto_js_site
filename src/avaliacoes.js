const url_avaliacoes = "https://7ajo5cpv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27avaliacao%27%5D%7B%0A++%27nome%27%3A+nome%2C%0A++++%27nota%27%3A+nota%2C%0A++++%27texto%27%3A+texto%2C%0A++++%27perfil%27%3A+perfil_insta%2C%0A++++%27img%27%3A+img.asset-%3Eurl%0A%7D%5B0..6%5D"

const container_aval = document.querySelector("#avaliacoes")
const testimonial = document.createElement("div")
const div_tesmonial_box = document.createElement("div")

div_tesmonial_box.classList.add("testimonial-box-container")
testimonial.id = "testimonials"

fetch(url_avaliacoes)
    .then(response => {
        if(!response.ok){
            throw new Error("FALHA NA REQUISIÇÃO")
        }
        return response.json();
    })
    .then(data => {
        data.result.forEach(element => {
            let testimonial_box = document.createElement("div")
            let div_profile_img = document.createElement("div")
            let div_name_user = document.createElement("div")
            let div_review = document.createElement("div")
            let div_box_estrela = document.createElement("div")
            let div_box_top = document.createElement("div")
            let div_profile = document.createElement("div")
            let div_comentario = document.createElement("div")
            let img = document.createElement("img")
            let p = document.createElement("p")
            let strong = document.createElement("strong")
            let span = document.createElement("span")
            let i = 5;

            i -= element.nota

            div_profile_img.classList.add("profile-img")
            div_name_user.classList.add("name-user")
            div_box_top.classList.add("box-top")
            div_box_estrela.classList.add("box-estrela")
            div_review.classList.add("reviews")
            div_comentario.classList.add("client-comment")
            testimonial_box.classList.add("testimonial-box")
            
            strong.innerText = element.nome
            span.innerText = `@${element.perfil}`

            img.src = element.img
            img.alt = "Foto de perfil do avaliador"
            
            div_profile_img.appendChild(img)
            div_name_user.appendChild(strong)
            div_name_user.appendChild(span)
            div_name_user.appendChild(div_box_estrela)

            while(element.nota > 0){
                let star = document.createElement("i")
                star.classList.add("fa")
                star.classList.add("fa-star")
                div_box_estrela.appendChild(star)
                element.nota--
            }

            while(i>0){
                let star = document.createElement("i")
                star.classList.add("far")
                star.classList.add("fa-star")
                star.style.color = "grey"
                div_box_estrela.appendChild(star)
                i--
            }

            p.innerHTML = element.texto
            
            div_profile.appendChild(div_profile_img)
            div_profile.appendChild(div_name_user)
            div_review.appendChild(div_box_estrela)
            div_box_top.appendChild(div_profile)
            div_box_top.appendChild(div_review)
            div_comentario.appendChild(p)
            testimonial_box.appendChild(div_box_top)
            testimonial_box.appendChild(div_comentario)
            div_tesmonial_box.appendChild(testimonial_box)
            testimonial.appendChild(div_tesmonial_box)
            container_aval.appendChild(testimonial)
        });
    })