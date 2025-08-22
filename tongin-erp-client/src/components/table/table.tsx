import styled from "styled-components"

const Wrapper = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    overflow-y: scroll;
    
`

const Tb = styled.tbody`
    width: 100%;
`

const Tr = styled.tr<{
    index: number;
}>` 
    width: 100%;
    height: 36px;
    border: 0.1px solid #EEEEEE;
    background-color: ${(props) => props.index % 2 === 1 ? '#FCFCFC' : ''};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Td = styled.td<{
    width?: string;
    tdIndex?: number;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    width: ${(props) => props.width ? props.width : '10%'};
    height: 18px;
    padding: 0px 4px;
    border-left: ${(props) => props.tdIndex === 0 ? '' : '1px solid #EEEEEE'};
`

const StatusBox = styled.div`
    display: flex;
    align-items: center;
`

const StatusCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #08be17;
`
const StatusText = styled.div`
    width: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export default function Table(props: any) {

    const { dataList, tableHeaderList } = props;

    return (<Wrapper>
        <Tb>
            {dataList.map((row: any, index: number) => {
                return (
                    <Tr key={index} index={index}>
                        {tableHeaderList.map((header: any, tdIndex: number) => {
                            return (
                                <Td key={tdIndex} tdIndex={tdIndex} width={header.width}>
                                    {tdIndex === 0 && row.receiptDate}
                                    {tdIndex === 1 && row.clientName}
                                    {tdIndex === 2 && row.contact}
                                    {tdIndex === 3 && row.charger}
                                    {tdIndex === 4 && `${row.branch}(${row.department})`}
                                    {tdIndex === 5 && `${row.address}(${row.zipCode})`}
                                    {tdIndex === 6 && row.productList[0].productName}
                                    {tdIndex === 7 && row.reNum}
                                    {/* {tdIndex === 8 && row.status} */}
                                    {tdIndex === 8 &&
                                        <StatusBox>
                                            <StatusCircle></StatusCircle>
                                            <StatusText>{row.status}</StatusText>
                                        </StatusBox>
                                    }
                                </Td>
                            )
                        })}
                    </Tr>
                )
            })}
            {/* {tableHeaderList.map((item: any, index: number) => {
                return (
                    <TitleBox key={index} index={index} width={item.width}>{item.title}</TitleBox>
                )
            })} */}
        </Tb>
    </Wrapper>)
}