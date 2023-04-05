import React, { useEffect, useState } from 'react';
import { MAX_COLS, MAX_ROWS } from '../../constants';
import {
    CellType,
    CellState,
    CellValue,
    Face,
} from '../../types/minesweeper.type';
import { generateCells, openMultipleCells } from '../../utils/minesweeper';
import Cell from './Cell';
import * as S from './minesweeper.style';
import DragCont from '../DragContainer/DragCont';
import { useDispatch } from 'react-redux';

interface NumberDisplayProps {
    value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
    return (
        <S.NumDisplay>
            {value < 0
                ? `-${Math.abs(value).toString().padStart(2, '0')}`
                : value.toString().padStart(3, '0')}
        </S.NumDisplay>
    );
};

export default function Minesweeper() {
    const [cells, setCells] = useState<CellType[][]>(generateCells());
    const [face, setFace] = useState<Face>(Face.smile);
    const [time, setTime] = useState<number>(0);
    const [live, setLive] = useState<boolean>(false);
    const [bombCounter, setBombCounter] = useState<number>(10);
    const [hasLost, setHasLost] = useState<boolean>(false);
    const [hasWon, setHasWon] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleMouseDown = (): void => {
            setFace(Face.oh);
        };

        const handleMouseUp = (): void => {
            setFace(Face.smile);
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (live && time < 999) {
            const timer = setInterval(() => {
                setTime(time + 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [live, time]);

    useEffect(() => {
        if (hasLost) {
            setLive(false);
            setFace(Face.lost);
        }
    }, [hasLost]);

    useEffect(() => {
        if (hasWon) {
            setLive(false);
            setFace(Face.won);
        }
    }, [hasWon]);

    const handleCellClick =
        (rowParam: number, colParam: number) => (): void => {
            let newCells = cells.slice();

            // start the game
            if (!live) {
                let isABomb =
                    newCells[rowParam][colParam].value === CellValue.bomb;
                while (isABomb) {
                    newCells = generateCells();
                    if (newCells[rowParam][colParam].value !== CellValue.bomb) {
                        isABomb = false;
                        break;
                    }
                }
                setLive(true);
            }

            const currentCell = newCells[rowParam][colParam];

            if (
                [CellState.flagged, CellState.visible].includes(
                    currentCell.state
                )
            ) {
                return;
            }

            if (currentCell.value === CellValue.bomb) {
                setHasLost(true);
                newCells[rowParam][colParam].red = true;
                newCells = showAllBombs();
                setCells(newCells);
                return;
            } else if (currentCell.value === CellValue.none) {
                newCells = openMultipleCells(newCells, rowParam, colParam);
            } else {
                newCells[rowParam][colParam].state = CellState.visible;
            }

            // Check to see if you have won
            let safeOpenCellsExists = false;
            for (let row = 0; row < MAX_ROWS; row++) {
                for (let col = 0; col < MAX_COLS; col++) {
                    const currentCell = newCells[row][col];

                    if (
                        currentCell.value !== CellValue.bomb &&
                        currentCell.state === CellState.open
                    ) {
                        safeOpenCellsExists = true;
                        break;
                    }
                }
            }

            if (!safeOpenCellsExists) {
                newCells = newCells.map((row) =>
                    row.map((cell) => {
                        if (cell.value === CellValue.bomb) {
                            return {
                                ...cell,
                                state: CellState.flagged,
                            };
                        }
                        return cell;
                    })
                );
                setHasWon(true);
            }

            setCells(newCells);
        };

    const handleCellContext =
        (rowParam: number, colParam: number) =>
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
            e.preventDefault();

            if (!live) {
                return;
            }

            const currentCells = cells.slice();
            const currentCell = cells[rowParam][colParam];

            if (currentCell.state === CellState.visible) {
                return;
            } else if (currentCell.state === CellState.open) {
                currentCells[rowParam][colParam].state = CellState.flagged;
                setCells(currentCells);
                setBombCounter(bombCounter - 1);
            } else if (currentCell.state === CellState.flagged) {
                currentCells[rowParam][colParam].state = CellState.open;
                setCells(currentCells);
                setBombCounter(bombCounter + 1);
            }
        };

    const handleFaceClick = (): void => {
        setLive(false);
        setTime(0);
        setCells(generateCells());
        setHasLost(false);
        setHasWon(false);
    };

    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
                <Cell
                    col={colIndex}
                    key={`${rowIndex}-${colIndex}`}
                    onClick={handleCellClick}
                    onContext={handleCellContext}
                    red={cell.red}
                    row={rowIndex}
                    state={cell.state}
                    value={cell.value}
                />
            ))
        );
    };

    const showAllBombs = (): CellType[][] => {
        const currentCells = cells.slice();
        return currentCells.map((row) =>
            row.map((cell) => {
                if (cell.value === CellValue.bomb) {
                    return {
                        ...cell,
                        state: CellState.visible,
                    };
                }

                return cell;
            })
        );
    };

    return (
        <DragCont>
            <S.Cont>
                <S.Tit>
                    지뢰찾기
                    <S.CloseBtn
                        onClick={() => {
                            dispatch({ type: 'toggleGame' });
                        }}
                    >
                        x
                    </S.CloseBtn>
                </S.Tit>
                <S.Body>
                    <S.Header>
                        <NumberDisplay value={bombCounter} />
                        <div className='Face' onClick={handleFaceClick}>
                            <span role='img' aria-label='face'>
                                {face}
                            </span>
                        </div>
                        <NumberDisplay value={time} />
                    </S.Header>
                    <S.Board className='Body'>{renderCells()}</S.Board>
                </S.Body>
            </S.Cont>
        </DragCont>
    );
}
