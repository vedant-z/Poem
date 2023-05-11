const fetchPoemButton = document.getElementById('fetch-poem-button');
const poemDiv = document.getElementById('poem');

function fetchAndDisplayPoem() {
    fetch('https://poetrydb.org/random')
        .then(response => response.json())
        .then(function (poem) {
            const title = poem[0]['title'];
            const author = poem[0]['author'];
            const lines = poem[0]['lines'];
            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            titleElement.style.cssText = 'padding-top: 3rem;color: wheat;';
            const authorElement = document.createElement('h5');
            authorElement.textContent = `By ${author}`;
            authorElement.style.cssText = 'padding-top: 1rem;padding-bottom: 3rem;'
            const linesElement = document.createElement('div');
            linesElement.style.cssText = 'padding-bottom: 3rem;';
            lines.forEach(function (line) {
                const lineElement = document.createElement('p');
                lineElement.textContent = line;
                linesElement.appendChild(lineElement);
            });
            poemDiv.innerHTML = '';
            poemDiv.appendChild(titleElement);
            poemDiv.appendChild(authorElement);
            poemDiv.appendChild(linesElement);
        });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPoem);

fetchPoemButton.addEventListener('click', fetchAndDisplayPoem);
