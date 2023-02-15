import React from 'react'
import Footer from '../../components/Footer'
import * as S from "./loading.style"

export default function Loading() {
    return (
        <S.TxtCont>
            <S.LoadingTxt>
                Loading . . .
            </S.LoadingTxt>
            <Footer/>
        </S.TxtCont>
    )
}
