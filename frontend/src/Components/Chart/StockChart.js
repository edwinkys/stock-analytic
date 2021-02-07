import React from 'react';
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

const data = [
  {
    label: "Aug 1, 2021",
    val: 2
  },
  {
    label: "Aug 2, 2021",
    val: 5
  },
  {
    label: "Aug 3, 2021",
    val: 3
  },
  {
    label: "Aug 4, 2021",
    val: 10
  },
  {
    label: "Aug 5, 2021",
    val: 11
  },
  {
    label: "Aug 6, 2021",
    val: 13
  },
  {
    label: "Aug 7, 2021",
    val: 9
  },
  {
    label: "Aug 8, 2021",
    val: 5
  },
  {
    label: "Aug 9, 2021",
    val: 7
  },
  {
    label: "Aug 10, 2021",
    val: 15
  },
  {
    label: "Aug 11, 2021",
    val: 13
  },
  {
    label: "Aug 12, 2021",
    val: 12
  },
  {
    label: "Aug 13, 2021",
    val: 16
  },
  {
    label: "Aug 14, 2021",
    val: 18
  },
  {
    label: "Aug 15, 2021",
    val: 21
  },
  {
    label: "Aug 16, 2021",
    val: 22
  },
  {
    label: "Aug 17, 2021",
    val: 22
  },
  {
    label: "Aug 18, 2021",
    val: 24
  },
  {
    label: "Aug 19, 2021",
    val: 26
  },
  {
    label: "Aug 20, 2021",
    val: 19
  },
  {
    label: "Aug 21, 2021",
    val: 17
  },
  {
    label: "Aug 22, 2021",
    val: 22
  },
  {
    label: "Aug 23, 2021",
    val: 21
  },
  {
    label: "Aug 24, 2021",
    val: 23
  },
  {
    label: "Aug 25, 2021",
    val: 19
  },
  {
    label: "Aug 26, 2021",
    val: 14
  },
  {
    label: "Aug 27, 2021",
    val: 13
  },
  {
    label: "Aug 28, 2021",
    val: 11
  },
  {
    label: "Aug 29, 2021",
    val: 17
  },
  {
    label: "Aug 30, 2021",
    val: 21
  },
  {
    label: "Aug 31, 2021",
    val: 22
  }
];

// Color list
const color = {
  purple: "#8767e4",
  gray: "#73738c"
};

const StockChart = props => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <defs>
          <linearGradient id="stockPrimary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.purple} stopOpacity={0.5}/>
            <stop offset="90%" stopColor={color.purple} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="label" hide={true} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid vertical={false} horizontal={false} stroke={color.gray} opacity={0.25} />
        <Area
          type="monotone"
          dataKey="val"
          stroke={color.purple}
          fill="url(#stockPrimary)"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
