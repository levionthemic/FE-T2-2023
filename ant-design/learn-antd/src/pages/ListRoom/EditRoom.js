import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Select,
  Spin,
  Switch,
} from "antd";
import { updateRoom } from "../../services/roomsService";

import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

function EditRoom(props) {
  const { record, onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [notificationApi, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setShowModal(false);
  };

  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  const handleSubmit = async (e) => {
    console.log("Đã gửi");
    setSpinning(true);

    const response = await updateRoom(record.id, e);

    setTimeout(() => {
      
      if (response) {
        notificationApi.success({
          message: "Cập nhật thành công!",
          description: `Bạn đã cập nhật thành công phòng ${record.name}`,
        });
        setShowModal(false);
        setSpinning(false);
        onReload();
      } else {
        notificationApi.error({
          message: "Cập nhật thất bại",
          description: `Bạn đã cập nhật thất bại phòng ${record.name}`,
        });
      }
    }, 3000);
  };
  return (
    <>
      {contextHolder}
      <Button
        size="small"
        type="primary"
        icon={<EditOutlined />}
        onClick={handleShowModal}
      />
      <Modal
        title="Chỉnh sửa phòng"
        open={showModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Spin spinning={spinning} tip="Đang cập nhật">
          <Form
            name="edit-room"
            onFinish={handleSubmit}
            layout="vertical"
            form={form}
            initialValues={record}
          >
            <Form.Item label="Tên phòng" name={"name"} rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Số lượng giường"
              name={"quantityBed"}
              rules={rules}
            >
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

            <Form.Item
              label="Trạng thái"
              name={"status"}
              valuePropName="checked"
            >
              <Switch
                checkedChildren="Còn phòng"
                unCheckedChildren="Hết phòng"
              />
            </Form.Item>

            <Form.Item
              label="Loại phòng"
              name={"typeRoom"}
              valuePropName="checked"
            >
              <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

export default EditRoom;
