import React from 'react'
import styled from 'styled-components'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import { Row, Column } from 'simple-flexbox'

const MainContainer = styled.div`
background: #ECF0F7 0% 0% no-repeat padding-box;
opacity: 1;
width: 100%;
height: 700px;
`

const HeaderContainer = styled.div`
margin: 40px;
// width: 100%;
`

const Heading = styled.span`
font-size: 20px;
margin: 40px 0px 0px 8px;
`
const AddNetworkButton = styled.button`
background: #3163F0 0% 0% no-repeat padding-box;
opacity: 1;
width: 136px;
height: 34px;
border: none;
color: #ffffff;
align-items: right;
border-radius: 4px;
position: absolute;
right: 51px;
`

const Card = styled.div`
background-color: #ffffff;
border-radius: 4px;
height: 400px;
margin:50px;
`

function NetworkList() {
    return (
        <>
            <Column>
                <Header />
                <Row>
                    <Sidebar />
                    <MainContainer>
                        <HeaderContainer>
                            <Heading><b>Networks</b></Heading>
                            <AddNetworkButton>+ Add Network</AddNetworkButton>
                        </HeaderContainer>
                        <Card>

                        </Card>
                    </MainContainer>
                </Row>
            </Column>
        </>
    )
}

export default NetworkList