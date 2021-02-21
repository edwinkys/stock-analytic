import React from 'react';
import PropTypes from 'prop-types';
import {curveBundle} from 'd3-shape';

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
        <YAxis hide={true} domain={['dataMin', 'dataMax']} />
        <Tooltip content={<CustomTooltip />} cursor={{opacity: 0}} />
        <CartesianGrid vertical={false} horizontal={false} stroke={color.gray} opacity={0.25} />
        <Area
          type="monotone"
          connectNulls={true}
          dataKey={props.value}
          stroke="url(#lineGradient)"
          fill="url(#areaGradient)"
        />
        <Line
          type={curveBundle.beta(0)}
          stroke="url(#lineGradient)"
          connectNulls={true}
          dot={false}
          activeDot={false}
          opacity={0.5}
          dataKey={props.trend}
        />
        <Line
          stroke="#73738c"
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
  average: PropTypes.string
}

export default StockChart;
