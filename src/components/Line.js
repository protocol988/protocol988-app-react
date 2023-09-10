import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    TVL: 1.7,
  },
  {
    date: "Feb 23",
    TVL: 1.8,
  },
  {
    date: "Mar 23",
    TVL: 2,
  },
  {
    date: "Apr 23",
    TVL: 2.1,
  },
  {
    date: "May 23",
    TVL: 2.2,
  },
  {
    date: "Jun 23",
    TVL: 2.3,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export function Line() {
  return (
    <Card>
      <Title>Total Value Locked</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["TVL"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
