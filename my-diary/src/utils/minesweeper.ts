import { MAX_COLS, MAX_ROWS, NO_OF_BOMBS } from '../constants';
import { CellType, CellState, CellValue } from '../types/minesweeper.type';

const grabAllAdjacentCells = (
    cells: CellType[][],
    rowParam: number,
    colParam: number
): {
    topLeftCell: CellType | null;
    topCell: CellType | null;
    topRightCell: CellType | null;
    leftCell: CellType | null;
    rightCell: CellType | null;
    bottomLeftCell: CellType | null;
    bottomCell: CellType | null;
    bottomRightCell: CellType | null;
} => {
    const topLeftCell =
        rowParam > 0 && colParam > 0 ? cells[rowParam - 1][colParam - 1] : null;
    const topCell = rowParam > 0 ? cells[rowParam - 1][colParam] : null;
    const topRightCell =
        rowParam > 0 && colParam < MAX_COLS - 1
            ? cells[rowParam - 1][colParam + 1]
            : null;
    const leftCell = colParam > 0 ? cells[rowParam][colParam - 1] : null;
    const rightCell =
        colParam < MAX_COLS - 1 ? cells[rowParam][colParam + 1] : null;
    const bottomLeftCell =
        rowParam < MAX_ROWS - 1 && colParam > 0
            ? cells[rowParam + 1][colParam - 1]
            : null;
    const bottomCell =
        rowParam < MAX_ROWS - 1 ? cells[rowParam + 1][colParam] : null;
    const bottomRightCell =
        rowParam < MAX_ROWS - 1 && colParam < MAX_COLS - 1
            ? cells[rowParam + 1][colParam + 1]
            : null;

    return {
        topLeftCell,
        topCell,
        topRightCell,
        leftCell,
        rightCell,
        bottomLeftCell,
        bottomCell,
        bottomRightCell,
    };
};

export const generateCells = (): CellType[][] => {
    let cells: CellType[][] = [];

    // generating all cells
    for (let row = 0; row < MAX_ROWS; row++) {
        cells.push([]);
        for (let col = 0; col < MAX_COLS; col++) {
            cells[row].push({
                value: CellValue.none,
                state: CellState.open,
            });
        }
    }

    // randomly put 10 bombs
    let bombsPlaced = 0;
    while (bombsPlaced < NO_OF_BOMBS) {
        const randomRow = Math.floor(Math.random() * MAX_ROWS);
        const randomCol = Math.floor(Math.random() * MAX_COLS);

        const currentCell = cells[randomRow][randomCol];
        if (currentCell.value !== CellValue.bomb) {
            cells = cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    if (randomRow === rowIndex && randomCol === colIndex) {
                        return {
                            ...cell,
                            value: CellValue.bomb,
                        };
                    }

                    return cell;
                })
            );
            bombsPlaced++;
        }
    }

    // calculate the numbers for each cell
    for (let rowIndex = 0; rowIndex < MAX_ROWS; rowIndex++) {
        for (let colIndex = 0; colIndex < MAX_COLS; colIndex++) {
            const currentCell = cells[rowIndex][colIndex];
            if (currentCell.value === CellValue.bomb) {
                continue;
            }

            let numberOfBombs = 0;
            const {
                topLeftCell,
                topCell,
                topRightCell,
                leftCell,
                rightCell,
                bottomLeftCell,
                bottomCell,
                bottomRightCell,
            } = grabAllAdjacentCells(cells, rowIndex, colIndex);

            if (topLeftCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (topCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (topRightCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (leftCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (rightCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (bottomLeftCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (bottomCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }
            if (bottomRightCell?.value === CellValue.bomb) {
                numberOfBombs++;
            }

            if (numberOfBombs > 0) {
                cells[rowIndex][colIndex] = {
                    ...currentCell,
                    value: numberOfBombs,
                };
            }
        }
    }

    return cells;
};

export const openMultipleCells = (
    cells: CellType[][],
    rowParam: number,
    colParam: number
): CellType[][] => {
    const currentCell = cells[rowParam][colParam];

    if (
        currentCell.state === CellState.visible ||
        currentCell.state === CellState.flagged
    ) {
        return cells;
    }

    let newCells = cells.slice();
    newCells[rowParam][colParam].state = CellState.visible;

    const {
        topLeftCell,
        topCell,
        topRightCell,
        leftCell,
        rightCell,
        bottomLeftCell,
        bottomCell,
        bottomRightCell,
    } = grabAllAdjacentCells(cells, rowParam, colParam);

    if (
        topLeftCell?.state === CellState.open &&
        topLeftCell.value !== CellValue.bomb
    ) {
        if (topLeftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam - 1);
        } else {
            newCells[rowParam - 1][colParam - 1].state = CellState.visible;
        }
    }

    if (topCell?.state === CellState.open && topCell.value !== CellValue.bomb) {
        if (topCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam);
        } else {
            newCells[rowParam - 1][colParam].state = CellState.visible;
        }
    }

    if (
        topRightCell?.state === CellState.open &&
        topRightCell.value !== CellValue.bomb
    ) {
        if (topRightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam + 1);
        } else {
            newCells[rowParam - 1][colParam + 1].state = CellState.visible;
        }
    }

    if (
        leftCell?.state === CellState.open &&
        leftCell.value !== CellValue.bomb
    ) {
        if (leftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam, colParam - 1);
        } else {
            newCells[rowParam][colParam - 1].state = CellState.visible;
        }
    }

    if (
        rightCell?.state === CellState.open &&
        rightCell.value !== CellValue.bomb
    ) {
        if (rightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam, colParam + 1);
        } else {
            newCells[rowParam][colParam + 1].state = CellState.visible;
        }
    }

    if (
        bottomLeftCell?.state === CellState.open &&
        bottomLeftCell.value !== CellValue.bomb
    ) {
        if (bottomLeftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam - 1);
        } else {
            newCells[rowParam + 1][colParam - 1].state = CellState.visible;
        }
    }

    if (
        bottomCell?.state === CellState.open &&
        bottomCell.value !== CellValue.bomb
    ) {
        if (bottomCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam);
        } else {
            newCells[rowParam + 1][colParam].state = CellState.visible;
        }
    }

    if (
        bottomRightCell?.state === CellState.open &&
        bottomRightCell.value !== CellValue.bomb
    ) {
        if (bottomRightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam + 1);
        } else {
            newCells[rowParam + 1][colParam + 1].state = CellState.visible;
        }
    }

    return newCells;
};
