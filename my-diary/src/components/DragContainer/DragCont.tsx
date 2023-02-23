import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function DragCont({ children }: {children : React.ReactChild;}) {
  const logoPos = useSpring({x:0, y:0});
  const bindLogoPos = useDrag((params)=>{
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  return (
    <animated.div {...bindLogoPos()} style={{
          x: logoPos.x,
          y: logoPos.y
      }}>
      {children}
    </animated.div>
  )
}
