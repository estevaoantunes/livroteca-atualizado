const apiUrl = "http://localhost:3000/postagens_independentes";

async function loadPublications() {
    const response = await fetch(apiUrl);
    const books = await response.json();
    const bookList = document.getElementById("publications");
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item", "text-center", "mb-4"); // Centralizar e adicionar margem inferior
        bookItem.innerHTML = `
            <p>${book.titulo} - ${book.genero} - 2024</p>
        `;
        bookList.appendChild(bookItem);
    });
}

loadPublications();

async function addPublication() {
    const title = document.getElementById("title").value;
    const synopsis = document.getElementById("synopsis").value;
    const genre = document.getElementById("genre").value;
    const text = document.getElementById("text").value;
    const cover = document.getElementById("image-preview").querySelector("img")?.src;

    const response = await fetch(apiUrl);
    const books = await response.json();
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1; // Incrementa o último ID

    const newBook = {
        id: newId,
        titulo: title,
        sinopse: synopsis,
        genero: genre,
        texto: text,
        capa: cover || 'https://s1.static.brasilescola.uol.com.br/be/2022/04/capa-do-livro-romanceiro-da-inconfidencia.jpg'
    };

    const postResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
    });

    if (postResponse.ok) {
        alert("Livro cadastrado com sucesso!");
        document.getElementById("publication-form").reset();
    } else {
        alert("Erro ao cadastrar o livro.");
    }
}

function previewImage(event) {
    const preview = document.getElementById("image-preview");
    preview.innerHTML = '';
    const img = document.createElement("img");
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file); // Gera a URL temporária da imagem
    img.src = fileURL;
    preview.appendChild(img);

    // Armazena a URL temporária da imagem no campo hidden
    document.getElementById("cover-url").value = fileURL;
}

document.getElementById("publication-form").addEventListener("submit", event => {
    event.preventDefault();
    addPublication();
});