const fetchPoemButton = document.getElementById('fetch-poem-button');
const poemDiv = document.getElementById('poem');

document.addEventListener('DOMContentLoaded', function () {
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
});

fetchPoemButton.addEventListener('click', function () {
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
});

// const fetchPoemButton = document.getElementById('fetch-poem-button');
// const poemDiv = document.getElementById('poem');

// fetchPoemButton.addEventListener('click', function () {
//     // Send a GET request to the PoetryDB API to fetch a random poem
//     fetch('https://poetrydb.org/random')
//     // Flag to track whether a short poem has been found
//     let foundShortPoem = false;
//     // Send a GET request to the PoetryDB API to fetch a random poem
//     const fetchPoem = function () {
//         fetch('https://poetrydb.org/random')
//             .then(response => response.json())
//             .then(function (poems) {
//                 // Filter the poems by their line count
//                 const shortPoems = poems.filter(poem => poem['linecount'] < 50);
//                 // Choose a random poem from the filtered list
//                 const poem = shortPoems[Math.floor(Math.random() * shortPoems.length)];
//                 // Check if the selected poem is short
//                 if (poem['linecount'] < 50) {
//                     foundShortPoem = true;
//                     // Get the poem data from the response
//                     const title = poem['title'];
//                     const author = poem['author'];
//                     const lines = poem['lines'];
//                     // Create HTML elements for the poem
//                     const titleElement = document.createElement('h1');
//                     titleElement.textContent = title;
//                     const authorElement = document.createElement('h2');
//                     authorElement.textContent = `By ${author}`;
//                     const linesElement = document.createElement('div');
//                     lines.forEach(function (line) {
//                         const lineElement = document.createElement('p');
//                         lineElement.textContent = line;
//                         linesElement.appendChild(lineElement);
//                     });
//                     // Clear the poem div and append the new poem elements
//                     poemDiv.innerHTML = '';
//                     poemDiv.appendChild(titleElement);
//                     poemDiv.appendChild(authorElement);
//                     poemDiv.appendChild(linesElement);
//                 });
//     });

