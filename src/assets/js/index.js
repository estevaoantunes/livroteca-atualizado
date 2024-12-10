function toggleMenu() {
    document.getElementById("subMenu").classList.toggle("open-menu");
}


const API_KEY = 'AIzaSyA4XixkJUgTBfxnrQcU_Ep8jmznc_StwWc';
const popularBooksContainer = document.getElementById('popular-books');

async function fetchPopularBooks() {
    const keyword = 'bestseller';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${API_KEY}&maxResults=3`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPopularBooks(data.items);
    } catch (error) {
        console.error('Erro ao buscar livros populares:', error);
        if (popularBooksContainer) {
            popularBooksContainer.innerHTML = '<p>Erro ao carregar livros populares. Tente novamente mais tarde.</p>';
        }
    }
}


function displayPopularBooks(books) {
    const popularBooksContainer = document.getElementById('popular-books');
    if (!popularBooksContainer) return;
    popularBooksContainer.innerHTML = '';

    books.forEach((book) => {
        const { title, authors, imageLinks, previewLink } = book.volumeInfo;
        const bookCover = imageLinks?.thumbnail || 'https://via.placeholder.com/328x500?text=Capa+Indisponível';
        const author = authors ? authors[0] : 'Autor desconhecido';

        const bookArticle = document.createElement('article');
        bookArticle.classList.add('card__article');

        bookArticle.innerHTML = `
            <img src="${bookCover}" alt="${title}" class="card__img_principal">
            <div class="card__data">
                <span class="card__description">${author}</span>
                <h2 class="card__title">${title}</h2>
                <a href="${previewLink}" class="card__button" target="_blank">Conheça Mais</a>
            </div>
        `;

        // Adiciona o artigo criado ao container
        popularBooksContainer.appendChild(bookArticle);
    });
}


// Função para obter livros de uma categoria específica
async function fetchBooksByCategory(keyword, containerId) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${API_KEY}&maxResults=4`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCategoryBooks(data.items, containerId);
    } catch (error) {
        console.error(`Erro ao buscar livros de ${keyword}:`, error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '<p>Erro ao carregar livros. Tente novamente mais tarde.</p>';
        }
    }
}


function displayCategoryBooks(books, containerId) {
    const container = document.querySelector(`#${containerId} .grid.row`);
    if (!container) return;
    const colElements = container.querySelectorAll('.col');

    books.forEach((book, index) => {
        if (index < colElements.length) {
            const { imageLinks, previewLink, title } = book.volumeInfo;
            const bookCover = imageLinks?.thumbnail || 'https://via.placeholder.com/180x229?text=Capa+Indisponível';

            const col = colElements[index];
            const imgElement = col.querySelector('img');
            const linkElement = col.querySelector('a');

            imgElement.src = bookCover;
            imgElement.alt = title;
            linkElement.href = previewLink || '#';
            linkElement.target = '_blank';
        }
    });
}

// Função para carregar API ao navegar para uma página
function handleNavigation(page) {
    if (page === 'home.html') {
        fetchPopularBooks(); // Carrega livros populares
        fetchBooksByCategory('adventure', 'recomendacoes-aventura'); 
        fetchBooksByCategory('romance', 'recomendacoes-romance'); 
    }
}

// Função para carregar uma página dinamicamente e executar ações
function loadPage(page) {
    const content = document.getElementById('content');
    if (!content) return;

    content.innerHTML = '<p>Carregando...</p>';
    fetch(page)
        .then((response) => response.text())
        .then((html) => {
            content.innerHTML = html;
            handleNavigation(page); 
        })
        .catch((error) => {
            console.error('Erro ao carregar página:', error);
            content.innerHTML = '<p>Erro ao carregar página. Tente novamente mais tarde.</p>';
        });
}

// Configuração inicial da navegação
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Carrega a página inicial
    loadPage('home.html');
});
