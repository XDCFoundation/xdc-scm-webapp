import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { analytics } from "../../constants";
import { CSVLink } from "react-csv";

export default function TopCalls(props) {
  const ClickMe = () => {
    props.changeExpand(0);
  };
  const topCallersheaders = [
    { label: "Address", key: "address" },
    { label: "Network", key: "network" },
    { label: "Count", key: "count" },
  ];
  const topFunctionCallheaders = [
    { label: "Function", key: "function" },
    { label: "Network", key: "network" },
    { label: "Count", key: "count" },
  ];
  return (
    <MainContainer>
      <SubContainer>
        <AlignmentContainer>
          <img
            style={{ marginRight: "8px", cursor: "pointer" }}
            alt=""
            src="/images/back.svg"
            onClick={ClickMe}
          />
          <MainHeading>{props.graphName}</MainHeading>
        </AlignmentContainer>
        <AlignmentContainer>
          {props.graphNo === 4 ? (
            <CSVLink
              className="csvLink"
              style={props?.data?.length > 0 ? csvLink : csvLinkDisabled}
              data={props.data}
              headers={topCallersheaders}
              filename="Top Callers"
            >
              Export Data
            </CSVLink>
          ) : (
            <CSVLink
              className="csvLink"
              style={props?.data?.length > 0 ? csvLink : csvLinkDisabled}
              data={props.data}
              headers={topFunctionCallheaders}
              filename={props.graphName}
            >
              Export Data
            </CSVLink>
          )}
          <Icon src="/images/refresh.svg" />
        </AlignmentContainer>
      </SubContainer>

      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <GraphContainer>
          <FlexEnd style={{ display: props.data.length === 0 ? "none" : "" }}>
            <select
              id="dates"
              className="select"
              value={props.dropDownValue}
              onChange={(event) => {
                props.getAnalytics("", event);
              }}
            >
              {analytics &&
                analytics.ANALYTICS_DROPDOWN &&
                analytics.ANALYTICS_DROPDOWN.map((option) => (
                  <option value={option.VALUE} className="select-dropdown">
                    {option.TEXT}
                  </option>
                ))}
            </select>
          </FlexEnd>
          <Table>
            {props?.data && props.data.length && props.data.length > 0 ? (
              props.data.map((item) => (
                <>
                  {props.graphName === "Top Function Calls" && !item.function ? (
                    ""
                  ) : (
                    <TableRow className="noBorder">
                      <DataColumn>
                        <Div>
                          {props.graphNo === 4 ? (
                            <ContractFrom>Contract from:</ContractFrom>
                          ) : (
                            <ContractFrom>Function:</ContractFrom>
                          )}
                          {props.graphNo === 4 ? (
                            <Network>{item.address}</Network>
                          ) : (
                            <Network>{item.function}</Network>
                          )}
                        </Div>
                        <Div>
                          <ContractFrom>Network:</ContractFrom>
                          <Network>{item.network}</Network>
                        </Div>
                      </DataColumn>
                      <Count>{item.count}</Count>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <>
                <SubTable>{props.error}</SubTable>
              </>
            )}
          </Table>
        </GraphContainer>
      </Row>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #ecf0f7;
  height: 100vh;
`;
const MainHeading = styled.div`
  text-align: left;
  font: normal normal 600 24px/29px Inter;
  letter-spacing: 0px;
  color: #191919;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const GraphContainer = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  height: auto;
  margin-top: 20px;
  padding: 20px;
`;

const AlignmentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

const Table = styled.div`
  height: 30rem;
  overflow-y: hidden;
  margin-top: 1rem;
`;

const SubTable = styled.div`
  text-align: center;
  margin-top: 11.5rem;
`;
const ContractFrom = styled.div`
  width: 26%;
  color: #102c78;
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Network = styled.div`
  color: #303134;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0.125rem;
`;
const TableRow = styled.div`
  display: flex;
  flex-flow: column-nowrap;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(227, 231, 235);
`;
const DataColumn = styled.div`
  width: 100%;
  padding-top: 15px;
`;
const Count = styled.div`
  color: #3163f0;
  padding-top: 15px;
  padding-right: 45px;
  font-weight: 400;
`;

const csvLink = {
  backgroundImage: `url("/images/export.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "8px",
  paddingLeft: "26px",
  backgroundSize: "18px",
  position: "relative",
  backgroundColor: "#3163f0",
  border: "none",
  borderRadius: "4px",
  width: "100%",
  color: "#ffffff",
  height: "34px",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  paddingTop: "5px",
  paddingRight: "15px",
  "&hover": {
    backgroundColor: "#254FC6", 
  }
};
const csvLinkDisabled = {
  backgroundImage: `url("/images/export.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "8px",
  paddingLeft: "26px",
  backgroundSize: "18px",
  position: "relative",
  backgroundColor: "#8DA8F3",
  border: "none",
  borderRadius: "4px",
  width: "100%",
  color: "#ffffff",
  height: "34px",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  paddingTop: "5px",
  paddingRight: "15px",
  pointerEvents: "none",
};
