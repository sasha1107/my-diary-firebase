import React from 'react';
import { CellState, CellValue } from '../../types/minesweeper.type';
import { CellCont } from './minesweeper.style';

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
                return (
                    <span role='img' aria-label='bomb'>
                        💣
                    </span>
                );
            } else if (value === CellValue.none) {
                return null;
            }

            return value;
        } else if (state === CellState.flagged) {
            return (
                <span role='img' aria-label='flag'>
                    🚩
                </span>
            );
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
