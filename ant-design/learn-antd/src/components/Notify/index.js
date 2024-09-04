import { Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";

import "./Notify.css";

function Notify() {
  const items = [
    {
      label: <div className="notify__item">
        <div className="notify__item-icon">
          <BellOutlined />
        </div>
        <div className="notify__item-content">
          <div className="notify__item-title">
            Item 1
          </div>
          <div className="notify__item-time">
            8 mins ago
          </div>
        </div>
      </div>,
      key: '0',
    },
    {
      label: "Item 2",
      key: '1',
    },
    {
      label: "Item 3",
      key: '2',
    },
    {
      label: "Item 4",
      key: '3',
    },
    {
      label: "Item 5",
      key: '4',
    },
    {
      label: "Item 6",
      key: '5',
    },
    {
      label: "Item 7",
      key: '6',
    } 
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        dropdownRender={(menu) => (
          <>
            <div className="notify__dropdown">
              <div className="notify__header">
                <div className="notify__header-title">
                  <BellOutlined /> Notification
                </div>
                <Button type="link">View all</Button>
              </div>
              <div className="notify__body">
                {menu}
              </div>
            </div>
          </>
        )}
      >
        <Button icon={<BellOutlined />}></Button>
      </Dropdown>
    </>
  )
}

export default Notify;