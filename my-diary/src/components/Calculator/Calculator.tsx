import React, { useState } from "react";
import CalculatorView from "./CalculatorView";

export interface PropsType {
    deleteChar: () => void;
    appendNumber: (num: string)=> void;
    selectOperation: (op: string)=> void;
    compute: () => void;
    clearAll:() => void;
    previousOperand:string;
    currentOperand:string;
}
function Calculator() {
  const [previousOperand, setPreviousOperand] = useState<string>("");
  const [currentOperand, setCurrentOperand] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");

  // 현재 입력된 숫자나 연산자의 마지막 글자를 삭제합니다.
  const deleteChar = (): void => {
    if (currentOperand.length === 1){
      setCurrentOperand("0"); 
      return; 
    }
    setCurrentOperand((prev) => prev.slice(0, -1));
  };

  // 현재 입력된 숫자에 새로운 숫자를 추가합니다.
  const appendNumber = (num: string): void => {
    // 입력된 문자열이 "."인 경우, 이미 "."이 입력되어 있는지 확인하고 중복 입력을 방지합니다.
  if (num === "." && currentOperand.includes(".")) {
    return;
  }

  // 입력된 문자열이 "0"이면서, 현재 입력된 숫자가 "0"일 경우 아무 작업도 하지 않습니다.
  if (num === "0" && currentOperand === "0") {
    return;
  }

  // 이전 결과 값이 존재하지 않을 경우, 현재 입력된 숫자를 이전 결과 값으로 설정합니다.
  if (previousOperand === "") {
    setPreviousOperand(currentOperand);
    setCurrentOperand(num);
    return;
  }
  // 연산자를 클릭한 후 다음 숫자를 누를 때 앞에 '0'이 추가되지 않도록 합니다.
  if (currentOperand === "0" && num !== ".") {
    setCurrentOperand(num);
    return;
  }

  // 이전 결과 값이 존재하는 경우, 현재 입력된 숫자를 현재 입력된 피연산자로 설정합니다.
  setCurrentOperand(currentOperand + num);
  };

  // 선택한 연산자를 저장하고, 현재 입력된 숫자를 이전 숫자로 옮깁니다.
  const selectOperation = (op: string): void => {
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("0");
  };

  // 현재 입력된 숫자와 이전 숫자를 계산합니다.
  const compute = (): void => {
    let result: number;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(result.toString());
    setPreviousOperand("");
    setOperation("");
  };

  // 모든 값을 초기화합니다.
  const clearAll = (): void => {
    setCurrentOperand("0");
    setPreviousOperand("");
    setOperation("");
  };
  

  const props = {
    deleteChar,
    appendNumber,
    selectOperation,
    compute,
    clearAll,
    previousOperand,
    currentOperand,
  }
  return (
    <CalculatorView {...props}/>
  );
}

export default Calculator;
