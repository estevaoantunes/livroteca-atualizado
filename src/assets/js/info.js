function toggleMenu() {
    document.getElementById("subMenu").classList.toggle("open-menu");
}

document.addEventListener("DOMContentLoaded", () => {
    const commentList = document.querySelector(".post-comment");
    const commentForm = document.querySelector(".comment-box");
    const commentInput = commentForm?.querySelector("textarea");
  
    // Dados do usuário simulados (pode ser substituído por um sistema real de autenticação)
    const currentUser = {
      name: "Nome do Usuário", // Substitua pelo nome real do usuário
      image: "assets/imgs/user.png", // Substitua pela URL real da imagem do usuário
    };
  
    // Carrega os comentários do localStorage
    const loadComments = () => {
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      comments.forEach((comment, index) => {
        addCommentToDOM(comment.text, comment.user, index);
      });
    };
  
    // Atualiza o localStorage com todos os comentários do DOM
    const updateLocalStorage = () => {
      const comments = Array.from(
        document.querySelectorAll(".comment-list[data-index]")
      ).map((comment) => ({
        text: comment.querySelector(".comment-text").textContent,
        user: {
          name: comment.querySelector(".user-meta .name").textContent,
          image: comment.querySelector(".user-image img").src,
        },
      }));
      localStorage.setItem("comments", JSON.stringify(comments));
    };
  
    // Adiciona comentário ao DOM
    const addCommentToDOM = (commentText, user, index) => {
      const commentItem = document.createElement("div");
      commentItem.classList.add("comment-list");
      commentItem.setAttribute("data-index", index);
      commentItem.innerHTML = `
        <div class="flex">
          <div class="user">
            <div class="user-image">
              <img src="${user.image}" alt="Imagem do usuário">
            </div>
            <div class="user-meta">
              <div class="name">${user.name}</div>
              <div class="day">Agora mesmo</div>
            </div>
          </div>
          <div class="reply">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Excluir</button>
          </div>
        </div>
        <div class="comment comment-text">${commentText}</div>
      `;
      commentList.insertBefore(commentItem, commentForm);
  
      // Adiciona eventos de edição e exclusão
      const editButton = commentItem.querySelector(".edit-btn");
      const deleteButton = commentItem.querySelector(".delete-btn");
  
      editButton.addEventListener("click", () => editComment(commentItem));
      deleteButton.addEventListener("click", () => deleteComment(commentItem));
    };
  
    // Edita um comentário
    const editComment = (commentItem) => {
      const commentText = commentItem.querySelector(".comment-text");
      const newText = prompt("Edite seu comentário:", commentText.textContent);
      if (newText !== null && newText.trim() !== "") {
        commentText.textContent = newText.trim();
        updateLocalStorage();
      }
    };
  
    // Exclui um comentário
    const deleteComment = (commentItem) => {
      commentItem.remove();
      updateLocalStorage();
    };
  
    // Salva comentário no localStorage
    const saveComment = (commentText, user) => {
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      comments.push({ text: commentText, user });
      localStorage.setItem("comments", JSON.stringify(comments));
    };
  
    // Lida com o envio do formulário
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText) {
        const index = document.querySelectorAll(".comment-list").length;
        addCommentToDOM(commentText, currentUser, index);
        saveComment(commentText, currentUser);
        commentInput.value = ""; // Limpa o campo de texto
      } else {
        alert("Por favor, insira um comentário válido.");
      }
    });
  
    // Inicializa a página com os comentários salvos
    loadComments();
  });
  