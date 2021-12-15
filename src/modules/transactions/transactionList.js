import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import LetsGetStarted from "../Popup/letsGetStartedPopUp";
import Settings from "../Popup/settings";
import Filter from "../Popup/filter"
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";

export default function TransactionList(props) {
  useEffect(() => {
  
  }, []);
  const [state, setState] = useState(true);
  const [open, isOpen] = useState(false);
  const handleClickOpen = () => {
    isOpen(true);
  };
  const handleClose = () => {
    isOpen(false);
  };

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
      // {
      //   txn: "0x1822a4c5…2ca8",
      //   status: "Success",
      //   function: "Transfer",
      //   contracts: "App_Transactions",
      //   from: "0x63Ac0CA1…f617",
      //   to: "0x63Ac0CA1…f617",
      //   when: "2 minutes ago",
      // },
      // {
      //   txn: "0x1822a4c5…2ca8",
      //   status: "Success",
      //   function: "Transfer",
      //   contracts: "App_Transactions",
      //   from: "0x63Ac0CA1…f617",
      //   to: "0x63Ac0CA1…f617",
      //   when: "2 minutes ago",
      // },
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
  const [isSetOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 77,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: "100%",
    maxWidth: "453px",
    background: "#f5f6fd 0% 0% no-repeat padding-box",
    border: "1px solid #d5e0ff",
    borderRadius: "6px",
    height: "80px",
    marginTop: "4px",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#191919",
  };
  const redirectToTransactionDetails = () => {
    history.push("/dashboard/transaction-details");
  };
  return (
    <>
      {/* <Row> */}
        <MainContainer>
          <Row>
            <Transactions>
              <Bold>Transactions</Bold>
            </Transactions>
            <SearchBar placeholder="Search by status or name" />
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

              <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: "relative" }}>
                  <DropDown onClick={handleClick}>
                    App_Transactions_Validator  <img
                      style={{ marginLeft: "0.5rem" }}
                      alt=""
                      src="/images/XDCmainnet.svg"
                    />
                    <br />
                    <TransactionHash>
                      xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                    </TransactionHash>
                    <Image src="/images/Arrrow.svg" />
                    
                  </DropDown>
                  {isSetOpen ? (
                    <Box sx={styles}>
                      <Label>Contract</Label>
                      App_Transactions_Validator
                      <br />
                      <TransactionHash>
                        xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                      </TransactionHash>
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </Column>
          </Card>

          <TableContainer>
            <Div>
              <Row>
                <ColumnOne>Tx Hash</ColumnOne>
                <ColumnOne>Status</ColumnOne>{" "}
                <ColumnOne>
                  Function
                  <Tooltip disableFocusListener title="Add">
                    <ToolTipIcon src="/images/tool tip.svg" />
                  </Tooltip>
                </ColumnOne>
                <ColumnOne>Contracts</ColumnOne>
                <ColumnOne>Form</ColumnOne>
                <ColumnOne>To</ColumnOne>
                <ColumnOne>When</ColumnOne>
              </Row>
            </Div>
            <div>
              {address.map((data, index) => {
                return (
                  <Div onClick={redirectToTransactionDetails}>
                    <Row>
                      {/* <ColorBox> */}
                      <ColumnSecond>{data.txn}</ColumnSecond>
                      {/* </ColorBox> */}
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
      {/* </Row> */}
      <div>
        {false && (
          <LetsGetStarted click={() => setState(false)} state={state} />
        )}
      </div>
    </>
  );
}

const Div = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #e3e7eb;
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 25rem;
  padding: 0.625rem;
  margin-top: 1.563rem;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3.125rem;
  height: 100vh;
`;

const Transactions = styled.div`
  font-size: 1.25rem;
`;
const SearchBar = styled.input`
  height: 2.188rem;
  border: none;
  margin-left: 0.938rem;
  border-radius: 0.25rem;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.875rem;
  background-size: 0.75rem;
  outline: none;
  width: 100%;
  max-width: 261px;

  *:focus {
    outline: none;
  }
`;
const Icons = styled.img`
  margin-right: 0.625rem;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: absolute;
  right: 40px;
`;
const Heading = styled.span`
  margin-top: 0.625rem;
  color: #102c78;
  font-size: 1rem;
  font-weight: 600;
`;
const InstructionText = styled.span`
  margin-top: 0.625rem;
  color: #191919;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;
const Card = styled.div`
  margin-top: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 0.625rem;
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  color: #191919;
  width: 100%;
  max-width: 300px;
`;
const Bold = styled.b`
  color: #191919;
  font-size: 1.5rem;
  font-weight: 600;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font: normal normal medium 14px/17px Inter;
  font-size: 14px;
  font-weight: 600;
  color: #191919;
  height: 75px;
  padding: 10px;
  width: 100%;
  max-width: 453px;
  position: relative;
`;
const TransactionHash = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #416be0;
  margin-top: 0.25rem;
`;
const Image = styled.img`
  width: 0.75rem;
  position: absolute;
  top: 29px;
  right: 8px;
  cursor: pointer;
`;
const Label = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #767c93;
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;
