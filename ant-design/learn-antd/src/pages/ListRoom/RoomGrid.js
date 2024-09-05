import { Badge, Card, Col, Row } from "antd";

function RoomGrid(props) {
  const { rooms } = props;
  return (
    <>
      {rooms && (
        <Row gutter={[20, 20]}>
          {rooms.map((item) => (
            <Col span={12} key={item.id}>
              <Badge.Ribbon
                text={item.typeRoom ? "VIP" : "Thường"}
                color={item.typeRoom ? "purple" : "grey"}
              >
                <Card title={item.name}>
                  <p>
                    Số giường: <strong>{item.quantityBed}</strong>
                  </p>
                  <p>
                    Số người: <strong>{item.quantityPeople}</strong>
                  </p>
                  <p>
                    <Badge
                      status={item.status ? "success" : "error"}
                      text={item.status ? "Còn phòng" : "Hết phòng"}
                    />
                  </p>
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default RoomGrid;
