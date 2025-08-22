import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
    background-color: white;
    border-bottom: 1px solid #EEEEEE;
    position: sticky;
`

const LeftArea = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`
const RightArea = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
    height: 100%;
    padding-right: 40px;
    gap: 10px;
`

const CurrentTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 30px;
    font-size: 20px;
    font-weight: 700;
`

const UserInfo = styled.p`
    @media (max-width: 1000px) {
        display: none;
    }
    @media (min-width: 1001px) {
        display: show;
    }
`

const UserProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    min-height: 24px;
    border-radius: 100%;
    background-color: #EEEEEE;
`
const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function Header() {

    const location = useLocation();
    const [currentTitle, setCurrentTitle] = useState('홈')



    useEffect(() => {
        switch (location.pathname.substring(1)) {
            case '':
                setCurrentTitle('홈');
                break;
            case 'order':
                setCurrentTitle('접수목록');
                break;
            case 'deposit':
                setCurrentTitle('입금현황');
                break;
            case 'customer':
                setCurrentTitle('고객A/S');
                break;
            case 'product':
                setCurrentTitle('상품관리');
                break;
            case 'option':
                setCurrentTitle('옵션관리');
                break;
            case 'schedule':
                setCurrentTitle('일정관리');
                break;
            case 'task':
                setCurrentTitle('일감관리');
                break;
            case 'workflow':
                setCurrentTitle('워크플로우');
                break;
            case 'organization':
                setCurrentTitle('조직관리');
                break;
            case 'employee':
                setCurrentTitle('직원관리');
                break;
            case 'permission':
                setCurrentTitle('권한관리');
                break;
            case 'statistics':
                setCurrentTitle('통계');
                break;
            case 'client':
                setCurrentTitle('거래처');
                break;
            case 'inventory':
                setCurrentTitle('재고관리');
                break;
            default:
                setCurrentTitle('')
                break;
        }
    }, [location])



    return (
        <Wrapper>
            <LeftArea>
                <CurrentTitle>{currentTitle}</CurrentTitle>
                {/* <div>{currentTitle}</div> */}
            </LeftArea>
            <RightArea>
                <UserInfo>이성훈님, 환영합니다.</UserInfo>
                <UserProfile>
                    <ProfileImage src="/icons/profile_gray.svg"></ProfileImage>
                </UserProfile>
            </RightArea>
        </Wrapper>
    )
}