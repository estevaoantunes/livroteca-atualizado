const apiUrl = "http://localhost:3000/livros";

// Carregar livros ao carregar a página
async function loadBooks() {
    const response = await fetch(apiUrl);
    const books = await response.json();
    const bookList = document.getElementById("books");
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("col-4", "book-item", "text-center", "mb-4"); // Centralizar e adicionar margem inferior
        bookItem.innerHTML = `
            <img src="${book.capa}" alt="${book.titulo}" class="img-fluid mb-2">
            <h5 class="book-title">${book.titulo}</h5>
            <div class="edit-icon" onclick="openEditModal(${book.id})">
                <i class="fas fa-pencil-alt"></i>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}


// Adicionar novo livro com ID manual
async function addBook() {
    const title = document.getElementById("title").value;
    const synopsis = document.getElementById("synopsis").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const autor = document.getElementById("autor").value;
    const cover = document.getElementById("image-preview").querySelector("img")?.src;

    const response = await fetch(apiUrl);
    const books = await response.json();
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1; // Incrementa o último ID

    const newBook = {
        id: newId, // Define um ID incremental
        titulo: title,
        sinopse: synopsis,
        genero: genre,
        autor: autor,
        ano: year,
        capa: cover || 'https://s1.static.brasilescola.uol.com.br/be/2022/04/capa-do-livro-romanceiro-da-inconfidencia.jpg'
    };

    const postResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
    });

    if (postResponse.ok) {
        alert("Livro cadastrado com sucesso!");
        loadBooks();
        document.getElementById("book-form").reset();
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


// Abrir modal de edição
async function openEditModal(bookId) {
    const response = await fetch(`${apiUrl}/${bookId}`);
    const book = await response.json();

    document.getElementById("edit-title").value = book.titulo;
    document.getElementById("edit-synopsis").value = book.sinopse;
    document.getElementById("edit-genre").value = book.genero;
    document.getElementById("edit-autor").value = book.autor;
    document.getElementById("edit-year").value = book.ano;
    document.getElementById("edit-image-preview").innerHTML = `<img src="${book.capa || 'default-cover.jpg'}" alt="Capa do Livro">`;

    document.getElementById("edit-book-form").dataset.bookId = bookId;
    const editModal = new bootstrap.Modal(document.getElementById('editBookModal'));
    editModal.show();
}

// Excluir livro
async function deleteBook() {
    const bookId = document.getElementById("edit-book-form").dataset.bookId;

    const response = await fetch(`${apiUrl}/${bookId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Livro eliminado com sucesso!");
        loadBooks();
        const editModal = bootstrap.Modal.getInstance(document.getElementById('editBookModal'));
        editModal.hide();
    } else {
        alert("Erro ao eliminar o livro.");
    }
}

// Atualizar livro
async function updateBook() {
    const bookId = document.getElementById("edit-book-form").dataset.bookId;
    const title = document.getElementById("edit-title").value;
    const synopsis = document.getElementById("edit-synopsis").value;
    const genre = document.getElementById("edit-genre").value;
    const autor = document.getElementById("edit-autor").value;
    const year = document.getElementById("edit-year").value;
    const cover = document.getElementById("edit-image-preview").querySelector("img")?.src;

    const updatedBook = {
        titulo: title,
        sinopse: synopsis,
        genero: genre,
        autor: autor,
        ano: year,
        capa: cover || 'default-cover.jpg' // Defina uma capa padrão se não houver
    };

    const response = await fetch(`${apiUrl}/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook)
    });

    if (response.ok) {
        alert("Livro atualizado com sucesso!");
        loadBooks();
        const editModal = bootstrap.Modal.getInstance(document.getElementById('editBookModal'));
        editModal.hide();
    } else {
        alert("Erro ao atualizar o livro.");
    }
}

// Chamadas iniciais
loadBooks();



// Salvar edições no livro
async function updateBook() {
    const bookId = document.getElementById("edit-book-form").dataset.bookId;
    const title = document.getElementById("edit-title").value;
    const synopsis = document.getElementById("edit-synopsis").value;
    const genre = document.getElementById("edit-genre").value;
    const autor = document.getElementById("edit-autor").value;
    const year = document.getElementById("edit-year").value;
    const cover = document.getElementById("edit-image-preview").querySelector("img")?.src;

    const updatedBook = {
        titulo: title,
        sinopse: synopsis,
        genero: genre,
        autor: autor,
        ano: year,
        capa: cover
    };

    const response = await fetch(`${apiUrl}/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook)
    });

    if (response.ok) {
        alert("Livro atualizado com sucesso!");
        loadBooks();
        const editModal = bootstrap.Modal.getInstance(document.getElementById('editBookModal'));
        editModal.hide();
    } else {
        alert("Erro ao atualizar o livro.");
    }
}

// Evento para o botão de cadastro
document.getElementById("book-form").addEventListener("submit", event => {
    event.preventDefault();
    addBook();
});

document.addEventListener("DOMContentLoaded", loadBooks);

