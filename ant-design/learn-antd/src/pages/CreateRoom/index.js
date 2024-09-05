import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Switch,
} from "antd";
import { createRoom } from "../../services/roomsService";

const { Option } = Select;

function CreateRoom() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  const handleSubmit = async (e) => {
    const response = await createRoom(e);
    if (response) {
      form.resetFields(); // reset form về trạng thái ban đầu
      messageApi.open({
        type: "success",
        content: "Tạo phòng mới thành công!",
        duration: 5
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Tạo phòng mới không thành công!",
        duration: 6
      });
    }
  };

  return (
    <>
      {contextHolder}
      <h2>Thêm phòng mới</h2>

      <Form
        name="create-room"
        onFinish={handleSubmit}
        layout="vertical"
        form={form}
      >
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
          <Select mode="multiple" allowClear>
            <Option value="wifi">Wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Trạng thái" name={"status"} valuePropName="checked">
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>

        <Form.Item label="Loại phòng" name={"typeRoom"} valuePropName="checked">
          <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
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
