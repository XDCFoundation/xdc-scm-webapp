import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function AlertDetails() {
  const backButton = () => {
    history.push("/dashboard/rules");
  };
  return (
    <MainBoxContainer>
      <MainContainer>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div>
            <img
              alt=""
              src="/images/back.svg"
              style={{ marginRight: "10px" }}
              onClick={() => backButton()}
            />
            <b>Alert Details</b>
          </div>
          <Button>Add Alert</Button>
        </Row>
        <Container>
          <CommonDiv>
            <RowData>
              <Heading>ID</Heading>
              <SubHeading>45fej-46de-41d3-b23a-fhf783</SubHeading>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heading>Name</Heading>
              <SubHeading>
                Sucessfull transaction in App_Transactions_Validator
              </SubHeading>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heading>Alert Type</Heading>
              <SubHeading>
                <TextColor>Sucessfull transaction</TextColor>
              </SubHeading>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heading>Target</Heading>
              <SubHeading>App_Transactions_Validator</SubHeading>
            </RowData>
          </CommonDiv>
        </Container>
        <br />
        <b>Alert will be sent to this destination</b>
        <NewContainer>
          <CommonDiv>
            <Row>
              <img
                alt=""
                src="/images/email.svg"
                style={{ marginRight: "4px", width: "1rem" }}
              />
              <Heading>Email </Heading>
              <SubHeading>it@supportteam.com</SubHeading>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <img
                alt=""
                src="/images/webhook.svg"
                style={{ marginRight: "4px", width: "1rem" }}
              />
              <Heading>Finance</Heading>
              <SubHeading>https:webhook.site/aOe</SubHeading>
            </Row>
          </CommonDiv>
          <RowContainer>
            <EditButton style={{ marginRight: "4px" }}>Edit</EditButton>
            <DisableButton style={{ marginLeft: "4px" }}>Disable</DisableButton>
          </RowContainer>
        </NewContainer>
      </MainContainer>
    </MainBoxContainer>
  );
}

const MainBoxContainer = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    overflow: auto;
  }
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3rem;
  height: 100vh;
  white-space: nowrap;
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 80px;
    text-align: left;
  }
`;
const NewContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 10rem;
  margin-top: 20px;
  padding: 20px;
`;

const Button = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100px;
  height: 30px;
  font-size: 12px;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 12rem;
  margin-top: 20px;
  padding: 12px;
  @media (min-width: 300px) and (max-width: 768px) {
    background-color: #ffffff;
    border-radius: 6px;
    height: auto;
    padding: 8px;
    overflow: auto;
  }
`;

const CommonDiv = styled.div`
  border-bottom: 0.5px #c9d1cb solid;
  padding: 8px;
`;
const Heading = styled.div`
  text-align: left;
  font: normal normal 600 14px/17px Inter;
  color: #102c78;
  width: 100%;
  max-width: 260px;
`;
const SubHeading = styled.div`
  font-size: 13px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-left:5px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 160px;
  padding-top: 10px;
`;
const EditButton = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  font-size: 14px;
`;
const DisableButton = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  text-align: left;
  color: #3163f0;
  font-size: 14px;
`;
const TextColor = styled.div`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #416be0;
`;