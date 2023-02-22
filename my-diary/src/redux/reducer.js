export function reducer(state, action){
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
            ...state, diaryList: state.count
        }
    }
    return state;
}