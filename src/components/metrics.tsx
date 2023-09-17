"use client";

import {
  Title,
  Grid,
  Col,
  Card,
  Text,
  Flex,
  ProgressBar,
  CategoryBar,
} from "@tremor/react";
import { Line } from "@/components/line";

export function Metrics() {
  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Title>Vault Health</Title>
            <CategoryBar
              values={[25, 25, 25, 25]}
              colors={["rose", "orange", "yellow", "emerald"]}
              markerValue={70}
              className="mt-3"
            />
          </Card>
        </Col>
        <Card>
          <Title>Collateralization</Title>
          <Flex className="pt-2">
            <Text>$ 10,000 &bull; 50%</Text>
            <Text>$ 20,000</Text>
          </Flex>
          <ProgressBar value={45} color="teal" className="mt-3" />
        </Card>
      </Grid>
      <div className="pt-6">
        <Line />
      </div>
    </>
  );
}
