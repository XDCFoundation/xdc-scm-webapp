import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import { sessionManager } from "../../managers/sessionManager";
import utility from "../../utility";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Tooltip, Typography, ClickAwayListener } from "@material-ui/core";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "#4B4B4B",
    maxWidth: "402px",
    width: "202px",
    height: "215px",
    fontSize: "16px",
    fontWeight: "normal",
    boxShadow: "0px 3px 12px #0000001A",
    padding: "23.5px",
    borderRadius: "4px",
    wordSpacing: "2px",
  },
}))(Tooltip);

const Web3 = require("web3");

function Header(props) {
  console.log(props);
  const [openHumburger, setOpenHumburger] = useState(true);
  const getUserAccountAddress = () => {
    let user = "";
    user = sessionManager.getDataFromCookies("accountAddress");
    if (user) user = utility.truncateTxnAddress(user);
    console.log("user", user);
    return user;
  };
  const getUserBalance = () => {
    let balance = sessionManager.getDataFromCookies("accountAddress");
    console.log("webaccount", balance);
    const web3 = new Web3(
      // new Web3.providers.HttpProvider("https://rpc.xinfin.network")
      new Web3.providers.HttpProvider("https://rpc.apothem.network")
    );
    let checkResult = Web3.utils.toChecksumAddress(balance);
    if (checkResult)
      // let fixed = Math.round(checkResult * 100000) / 100000;
      // console.log(Web3.utils.toChecksumAddress(balance));
      web3.eth.getBalance(checkResult, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
          let num = Number(result / 1000000000000000000);

          // console.log("fixed", num.toFixed(1));
          getSetBalance(num.toFixed(2));
        }
      });
  };
  const [getBalance, getSetBalance] = useState("");
  useEffect(() => {
    getUserBalance();
  }, []);
  return (
    <HeaderContainer>
      <SpaceBetween>
        <div style={{ display: "flex", marginLeft: "12px" }}>
          <GridLogo
            src="/images/Grid.svg"
            onClick={() => setOpenHumburger(openHumburger)}
          />
          <XmartlyLogo src="/images/Logo.svg" />
        </div>
        {sessionManager.getDataFromCookies("accountAddress") ? (
          <XDCContainer>
            <XDCInfo
              onClick={() => {
                getUserBalance();
              }}
            >
              {getBalance} XDC
            </XDCInfo>
            <CustomTooltip>
              <UserContainer>
                {getUserAccountAddress()}
                <UserLogo src="/images/profile.svg" />
              </UserContainer>
            </CustomTooltip>
          </XDCContainer>
        ) : (
          <Button onClick={props.getCurrentUserDetails}>Connect Wallet</Button>
        )}
      </SpaceBetween>
    </HeaderContainer>
  );
}

export default Header;

const UserLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 7px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
  @media (max-width: 768px) {
    padding-top: 22px;
  }
  @media (max-width: 375px) {
    padding-top: 50px;
  }
`;
const XmartlyLogo = styled.img`
  margin-right: 17px;
`;
const GridLogo = styled.img`
  margin-right: 17px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const XDCContainer = styled.div`
  background: #3e579a;
  display: flex;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 0 0 0 10px;
  margin-right: 4px;
`;

const UserContainer = styled.div`
  width: 190px;
  background: #324988;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 4px;
  padding-top: 3px;
`;
const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 5px 20px 5px 20px;
`;
const XDCInfo = styled.button`
  margin-right: 30px;
  background: #3e579a;
  display: flex;
  color: white;
  border: none;
  outline: none;
  @media (max-width: 374px) {
    display: none;
  }
`;
