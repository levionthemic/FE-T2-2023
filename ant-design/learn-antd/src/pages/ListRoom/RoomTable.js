import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
  const { rooms, onReload } = props;

  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số giường",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "Số người",
      dataIndex: "quantityPeople",
      key: "quantityPeople",
    },
    {
      title: "Loại phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
      render: (_, record) => {
        return (
          <>
            {record.typeRoom ? (
              <Badge text="VIP" color="purple" />
            ) : (
              <Badge text="Thường" color="grey" />
            )}
          </>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return (
          <>
            {record.status ? (
              <Badge text="Còn phòng" color="green" />
            ) : (
              <Badge text="Hết phòng" color="red" />
            )}
          </>
        );
      },
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <DeleteRoom record={record} onReload={onReload}/>
          </>
        );
      },
    }
  ];
  return (
    <>{rooms && <Table dataSource={rooms} columns={columns} rowKey={"id"} />}</>
  );
}

export default RoomTable;
