import React from "react";
import PropTypes from "prop-types";
import {curveBundle} from "d3-shape";

// Import chart components
import {
  ComposedChart,
  ResponsiveContainer,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

// Import tooltips
import CustomTooltip from "./CustomTooltip";

// Color list
const color = {
  blue: "#5547eb",
  purple: "#8767e4",
  gray: "#73738c",
  red: "#ff5757"
};

const StockChart = props => {
  const straightLine = curveBundle.beta(0);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={props.data}>
        <defs>
          <linearGradient id="areaGradientIncreasing" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.purple} stopOpacity={0.5}/>
            <stop offset="100%" stopColor={color.purple} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="areaGradientDecreasing" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.red} stopOpacity={0.5}/>
            <stop offset="100%" stopColor={color.red} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color.blue} stopOpacity={1}/>
            <stop offset="100%" stopColor={color.purple} stopOpacity={1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey={props.label} hide={true} />
        <YAxis hide={true} domain={["dataMin", "dataMax"]} />
        <Tooltip content={<CustomTooltip />} cursor={{opacity: 0}} />
        <CartesianGrid vertical={false} horizontal={false} stroke={color.gray} opacity={0.25} />
        <Area
          type="monotone"
          connectNulls={true}
          dataKey={props.value}
          stroke={props.isIncreasing ? "url(#lineGradient)" : color.red}
          fill={props.isIncreasing ? "url(#areaGradientIncreasing)" : "url(#areaGradientDecreasing)"}
        />
        <Line
          type={straightLine}
          stroke={props.isIncreasing ? "url(#lineGradient)" : color.red}
          connectNulls={true}
          dot={false}
          activeDot={false}
          opacity={0.5}
          dataKey={props.trend}
        />
        <Line
          stroke={color.gray}
          connectNulls={true}
          dot={false}
          activeDot={false}
          opacity={0.5}
          dataKey={props.average}
          strokeDasharray="5 5"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

StockChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  trend: PropTypes.string,
  average: PropTypes.string,
  isIncreasing: PropTypes.bool
}

export default StockChart;
