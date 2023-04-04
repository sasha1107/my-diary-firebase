import { legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer';

const initialState = {
    form: true,
    info: false,
    exit: false,
    calc: false,
    diaryList: 0,
}

export const store = createStore(reducer, initialState)