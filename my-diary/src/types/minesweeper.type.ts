export enum CellValue {
    none,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    bomb,
}

export enum CellState {
    open,
    visible,
    flagged,
}

export type CellType = { value: CellValue; state: CellState; red?: boolean };

export enum Face {
    smile = 'face/yay.png',
    oh = 'face/oh.png',
    lost = 'face/nay.png',
    won = 'face/win.png',
}
