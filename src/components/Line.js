import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    XXX: 2890,
    YYY: 2338,
  },
  {
    date: "Feb 22",
    XXX: 2756,
    YYY: 2103,
  },
  {
    date: "Mar 22",
    XXX: 3322,
    YYY: 2194,
  },
  {
    date: "Apr 22",
    XXX: 3470,
    YYY: 2108,
  },
  {
    date: "May 22",
    XXX: 3475,
    YYY: 1812,
  },
  {
    date: "Jun 22",
    XXX: 3129,
    YYY: 1726,
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
        categories={["XXX", "YYY"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
