import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
const { Option } = Select;
function CreateRoom() {
  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  const handleSubmit = (e) => {};

  return (
    <>
      <h2>Thêm phòng mới</h2>

      <Form name="create-room" onFinish={handleSubmit} layout="vertical">
        <Form.Item label="Tên phòng" name={"name"} rules={rules}>
          <Input />
        </Form.Item>

        <Form.Item label="Số lượng giường" name={"quantityBed"} rules={rules}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Số người tối đa"
          name={"quantityPeople"}
          rules={rules}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Mô tả" name={"description"}>
          <Input.TextArea maxLength={100} showCount />
        </Form.Item>

        <Form.Item label="Tiện ích" name={"utils"}>
          <Select defaultValue={"wifi"} mode="multiple" allowClear>
            <Option value="wifi">Wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Trạng thái" name={"status"} valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateRoom;
