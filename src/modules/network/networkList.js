import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
background: #ECF0F7 0% 0% no-repeat padding-box;
opacity: 1;
width: 100%;
height: 750px;
`

const Heading = styled.span`
font-size: 20px;
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
`

const Card = styled.div`
background-color: #ffffff;
border-radius: 4px;
width: 100%;
height: 400px;
padding:40px;
`

function NetworkList() {
    return (
        <MainContainer>
            <Heading>Network</Heading>
            <AddNetworkButton>+ Add Network</AddNetworkButton>
            <Card>

            </Card>
        </MainContainer>
    )
}

export default NetworkList