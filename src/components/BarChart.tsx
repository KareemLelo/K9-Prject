import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export interface TooltipCallbackProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string | number;
  }>;
  label?: string;
}

interface BarChartProps {
  data: Array<Record<string, any>>;
  index: string;
  categories: string[];
  showLegend?: boolean;
  showYAxis?: boolean;
  startEndOnly?: boolean;
  className?: string;
  tooltipCallback?: (props: TooltipCallbackProps) => React.ReactNode;
}

export function BarChart({
  data,
  index,
  categories,
  showLegend = true,
  showYAxis = true,
  startEndOnly = false,
  className,
  tooltipCallback,
}: BarChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey={index}
            axisLine={false}
            tickLine={false}
            ticks={
              startEndOnly
                ? [data[0][index], data[data.length - 1][index]]
                : undefined
            }
            tick={{ fontSize: 12, fill: "#6B7280" }}
            padding={{ left: 5, right: 5 }}
          />
          {categories.map((category) => (
            <Bar
              key={category}
              dataKey={category}
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-gray-200 dark:fill-gray-800"
              barSize={40}
            />
          ))}
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={(props: any) => {
              if (tooltipCallback) {
                const transformedProps: TooltipCallbackProps = {
                  active: props.active,
                  payload: props.payload?.map((p: any) => ({
                    value: Number(p.value),
                    dataKey: p.dataKey,
                  })),
                  label: props.label,
                };
                return tooltipCallback(transformedProps);
              }
              return null;
            }}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
