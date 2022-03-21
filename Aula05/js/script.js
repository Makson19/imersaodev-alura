var movies = [];

function adicionar(){

    var name = document.getElementById("name").value;
    var link = document.getElementById("url").value;
    
    // Esta condição verifica se há algum filme repetido. Se caso houver, ele não será adicionado novamente.
    for(var i = 0; i < movies.length; i++){
        if(link === movies[i].url){
            document.getElementById("name").value = "";
            document.getElementById("url").value = "";
            return;
        }
    }


    // Esta condição verifica se há erros nos campos de input, como campos vazios e urls que não são de iamgens. 
    if(name === "" || link === ""){
        alert("Preencha todos os campos!!");
        return;
    } else if (link.endsWith('.png') || link.endsWith('.jpg')){
        var movie = {
            title: name,
            url: link,
        };

        movies.push(movie);
    } else {
        alert("A URL digitada não pertence a uma imagem!!");
        return;
    }

    /*
    Daqui em diante criaremos algumas tags HTML usando JavaScript. Essas tags serão adicionadas, posteriormente,
    na tag "section" presente no arquivo "index.html". A estrutura terá a seguinte forma:

    <section class="list-banner">
        <figure class="banner-wrapper">
            <img class="banner" src="" alt="" >
            <figcaption class="title">Título do filme</figcaption>
        </figure>
    </section>
    */
    
    var section = document.querySelector(".list-banner");

    // Criando os elementos
    var figure = document.createElement("figure");           // criando a tag "figure"
    var img = document.createElement("img");                 // criando a tag "img"
    var figcaption = document.createElement("figcaption");   // criando a tag "figcaption"

    // Adicionando o seletor "class" aos elementos
    figure.classList.add("banner-wrapper");    
    img.classList.add("banner");               
    figcaption.classList.add("title");         

    // Adicionando algumas propriedades ao elemento img
    img.src = movie.url;
    img.alt = movie.title;

    // Adicionando conteúdo a o elemento figcaption
    figcaption.textContent = movie.title;

    section.insertAdjacentElement("beforeend", figure);
    figure.insertAdjacentElement("beforeend", img);
    figure.insertAdjacentElement("beforeend", figcaption);

    // Apagando o que foi digitado nos inputs após o clicar no botão.
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
}
