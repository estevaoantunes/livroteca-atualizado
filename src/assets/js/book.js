function previewImage(event) {
    const imagePreview = document.getElementById('image-preview');
    const reader = new FileReader();
    reader.onload = function() {
        imagePreview.innerHTML = `<img src="${reader.result}" alt="Imagem do livro">`;
    }
    reader.readAsDataURL(event.target.files[0]);
}