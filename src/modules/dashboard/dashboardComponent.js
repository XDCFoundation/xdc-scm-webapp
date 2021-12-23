import React ,{ useEffect } from "react";
import styled from "styled-components";
import Utility from "../../utility";
import HeaderComponent from "../header/header";
import DesktopSideMenu from "./sidebar";
import MobileSideMenu from "./mobileSidebar";
import ContractDetails from "../Contract/contractDetails/contractDetails";
import Contract from "../Contract/contract";
import TransactionDetails from "../TransactionDetails/transactionDetails";
import TransactionList from "../transactions/transactionList";
import Network from "../Network/network";
import Analytics from "../Analytics/analytics";
import About from "../aboutScreen/about";
import Rules from "../Alerting/Rules";
import AddAlert from "../Alerting/AddAlert";
import AlertDetails from "../Alerting/AlertDetails";
import { sessionManager } from "../../managers/sessionManager";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

//Replace Under Development with component once developed-
const HomeComponent = (props) => {
  useEffect(() => {
    // getCurrentUserDetails();
  }, [])
  const getCurrentUserDetails = () => {
    let user = ""; 
    try {
      user = window.web3.eth.accounts;
    } catch (e) {
      console.log(e)
    }
    if (user && user.length){
      console.log(user)
      sessionManager.setDataInCookies(true, "isLoggedIn")
      return true;
    }
  }
  return (
    <>
      { !sessionManager.getDataFromCookies("isLoggedIn") ? 
      <Container>
        {Utility.isMenuActive("") && <About getCurrentUserDetails={getCurrentUserDetails}/>}
      </Container>
      :
      <Container>
        {Utility.isMenuActive("/contract") &&
          (Utility.isMenuActive("/contract-details") ? (
            <ContractDetails />
          ) : (
            <Contract />
          ))}
        {Utility.isMenuActive("/transaction") &&
          (Utility.isMenuActive("/transaction-details") ? (
            <TransactionDetails />
          ) : (
            <TransactionList />
          ))}
        {Utility.isMenuActive("/about") && <About getCurrentUserDetails={getCurrentUserDetails} />}
        {Utility.isMenuActive("/analytics") && <Analytics />}
        {Utility.isMenuActive("/rules") && <Rules />}
        {Utility.isMenuActive("/add-alert") && <AddAlert />}
        {Utility.isMenuActive("/alert-detail") && <AlertDetails />}
        {Utility.isMenuActive("/network") && <Network />}
      </Container>}
    </>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden;
  overflow-x: hidden; */
  height: 100vh;
`;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const ScrollableDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;
`;

const dashboardComponent = (props) => {
  return (
    <>
      <DashboardContainer>
        <HeaderComponent {...props} />
        <HomeContainer>
          <DesktopSideMenu {...props} />
          <MobileSideMenu {...props} />
          <ScrollableDiv>
            <HomeComponent {...props} />
          </ScrollableDiv>
        </HomeContainer>
      </DashboardContainer>
    </>
  );
};
export default dashboardComponent;
