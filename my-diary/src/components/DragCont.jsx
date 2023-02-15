import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function DragCont(props) {
  const logoPos = useSpring({x:0, y:0});
  const bindLogoPos = useDrag((params)=>{
    /*setlogoPos({
      x: params.offset[0],
      y: params.offset[1],
    })*/
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  return (
    <animated.div {...bindLogoPos()} style={{
          /*position:"relative",
          top: logoPos.y,
          left: logoPos.x*/
          x: logoPos.x,
          y: logoPos.y
      }}>
      {props.children}
    </animated.div>
  )
}
