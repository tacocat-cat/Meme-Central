document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('upload-button');
    const memeImageInput = document.getElementById('meme-image');
    const uploadForm = document.getElementById('upload-form');
    const memesContainer = document.getElementById('memes-container');

    uploadButton.addEventListener('click', function () {
        memeImageInput.click(); // Trigger the file input dialog
    });

    memeImageInput.addEventListener('change', function () {
        if (memeImageInput.files && memeImageInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageUrl = e.target.result;
                const caption = document.getElementById('meme-caption').value;

                addMeme(imageUrl, caption);
                uploadForm.reset();
            };

            reader.readAsDataURL(memeImageInput.files[0]);
        }
    });

    function addMeme(imageUrl, caption) {
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        const memeImage = document.createElement('img');
        memeImage.src = imageUrl;
        memeImage.alt = caption;

        const memeCaption = document.createElement('p');
        memeCaption.textContent = caption;

        memeDiv.appendChild(memeImage);
        memeDiv.appendChild(memeCaption);

        memesContainer.appendChild(memeDiv);
    }
});
