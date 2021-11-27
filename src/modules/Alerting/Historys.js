import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function Historys() {
  return (
    <div>
      <MainContainer>
        <Div>
          <Row>
            <ColumnOne>Alert Type</ColumnOne>
            <ColumnOne>Contracts</ColumnOne>
            <ColumnOne>Tx Hash</ColumnOne>
            <ColumnOne>Network</ColumnOne>
            <ColumnOne>When</ColumnOne>
          </Row>
        </Div>
        <Div>
          <Row>
            <ColumnOne>Sucessfull transaction</ColumnOne>
            <ColumnOne>App_Transactions_Validator</ColumnOne>
            <ColumnOne>0xndfahkk57..fj9</ColumnOne>
            <ColumnOne>XDC Mainnet</ColumnOne>
            <ColumnOne>02.2.2022 12:02</ColumnOne>
          </Row>
        </Div>
        <Div>
          <Row>
            <ColumnOne>Sucessfull transaction</ColumnOne>
            <ColumnOne>App_Transactions_Validator</ColumnOne>
            <ColumnOne>0xndfahkk57..fj9</ColumnOne>
            <ColumnOne>XDC Mainnet</ColumnOne>
            <ColumnOne>02.2.2022 12:02</ColumnOne>
          </Row>
        </Div>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: auto;
`;

const Div = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 300px;
`;