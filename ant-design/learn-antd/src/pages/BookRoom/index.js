import { Input, Row, Col, Button, Checkbox, Space, DatePicker, Radio, Select } from "antd";
import { useState } from "react";
import { bookRoom } from "../../services/bookRoomService";
const { RangePicker } = DatePicker;

function BookRoom() {
  const [data, setData] = useState({
    time: "14:00"
  });

  const optionsTime = [];
  for (let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: (i < 10 ? `0${i}:00` : `${i}:00`),
      label: (i < 10 ? `0${i}:00` : `${i}:00`)
    })
  }

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  };

  const handleSubmit = async () => {
    const response = await bookRoom(data);
    if (response) {
      alert("Chúc mừng bạn đã đặt phòng thành công!");
    } else {
      alert("Xin lỗi, vui lòng đặt lại sau!")
    }
  };

  const handleChangeCheckbox = (e) => {
    const object = {
      ...data,
      services: e,
    };
    setData(object);
  };

  const handleChangeDate = (_, dateStrings) => {
    const object = {
      ...data,
      date: dateStrings,
    };
    setData(object);
  };

  const handleChangeRadio = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  }

  const handleChangeSelect = (e) => {
    const object = {
      ...data,
      time: e,
    };
    setData(object);
  }

  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>

        <Col span={24}>
          <p>Họ tên</p>
          <Input
            name="fullName"
            placeholder="Ví dụ: Lê Văn A"
            onChange={handleChangeInput}
          />
        </Col>

        <Col span={12}>
          <p>Số điện thoại</p>
          <Input
            name="phone"
            placeholder="Ví dụ: 0123456789"
            onChange={handleChangeInput}
          />
        </Col>

        <Col span={12}>
          <p>Email</p>
          <Input
            name="email"
            placeholder="Ví dụ: levana@gmail.com"
            onChange={handleChangeInput}
          />
        </Col>

        <Col span={12}>
          <p>Dịch vụ thêm</p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            <Space.Compact direction="vertical">
              <Checkbox value={"Thuê xe máy"}>Thuê xe máy</Checkbox>
              <Checkbox value={"Thuê ô tô 4 chỗ"}>Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value={"Thuê ô tô 7 chỗ"}>Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value={"Thuê ô tô 16 chỗ"}>Thuê ô tô 16 chỗ</Checkbox>
            </Space.Compact>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group name="gift" onChange={handleChangeRadio}>
            <Space.Compact direction="vertical">
              <Radio value={"Áo cộc"} defaultChecked>Áo cộc</Radio>
              <Radio value={"Mũ"}>Mũ</Radio>
              <Radio value={"Kem chống nắng"}>Kem chống nắng</Radio>
            </Space.Compact>
          </Radio.Group>
        </Col>

        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker
            format={"DD/MM/YYYY"}
            placeholder={["Nhận phòng", "Trả phòng"]}
            onChange={handleChangeDate}
            style={{width: "100%"}} 
          />
        </Col>

        <Col span={12}>
          <p>Chọn giờ nhận phòng</p>
          <Select defaultValue={data.time} style={{width: "100%"}} options={optionsTime} onChange={handleChangeSelect}>

          </Select>
        </Col>

        <Col span={24}>
          <Button type="primary" onClick={handleSubmit}>
            Đặt phòng
          </Button>
        </Col>



      </Row>
    </>
  );
}

export default BookRoom;
