import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoom } from "../../services/roomsService";

function DeleteRoom(props) {
  const { record, onReload } = props;

  const handleDelete = async () => {
    const response = await deleteRoom(record.id);
    if (response) {
      alert("Đã xóa phòng thành công!");
      onReload();
    } else {
      alert("Xóa không thành công!");
    }
  };

  return (
    <>
      <Popconfirm title="Chắc chắn xóa?" onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  );
}

export default DeleteRoom;
