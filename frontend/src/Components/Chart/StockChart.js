import React from 'react';
import PropTypes from 'prop-types';

// Import chart components
import {
  ComposedChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

// Import tooltips
import CustomTooltip from './CustomTooltip';

// Color list
const color = {
  blue: "#5547eb",
  purple: "#8767e4",
  gray: "#73738c"
};

const StockChart = props => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={props.data}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.purple} stopOpacity={0.5}/>
            <stop offset="100%" stopColor={color.purple} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color.blue} stopOpacity={1}/>
            <stop offset="100%" stopColor={color.purple} stopOpacity={1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey={props.label} hide={true} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={{opacity: 0}} />
        <CartesianGrid vertical={false} horizontal={false} stroke={color.gray} opacity={0.25} />
        <Area
          type="monotone"
          dataKey={props.value}
          stroke="url(#lineGradient)"
          fill="url(#areaGradient)"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

StockChart.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default StockChart;
