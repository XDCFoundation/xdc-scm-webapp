import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Column, Row } from "simple-flexbox";
import TableComponent from "../../common/components/TableComponent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LetsGetStarted from "../Popup/letsGetStartedPopUp";
import Settings from "../Popup/settings";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function TransactionList() {
  useEffect(() => {
    // code to run on component mount
    // setstate();
  }, []);
  const [state, setState] = useState(true);
  const [open, isOpen] = useState(false);
  const handleClickOpen = () => {
    isOpen(true);
  };
  const handleClose = () => {
    isOpen(false);
  };
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  React.useEffect(() => {
    let address = [
      {
        txn: "0xcad1b93a…f617",
        status: "Success",
        function: "Transfer",
        contracts: "App_Transactions",
        from: "0x63Ac0CA1…f617",
        to: "0x63Ac0CA1…f617",
        when: "2 minutes ago",
      },
      {
        txn: "0x1822a4c5…2ca8",
        status: "Success",
        function: "Transfer",
        contracts: "App_Transactions",
        from: "0x63Ac0CA1…f617",
        to: "0x63Ac0CA1…f617",
        when: "2 minutes ago",
      },
      {
        txn: "0x1822a4c5…2ca8",
        status: "Success",
        function: "Transfer",
        contracts: "App_Transactions",
        from: "0x63Ac0CA1…f617",
        to: "0x63Ac0CA1…f617",
        when: "2 minutes ago",
      },
      {
        txn: "0x1822a4c5…2ca8",
        status: "Success",
        function: "Transfer",
        contracts: "App_Transactions",
        from: "0x63Ac0CA1…f617",
        to: "0x63Ac0CA1…f617",
        when: "2 minutes ago",
      },
      {
        txn: "0x1822a4c5…2ca8",
        status: "Success",
        function: "Transfer",
        contracts: "App_Transactions",
        from: "0x63Ac0CA1…f617",
        to: "0x63Ac0CA1…f617",
        when: "2 minutes ago",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          txn: object.txn,
          status: object.status,
          function: object.function,
          contracts: object.contracts,
          from: object.from,
          to: object.to,
          when: object.when,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

  return (
    <>
      <Header />
      <Row style={{ height: "170vh" }}>
        <Sidebar />
        <MainContainer>
          <Row>
            <Transactions>
              <b>Transactions</b>
            </Transactions>
            <SearchBar placeholder="Search bystatus or name" />
            <IconContainer>
              {open && <Settings click={handleClose} />}
              <Icons src="/images/settings.svg" onClick={handleClickOpen} />
              <Icons src="/images/refresh.svg" />
              <Icons src="/images/filter.svg" />
            </IconContainer>
          </Row>

          <Card>
            <Column>
              <Heading>View Transaction for Contract</Heading>
              <InstructionText>
                You can view transactions per contract by using the contract
                picker below
              </InstructionText>

              <Dropdown
                options={options}
                // onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
            </Column>
          </Card>

          <TableContainer>
            <Div>
              <Row>
                <ColumnOne>Tx Hash</ColumnOne>
                <ColumnOne>Status</ColumnOne>
                <ColumnOne>Function</ColumnOne>
                <ColumnOne>Contracts</ColumnOne>
                <ColumnOne>Form</ColumnOne>
                <ColumnOne>To</ColumnOne>
                <ColumnOne>When</ColumnOne>
              </Row>
            </Div>
            <div>
              {address.map((data, index) => {
                return (
                  <Div>
                    <Row>
                      <ColumnSecond>{data.txn}</ColumnSecond>

                      <ColumnSecond>{data.status}</ColumnSecond>
                      <ColumnSecond>{data.function}</ColumnSecond>
                      <ColumnSecond>{data.contracts}</ColumnSecond>
                      <ColumnSecond>{data.from}</ColumnSecond>
                      <ColumnSecond>{data.to}</ColumnSecond>
                      <ColumnSecond>{data.when}</ColumnSecond>
                    </Row>
                  </Div>
                );
              })}
            </div>
          </TableContainer>
        </MainContainer>
      </Row>
      <div>
        {state && (
          <LetsGetStarted click={() => setState(false)} state={state} />
        )}
      </div>
    </>
  );
}

export default TransactionList;

const TableCard = styled.div`
  background-color: #ffffff;
  height: 480px;
  margin-top: 20px;
`;
const TransactionNumber = styled.b`
  color: #416be0;
`;
const Div = styled.div`
  padding: 12px;
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
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 400px;
  padding: 10px;
  margin-top: 25px;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
`;

const Transactions = styled.div`
  font-size: 20px;
`;
const SearchBar = styled.input`
  height: 35px;

  border: none;
  margin-left: 15px;
  border-radius: 4px;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 30px;
  background-size: 12px;
  outline: none;

  width: 100%;
  max-width: 261px;
  // &:focus: {
  //   outline: none;
  //   border: none;
  // }
`;
const Icons = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: absolute;
  right: 40px;
`;
const Heading = styled.span`
  margin-top: 10px;
  color: #102c78;
  font-size: 1rem;
  font-weight: 600;
  font: normal normal medium 14px/17px Inter;
`;
const InstructionText = styled.span`
  margin-top: 10px;
`;
const Card = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
`;
const ColumnSecond = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 300px;
`;
