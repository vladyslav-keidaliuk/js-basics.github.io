document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const shuffleButton = document.getElementById('shuffle-button');
    let tiles = [];

    function createBoard() {
        tiles = [];
        for (let i = 1; i <= 15; i++) {
            tiles.push(i);
        }
        tiles.push(null); // Пустая плитка

        shuffle(tiles);

        board.innerHTML = '';
        tiles.forEach((tile, index) => {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');
            if (tile === null) {
                tileElement.classList.add('empty');
            } else {
                tileElement.textContent = tile;
                tileElement.addEventListener('click', () => moveTile(index));
            }
            board.appendChild(tileElement);
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function moveTile(index) {
        const emptyIndex = tiles.indexOf(null);
        const validMoves = [
            emptyIndex - 1, emptyIndex + 1,
            emptyIndex - 4, emptyIndex + 4
        ];

        if (validMoves.includes(index)) {
            [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
            createBoard();
        }
    }

    shuffleButton.addEventListener('click', createBoard);

    createBoard();
});
