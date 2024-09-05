// https://enlink.themenate.net/dashboard/default

import { Carousel, Col, Collapse, Image, QRCode, Rate, Row, Tabs } from "antd";
import "./LearnGrid.css";
import CardItem from "../CardItem";

const { Panel } = Collapse;

function LearnGrid() {
  const list = [
    {
      id: 1,
      title: "Logo 1 là gì?",
      description: "Logo 1 là...",
    },
    {
      id: 2,
      title: "Logo 2 là gì?",
      description: "Logo 2 là...",
    },
    {
      id: 3,
      title: "Logo 3 là gì?",
      description: "Logo 3 là...",
    },
  ];
  const items = [
    {
      key: 1,
      label: "Tab 1",
      children: "Nội dung Tab 1",
    },
    {
      key: 2,
      label: "Tab 2",
      children: "Nội dung Tab 2",
    },
    {
      key: 3,
      label: "Tab 3",
      children: "Nội dung Tab 3",
    },
  ];
  return (
    <>
      {/* <Row gutter={[20, 10]}>
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 1</div>
        </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 2</div>
        </Col>
        <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 3</div>
        </Col>
        <Col xxl={10} xl={10} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 4</div>
        </Col>
      </Row> */}

      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 4" />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Carousel autoplay effect="fade">
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
      </Carousel>

      <Collapse defaultActiveKey={["1"]} accordion>
        {list.map((item) => (
          <Panel header={item.title} key={item.id}>
            <p>{item.description}</p>
          </Panel>
        ))}
      </Collapse>

      <Image
        width={200}
        src="https://th.bing.com/th?id=OIP.b7zeMkpUxOWXTSosO1N34wAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2"
      />

      <Tabs items={items} defaultActiveKey="1" />

      <QRCode errorLevel="H" value="https://daca.vn" icon="./favicon.ico" />

      <Rate
        allowHalf
        tooltips={["Yếu", "Kém", "Trung bình", "Khá", "Giỏi"]}
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default LearnGrid;
