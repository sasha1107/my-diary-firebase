import React from 'react'
import * as S from "./visitor.style"
import { PropsType } from './Visitor'

export default function VisitorView({
    guestbookEntries,
    handleSubmit,
    nickname,
    setNickname,
    message,
    setMessage
}: PropsType) {
    
    return (
        <S.VisitorCont>
            <S.VisitorTit>
                방명록
                <S.CloseBtn>x</S.CloseBtn>
            </S.VisitorTit>
            <S.VisitorBody>
            <S.GuestbookEntries>
            {guestbookEntries.map((entry) => (
                <S.MsgItem key={entry.timestamp}>
                    <div>
                        <S.Nickname>{entry.nickname}</S.Nickname>
                        <S.Message>{entry.message}</S.Message>
                    </div>
                    <S.TimeStamp>
                        {new Date(entry.timestamp).toLocaleString()}
                    </S.TimeStamp>
                </S.MsgItem>
            ))}
            </S.GuestbookEntries>
            <S.GuestBookForm onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">닉네임:</label>
                        <input
                        type="text"
                        name="name"
                        value={nickname}
                        required
                        onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">내용:</label>
                        <textarea
                        name="message"
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <S.SubmitBtn type="submit">Submit</S.SubmitBtn>
            </S.GuestBookForm>
            </S.VisitorBody>
        </S.VisitorCont>
    )
}
