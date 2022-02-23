import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import "../../assets/styles/custom.css";
import moment from "moment";
import styled from "styled-components";


export default function Graph(props) {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const [graphAccounts] = useState([]);

  // let length = graphAccounts.length;
  // const firstDate =
  //   graphAccounts.length === 0
  //     ? ""
  //     : moment(graphAccounts[length - 1].day).format("D MMM");
  // const lastDate =
  //   graphAccounts.length === 0
  //     ? ""
  //     : moment(graphAccounts[0].day).format("D MMM");
  const MouseMovePoint = (event) => {
    const x = event.x;
    const y = event.y;
    setPoints({ ...points, x, y });
  };

  useEffect(()=>{
  setData(props?.data)
  setType(props?.type)

}, [props.data]);
  const CustomPoint = () => {

    return (
     
      <g>
        <circle
          fill="#3763dd"
          r={5}
          strokeWidth={1}
          stroke={2}
          cx={points.x}
          cy={points.y}
        />
      </g>
     
    );
  };
  return (
    <>
    {data && data.length?
        <>
      <MyResponsiveLine
        MouseMovePoint={MouseMovePoint}
        // type="spline"
        data={data}
        CustomPoint={CustomPoint}
        
        // axisBottom={{
        //   orient: "bottom",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "transportation",
        //   legendOffset: 36,
        //   legendPosition: "center",
        // }}
        // axisLeft={{
        //   orient: "left",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "count",
        //   legendOffset: 40,
        //   legendPosition: "center",
        // }}
      />
      {data[0]?.id.includes("Transactions")? <Legend></Legend> : ""}
    </>
    : <>{props.error}</>}
    </>
  );
}
const ToolTipElement = (props) => {
  return (
      <TooltipGraph>
        <TooltipHead>
        <TooltipDate>{moment(props.point.data.x).format("DD MMM")}
           
        </TooltipDate>
       <Count>{props.point.data.y}</Count> 
        </TooltipHead>
        <TooltipData>

       {props.point.serieId !== "ActiveUsers" ? <TooltipDataHeader><div>Account: </div> <TooltipDataValues>XDC</TooltipDataValues></TooltipDataHeader> : ""}
       <TooltipDataHeader><div>Network: </div> <TooltipDataValues>Mainnet</TooltipDataValues></TooltipDataHeader> 
       {props.point.serieId !== "ActiveUsers" ?<TooltipDataHeader><div>Deployment Status: </div> <TooltipDataValues>Success</TooltipDataValues></TooltipDataHeader>  : ""}
        </TooltipData>
      </TooltipGraph>
  );
};


const MyResponsiveLine = ({ data, MouseMovePoint, CustomPoint }) => (
  <ResponsiveLine
  margin={{bottom: 37, left :30 , top:10 , right:20}}
  data={data}
  tooltip={ToolTipElement}

  // xScale={{ type: "point" }}
  yScale={{
      type: "linear",
      stacked: true,
      reverse: false,
      min:"auto",
      max:"auto"
  }}
  yFormat=" >-.2f"
  curve="natural"
  axisTop={null}
  axisRight={null}
  axisBottom={{
    orient: "right",
    tickSize: 2,
    tickPadding: 15,
    format: function(value){ 
   let fisrtValue= data[0]?.data[0]?.x,lastValue=data[0]?.data[data[0].data.length-1]?.x;
    if(value === fisrtValue || value === lastValue) return moment(value).format("DD MMM");
    else return "";
},
tickSize: 0,

}}
  axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 5,
      tickValues: 3,
        format: function(value){ 
            if(value < 999) return value;
            else return (value/1000).toFixed(1) + 'k';
        }
    }}
    defs ={[
      linearGradientDef("gradientA", [
        { offset:0 , color: "inherit"},
        {offset: 100, color:"inherit", opacity:0},
      ])
    ]}
  fill={[{match: "*", id:"gradientA"}]}
  enableGridX={true}
  enableGridY={true}
  enablePoints={true}
  pointSize={10}
  pointColor={{ from: 'color', modifiers: [] }}
  colors ={ (data[0]?.id).includes("Transactions") ? ["#BBCBF7", "#3163F0"] : ["#3163F0"]}
  colorBy="index"
  pointBorderWidth={2}
  pointLabelYOffset={-12}
  enableArea={true}
  areaBaselineValue={1}
  enableCrosshair={false}
  useMesh={true}
  legends={[]}
  theme={{ fontSize: 11, fontFamily: "Inter",textColor:"#7C828A" }}
 
  />
);

const Legend = () =>{
  return (
    <LegendDiv>
    <LegendSpan>
    <LegendImg src="/images/indicator.svg"></LegendImg>Successful Transactions
    </LegendSpan>
    <LegendSpan>
    <LegendImg src="/images/Failed transaction white.svg"></LegendImg> Failed Transactions
    </LegendSpan>
      </LegendDiv>
  )
}
 const LegendDiv = styled.div`
  font-size:12px;
  text-align:center;
  color: rgb(124, 130, 138);
 `;
 const LegendImg = styled.img`
 width:12px;
`;
const LegendSpan = styled.span`
 margin-right:5px;
`;
const GraphSize = styled.div`
  height: 9.75rem;
  width: auto;
  margin-top: 1.29rem;
  margin-bottom: 1.2rem;
  background: transparent;
  @media (max-width: 767px) {
    height: 80px;
  }
`;
const TooltipGraph = styled.div`
  width: 100%;
  padding: 4px 8px 7px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #e3e7eb;
  background-color: #fff;
  font-size: 13px;
`;
const TooltipHead = styled.div`
  display:flex;
  justify-content: space-between;
  font-weight:bold;
`;
const TooltipDate =styled.div`
  color: #303134;
  
`
const Count = styled.div`
  color: #3163F0;
`

const TooltipData  = styled.div`
 padding-top : 0.3rem;
 color: #3163F0;

`
const TooltipDataHeader  = styled.div`
display:flex;
`
const TooltipDataValues = styled.div`
color: #303134;
`