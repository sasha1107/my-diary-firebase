import messageArr from "../assets/message.json"

export const useRandomMsg = () => {
    const randInt = ~~(Math.random() * messageArr.length);
    return messageArr[randInt].message;
}