import styled from "styled-components";
import Icon from "../icon";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from "../../pages/home";


const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 160px;
        gap: 4px;
`

const Wrapper2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        gap: 4px;
`


const MenuBox = styled.div<{
    $isActive: boolean;
}>`
    width: 140px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${(props) => props.$isActive ? '#FCEFE8' : ''};
    color: ${(props) => props.$isActive ? '#FF7F3B' : ''};
    font-weight: ${(props) => props.$isActive ? '600' : '400'};
    border-radius:  8px;
    padding: 12px 10px;
    gap: 8px;

    &:hover {
        cursor: pointer;
        background-color: #EEEEEE;
    }
`

const MenuBox2 = styled.div<{
    $isActive: boolean;
}>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$isActive ? '#FCEFE8' : ''};
    color: ${(props) => props.$isActive ? '#FF7F3B' : ''};
    font-weight: ${(props) => props.$isActive ? '600' : '400'};
    border-radius:  6px;
    gap: 8px;

    &:hover {
        cursor: pointer;
        background-color: #EEEEEE;
    }
`

export default function MenuSet(props: any) {

    const { categoryData, isExpanded } = props;
    const location = useLocation();
    const navigate = useNavigate();


    const moveToPage = (url: string) => {
        navigate(url)
    }

    return (
        <>
            {isExpanded &&
                <Wrapper>
                    {categoryData.menuList.map((menu: any, index: number) => {

                        // url의 pathname과 해당 메뉴의 route이름을 비교하여 현재 선택된 메뉴인지 판별하는 flag
                        const isActive = location.pathname === menu.route;

                        return (
                            <MenuBox key={index} $isActive={isActive} onClick={() => moveToPage(menu.route)}>
                                <Icon src={`/icons${menu.route}_${isActive ? 'orange' : 'gray'}.svg`} width="20px"></Icon>
                                {menu.title}
                            </MenuBox>
                        )
                    })}
                </Wrapper>
            }
            {!isExpanded &&
                <Wrapper2>
                    {categoryData.menuList.map((menu: any, index: number) => {

                        // url의 pathname과 해당 메뉴의 route이름을 비교하여 현재 선택된 메뉴인지 판별하는 flag
                        const isActive = location.pathname === menu.route;

                        return (
                            <MenuBox2 key={index} $isActive={isActive} onClick={() => moveToPage(menu.route)}>
                                <Icon src={`/icons${menu.route}_${isActive ? 'orange' : 'gray'}.svg`} width="20px"></Icon>
                            </MenuBox2>
                        )
                    })}
                </Wrapper2>
            }
        </>
    )
}