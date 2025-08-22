import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default function Notice(props: any) {

    return (
        <Wrapper>
            안녕하세요. 통인전산시스템에 오신걸 환영합니다.
        </Wrapper>
    )
}