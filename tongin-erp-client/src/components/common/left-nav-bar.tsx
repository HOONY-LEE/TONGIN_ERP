import { useState } from "react"
import styled from "styled-components"
import Icon from "../icon"
import { menuCategory } from "../../data/ui"
import MenuSet from "../lnb/menu-set"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.div`
    height: 100vh;
    background-color: #FCFCFC;
    border-right: 1px solid #EEEEEE;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-width: 200px;
`
const LogoArea = styled.div`
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const MenuArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 20px;
    gap: 6px;
`
const LogoBox = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`
const ExpandButtonBox = styled.div`
    min-width: 30px;
    min-height: 30px;
    border-radius: 6px;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`

const Logo = styled.img`
`

const Wrapper2 = styled.div`
    height: 100vh;
    background-color: #FCFCFC;
    border-right: 1px solid #EEEEEE;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-width: 50px;
`
const MenuArea2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
    gap: 6px;
`
const MenuLine = styled.div<{
    $isExpanded: boolean;
}>`
    width: ${(props) => props.$isExpanded ? '160px' : '40px'};
    height: 1px;
    border-bottom: 1px solid #EEEEEE;
`

export default function LeftNavBar() {

    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [categoryData, setCategoryData] = useState(menuCategory);
    const navigate = useNavigate();

    // LNB 열기/닫기
    const handleClickExpand = () => {
        setIsExpanded(!isExpanded)
    }

    // 홈화면으로 이동
    const moveToHome = () => {
        navigate('/');
    }

    return (
        <>
            {/* LNB 펼쳐졌을 때 */}
            {isExpanded &&
                <Wrapper>
                    <LogoArea>
                        <LogoBox>
                            <Logo
                                src={`/logo/tongin_orange.png`}
                                alt={`logo`}
                                width={100}
                                onClick={moveToHome}
                            ></Logo>
                        </LogoBox>
                        <ExpandButtonBox onClick={handleClickExpand}>
                            <Icon src={`/icons/arrow_left_gray.svg`} alt="icon" width="16px"></Icon>
                        </ExpandButtonBox>
                    </LogoArea>
                    <MenuArea>
                        {/* <MenuSet categoryData={categoryData.home} /> */}
                        {/* <MenuLine /> */}
                        <MenuSet categoryData={categoryData.order} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.product} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.schedule} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.hr} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.etc} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                    </MenuArea>
                </Wrapper>
            }
            {/* LNB 축소됐을 때 */}
            {!isExpanded &&
                <Wrapper2>
                    <LogoArea>
                        <ExpandButtonBox onClick={handleClickExpand}>
                            <Icon src={`/icons/arrow_right_gray.svg`} alt="icon" width="16px"></Icon>
                        </ExpandButtonBox>
                    </LogoArea>
                    <MenuArea2>
                        <MenuSet categoryData={categoryData.order} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.product} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.schedule} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.hr} isExpanded={isExpanded} />
                        <MenuLine $isExpanded={isExpanded} />
                        <MenuSet categoryData={categoryData.etc} isExpanded={isExpanded} />
                    </MenuArea2>
                </Wrapper2>
            }
        </>
    )
}