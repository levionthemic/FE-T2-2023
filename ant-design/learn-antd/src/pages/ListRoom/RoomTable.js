import { Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

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
              <>
                <Tooltip title="Phòng VIP chuẩn 5 sao" color="purple">
                  <Tag color="purple">VIP</Tag>
                </Tooltip>
                {/* <Badge text="VIP" color="purple" /> */}
              </>
              
            ) : (
              <Tooltip title="Phòng thường chuẩn 3 sao">
                <Tag color="grey">Thường</Tag>
              </Tooltip>
              
              // <Badge text="Thường" color="grey" />
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
              <Tooltip title="Phòng chưa có khách đặt" color="green">
                <Tag color="green">Còn phòng</Tag>
              </Tooltip>
              // <Badge text="Còn phòng" color="green" />
            ) : (
              <Tooltip title="Phòng đã có khách đặt" color="red">
                <Tag color="red">Hết phòng</Tag>
              </Tooltip>
              // <Badge text="Hết phòng" color="red" />
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
            <EditRoom record={record} onReload={onReload}/>
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
