import React from 'react'
import DragCont from '../DragContainer/DragCont'
import * as S from "./calculator.style";
import { useDispatch } from 'react-redux';
import { PropsType } from './Calculator';

export default function CalculatorView({
    deleteChar,
    appendNumber,
    selectOperation,
    compute,
    clearAll,
    previousOperand,
    currentOperand,
}: PropsType) {
    const dispatch = useDispatch();

    return (
        <DragCont>
            <S.CalcCont>
                <S.CalcTit>계산기
                    <S.CloseBtn
                    onClick={()=> {
                        dispatch({type: "toggleCalc"})
                    }}>x</S.CloseBtn>
                </S.CalcTit>
                <S.CalcBody>
                <S.Output>
                    <S.PrevOperand>{previousOperand}</S.PrevOperand>
                    <S.CurrOperand>{currentOperand}</S.CurrOperand>
                </S.Output>

                <S.ButtonCont>
                    <S.Button className="span-two ac" onClick={clearAll}>
                    AC
                    </S.Button>
                    <S.Button className="operator" onClick={deleteChar}>DEL</S.Button>
                    <S.Button className="operator" onClick={() => selectOperation("÷")}>÷</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("7")}>7</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("8")}>8</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("9")}>9</S.Button>
                    <S.Button className="operator" onClick={() => selectOperation("x")}>x</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("4")}>4</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("5")}>5</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("6")}>6</S.Button>
                    <S.Button className="operator" onClick={() => selectOperation("-")}>-</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("1")}>1</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("2")}>2</S.Button>
                    <S.Button className="num" onClick={() => appendNumber("3")}>3</S.Button>
                    <S.Button className="operator" onClick={() => selectOperation("+")}>+</S.Button>
                    <S.Button className="span-two num" onClick={() => appendNumber("0")}>
                    0
                    </S.Button>
                    <S.Button className="num" onClick={() => appendNumber(".")}>.</S.Button>
                    <S.Button className="operator" onClick={compute}>=</S.Button>
                </S.ButtonCont>
                </S.CalcBody>
            </S.CalcCont>
        </DragCont>
    )
}
