import React from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function Historys() {
  return (
    <MainContainer>
      <DetailBox>
        <NewDiv>
          <RowContainer>
            <ColumnOne>Alert Type</ColumnOne>
            <ColumnOne>Contract</ColumnOne>
            <ColumnOne>Tx Hash</ColumnOne>
            <ColumnOne>Network</ColumnOne>
            <ColumnOne>When</ColumnOne>
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
      {/* </TableContainer> */}
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
      width: 10px;
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(56, 56, 231);
      border-radius: 15px;
    }
  }
`;

const NewDiv = styled.div`
  padding: 0.738rem;
  border-bottom: 0.063rem solid #e3e7eb;

  @media (min-width: 300px) and (max-width: 768px) {
  }
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 300px) and (max-width: 768px) {
    // overflow: scroll;
  }
`;
const Div = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
  @media (min-width: 300px) and (max-width: 768px) {
  }
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 54px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 84px;
  }
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: 32px;
    margin-left: 5px;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  color: #191919;
  font-size: 0.875rem;
  // font-weight: 600;
  width: 100%;
  max-width: 18.75rem;
`;
