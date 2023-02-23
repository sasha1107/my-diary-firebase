import React from 'react'
import DesktopIconView from './DesktopIconView';

interface Props {
    func: () => void;
    src: string;
    txt: string;
}

export interface PropsType extends Props{
    handleDbClick: (func: () => void, e: React.MouseEvent<Element, MouseEvent>) => void;
}

export default function DesktopIcon({func, src, txt} : Props) {
    const handleDbClick = (func: () => void, e: React.MouseEvent<Element, MouseEvent>) => {
        // 더블클릭 했다면
        if (e.detail === 2) func();
    };

    const props: PropsType= {
        func,
        src,
        txt,
        handleDbClick
    }

    return (
        <DesktopIconView {...props}/>
    )
}