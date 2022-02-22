import React from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";

export default function Historys() {
  return (
    <MainContainer>
      <DetailBox>
        <NewDiv>
          <RowContainer>
            <ColumnOne>
              Alert Type
              <Tooltip disableFocusListener title="Transaction status">
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
            <ContractCol>
              Contract
              <Tooltip disableFocusListener title="Name of the smart contract">
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
              </ContractCol>
            </ColumnOne>
            <ColumnOne>
            <TxCol>
              Tx Hash
              <Tooltip
                disableFocusListener
                title="Unique transaction identifier, also known as the Transaction ID"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
              </TxCol>
            </ColumnOne>
            <ColumnOne>
            <NetworkCol>
              Network
              <Tooltip
                disableFocusListener
                title="The executing blockchain network"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
              </NetworkCol>
            </ColumnOne>
            <ColumnOne>
            <WhenCol>
              When
              <Tooltip
                disableFocusListener
                title="Date and time of transaction execution"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
              </WhenCol>
            </ColumnOne>
          </RowContainer>
        </NewDiv>
        <Div>
          <RowData>
            <ColumnTwo>Sucessfull transaction</ColumnTwo>
            <ColumnTwo>App_Transactions</ColumnTwo>
            <ColumnTwo>0xndfahkk57..fj9</ColumnTwo>
            <ColumnTwo>XDC Mainnet</ColumnTwo>
            <ColumnTwo>02.2.2022 12:02</ColumnTwo>
          </RowData>
        </Div>
        <Div>
          <RowData>
            <ColumnTwo>Sucessfull transaction</ColumnTwo>
            <ColumnTwo>App_Transactions</ColumnTwo>
            <ColumnTwo>0xndfahkk57..fj9</ColumnTwo>
            <ColumnTwo>XDC Mainnet</ColumnTwo>
            <ColumnTwo>02.2.2022 12:02</ColumnTwo>
          </RowData>
        </Div>
      </DetailBox>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: 15.625rem;
  overflow-y: hidden;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    ::-webkit-scrollbar {
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
      border-radius: 15px;
      /* background: #00A58C; */
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3163f0;
      border-radius: 15px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;

const NewDiv = styled.div`
  padding: 0.738rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 54px;
  }
  @media (min-width: 820px) and (max-width: 1200px) {
    column-gap: 72px !important;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    column-gap: 97px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 77px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    column-gap: 120px;
  }
  @media (min-width: 820px) and (max-width: 1200px) {
    column-gap: 120px !important;
  }

`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.313rem;
  white-space: nowrap;
`;
const ColumnOne = styled.div`
  display: flex;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: 18px;
    margin-left: 5px;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  color: #191919;
  font-size: 0.875rem;
  width: 100%;
  max-width: 18.75rem;
`;

const ContractCol = styled.div`
@media (min-width: 768px) and (max-width: 1128px) {
  margin-left: 13px;
}

`;

const TxCol = styled.div`
@media (min-width: 768px) and (max-width: 1128px) {
  margin-left: -7px;
}

`;

const NetworkCol = styled.div`
@media (min-width: 768px) and (max-width: 1128px) {
  margin-left: -8px;
}

`;



const WhenCol = styled.div`
@media (min-width: 768px) and (max-width: 1128px) {
  margin-left: -33px;
}

`;
