import { StateType } from "../types/state.type";

export interface Action {
    type: string;
}

export function reducer(state: StateType, action: Action): StateType {
    if (action.type === 'toggleForm'){
        return {
            ...state, form: !state.form
        }
    }
    else if (action.type === 'toggleInfo'){
        return {
            ...state, info: !state.info
        }
    }
    else if (action.type === 'toggleExit'){
        return {
            ...state, exit: !state.exit
        }
    }
    else if (action.type === 'countDiary'){
        return {
            ...state, diaryList: state.diaryList
        }
    }
    else if (action.type === 'toggleCalc'){
        return {
            ...state, calc: !state.calc
        }
    }
    return state;
}