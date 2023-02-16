import { useFirestore } from '../../hooks/useFirestore'
import DragCont from '../../components/DragCont';
import * as S from "./diaryList.style";


// diaries는 props 로 전달되기 때문에 원래는 props.diaries 로 접근해야 하지만 비구조화할당을 이용하면 깔끔합니다.

export default function DiaryList({ diaries }) {
    const {deleteDocument} = useFirestore("myDiary")

    return (
        <>
            {/* jsx를 바로 반영하기 위해 map을 사용하겠습니다. map은 새로운 배열을 반환하는 순환문입니다.
            https://ko.reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
            */}
            {/* jsx 리스트에는 key 프로퍼티가 있어야합니다. Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  https://ko.reactjs.org/docs/lists-and-keys.html */}
            
            {diaries.map((item) => {
                // console.log("item", item.createdTime.toDate())
                
                return (
                    <DragCont key={item.id}>
                    <S.DiaryLi>
                        <S.LiHeader>
                        <S.DiaryTit>{item.title}</S.DiaryTit>
                        <S.CloseBtn onClick={() => deleteDocument(item.id)}>x</S.CloseBtn>
                        </S.LiHeader>
                        <S.LiContent>
                            <S.TimeStamp>{item.createdTime.toDate().toString().split(' ').splice(0, 5).join(' ')}</S.TimeStamp>
                            <S.DiaryTxt>{item.text}</S.DiaryTxt>
                        </S.LiContent>
                    </S.DiaryLi>
                    </DragCont>
                )
            })}
        </>
    )
}