import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import Header from "../components/common/header"
import LeftNavBar from "../components/common/left-nav-bar"
import Notice from './notice';
import Order from './order';
import Deposit from './deposit';
import Customer from './customer';
import Product from './product';
import Option from './option';
import Schedule from './schedule';
import Task from './task';
import Workflow from './workflow';
import Organization from './organization';
import Employee from './employee';
import Permission from './permission';
import Statitstics from './statistics';
import Inventory from './inventory';
import Client from './client';


const Wrapper = styled.div`
    display: flex;
    width: 100vw;
`

const SideNavArea = styled.div`
    height: 100vh;
    background-color: #FCFCFC;
    border-right: 1px solid #EEEEEE;
    position: sticky;

    @media (max-width: 1000px) {
        min-width: 60px;
    }
    
    @media (min-width: 1001px) {
        min-width: 200px;
    }
`

const RightArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100vh;
    background-color: white;
`

const ContentsArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default function Home() {

    return (
        <Wrapper>
            {/* <Router> */}
            {/* <SideNavArea></SideNavArea> */}
            <LeftNavBar />
            <RightArea>
                <Header />
                <ContentsArea>
                    <Routes>
                        <Route path="/" element={<Notice />}></Route>
                        <Route path="/order" element={<Order />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/option" element={<Option />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/task" element={<Task />} />
                        <Route path="/workflow" element={<Workflow />} />
                        <Route path="/organization" element={<Organization />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/permission" element={<Permission />} />
                        <Route path="/statistics" element={<Statitstics />} />
                        <Route path="/client" element={<Client />} />
                        <Route path="/inventory" element={<Inventory />} />
                    </Routes>
                </ContentsArea>
            </RightArea>
            {/* </Router> */}
        </Wrapper>
    )
}