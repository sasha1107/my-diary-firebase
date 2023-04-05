import React from 'react';
import { CellState, CellValue } from '../../types/minesweeper.type';
import { CellCont } from './minesweeper.style';
import mine from 'assets/img/minesweeper/mine.png';
import flag from 'assets/img/minesweeper/flag.png';

interface CellProps {
    col: number;
    onClick(rowParam: number, colParam: number): (...args: any[]) => void;
    onContext(rowParam: number, colParam: number): (...args: any[]) => void;
    red?: boolean;
    row: number;
    state: CellState;
    value: CellValue;
}

const Cell: React.FC<CellProps> = ({
    col,
    onClick,
    onContext,
    red,
    row,
    state,
    value,
}) => {
    const renderContent = (): React.ReactNode => {
        if (state === CellState.visible) {
            if (value === CellValue.bomb) {
                return <img src={mine} width={'20px'} />;
            } else if (value === CellValue.none) {
                return null;
            }

            return value;
        } else if (state === CellState.flagged) {
            return <img src={flag} width={'20px'} />;
        }

        return null;
    };

    return (
        <CellCont
            className={`${
                state === CellState.visible ? 'visible' : ''
            } value-${value} ${red ? 'red' : ''}`}
            onClick={onClick(row, col)}
            onContextMenu={onContext(row, col)}
        >
            {renderContent()}
        </CellCont>
    );
};

export default Cell;
