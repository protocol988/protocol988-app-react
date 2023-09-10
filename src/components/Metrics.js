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
import { Line } from "@/components/Line";

export function Metrics() {
  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Title>Liquidation Score</Title>
            <CategoryBar
              values={[40, 30, 20, 10]}
              colors={["emerald", "yellow", "orange", "rose"]}
              markerValue={62}
              className="mt-3"
            />
          </Card>
        </Col>
        <Card>
          <Title>XXX</Title>
          <Flex className="pt-2">
            <Text>$ 9,012 &bull; 45%</Text>
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
