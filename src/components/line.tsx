"use client";

import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    2022: 1.7,
    2023: 2.7,
  },
  {
    date: "Feb 23",
    2022: 1.8,
    2023: 2.9,
  },
  {
    date: "Mar 23",
    2022: 2,
    2023: 3,
  },
  {
    date: "Apr 23",
    2022: 2.1,
    2023: 3.1,
  },
  {
    date: "May 23",
    2022: 2.2,
    2023: 3.2,
  },
  {
    date: "Jun 23",
    2022: 2.3,
    2023: 3.3,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString() + "b";
};

export function Line() {
  return (
    <Card>
      <Title>Total Value Locked</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["2022", "2023"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
