import { Card, Title, DonutChart } from "@tremor/react";

const assets = [
  {
    name: "USDC",
    sales: 70,
  },
  {
    name: "DAI",
    sales: 10,
  },
  {
    name: "WETH",
    sales: 10,
  },
  {
    name: "WBTC",
    sales: 10,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export function Donut() {
  return (
    <Card className="max-w-lg">
      <Title>Collateral Composition</Title>
      <DonutChart
        className="mt-6"
        data={assets}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["cyan", "amber", "violet", "rose"]}
      />
    </Card>
  );
}
