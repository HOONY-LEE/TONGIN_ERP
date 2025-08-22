import styled from "styled-components"
import TableHeader from "../components/table/table-header"
import Table from "../components/table/table"
import { useState } from "react"
import { orderData } from "../data/data"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 30px;
    gap: 10px;
`

const HeaderArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
`

const TableArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    gap: 4px;
`

const LeftArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;
    font-size: 14px;
    `
const RightArea = styled.div`
    display: flex;
    justify-content: end;
    height: 100%;

    `

const DateInputArea = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 100%;
        border-radius: 4px;
        border: 1px solid gray;
    `

const SearchBox = styled.div`
        display: flex;
        width: 400px;
        height: 100%;
        border-radius: 4px;
        border: 1px solid gray;
        padding: 0px 10px;
    `

const SearchInput = styled.input`
    border: none;
    outline: none;
    background-color: none;
    width: 100%;
`

const SearchButton = styled.button`
    outline: none;
    border: none;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #272727;
    color: white;
    height: 100%;
    &:hover {
        cursor: pointer;
    }
`

// 접수목록 페이지
export default function Order() {

    const [orderList, setOrderList] = useState(orderData.data.orderList)

    const tableHeaderList = [
        { id: 1, title: '접수일', width: '10%' },
        { id: 2, title: '고객명', width: '10%' },
        { id: 3, title: '연락처', width: '10%' },
        { id: 4, title: '담당자', width: '10%' },
        { id: 5, title: '소속', width: '12%' },
        { id: 6, title: '주소', width: '18%' },
        { id: 7, title: '상품목록', width: '12%' },
        { id: 8, title: '접수번호', width: '10%' },
        { id: 9, title: '상태', width: '8%' },
    ]

    return (
        <Wrapper>
            <InnerWrapper>
                <HeaderArea>
                    <LeftArea>
                        <DateInputArea>2025-03-01</DateInputArea>
                        <div>-</div>
                        <DateInputArea>2025-04-31</DateInputArea>
                        <SearchBox>
                            <SearchInput placeholder="고객명 또는 연락처로 검색"></SearchInput>
                        </SearchBox>
                        <SearchButton>검색</SearchButton>
                    </LeftArea>
                    <RightArea></RightArea>
                </HeaderArea>
                <TableArea>
                    <TableHeader tableHeaderList={tableHeaderList}></TableHeader>
                    <Table
                        dataList={orderList}
                        tableHeaderList={tableHeaderList}></Table>
                </TableArea>
            </InnerWrapper>
        </Wrapper>
    )
}