function minesweeperGrid() {
    const grid = [
        [{isMine: false, status: cellHidden, adjacentMines: 0}],
        {isMine: false, status: cellHidden, adjacentMines: 0},
        {isMine: false, status: cellHidden, adjacentMines: 0},
    ],
    [{isMine: false, status: cellHidden, adjacentMines: 0},
    {isMine: false, status: cellHidden, adjacentMines: 0},
    {isMine: false, status: cellHidden, adjacentMines: 0}
    ],
    [{isMine: false, status: cellHidden, adjacentMines: 0},
    {isMine: false, status: cellHidden, adjacentMines: 0},
    {isMine: false, status: cellHidden, adjacentMines: 0}]
    ];
    return grid
}