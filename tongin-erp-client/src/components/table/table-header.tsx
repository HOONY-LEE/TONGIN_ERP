import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    border-radius: 4px;
    width: 100%;
    height: 32px;
`
const TitleBox = styled.div<{
    width?: string;
    index?: number;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    width: ${(props) => props.width ? props.width : '10%'};
    height: 14px;
    padding: 0px 4px;
    border-left: ${(props) => props.index === 0 ? '' : '1px solid gray'};
`

export default function TableHeader(props: any) {

    const { tableHeaderList } = props;

    return (<>
        <Wrapper>
            {tableHeaderList.map((item: any, index: number) => {
                return (
                    <TitleBox key={index} index={index} width={item.width}>{item.title}</TitleBox>
                )
            })}
        </Wrapper>
    </>)
}