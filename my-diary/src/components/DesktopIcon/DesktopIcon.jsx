import React from 'react'
import DesktopIconView from './DesktopIconView';

export default function DesktopIcon({func, src, txt}) {
    const handleDbClick = (func, e) => {
        // 더블클릭 했다면
        if (e.detail === 2) func();
    };

    const props = {
        func,
        src,
        txt,
        handleDbClick
    }

    return (
        <DesktopIconView {...props}/>
    )
}