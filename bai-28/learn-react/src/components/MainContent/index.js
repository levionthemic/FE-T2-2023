import { FaCss3Alt, FaDelicious } from "react-icons/fa";

function MainContent() {
  let name = "Đặng Phương Nam";
  const css = {
    // color: "red",
    // backgroundColor: "blue",
  };
  return (
    <>
      <div className="box">
        <div className="test" style={css}>
          Xin chào {name}!
        </div>
        <div className="test" style={css}>
          Xin chào {name}!
        </div>
        <FaCss3Alt style={{fontSize: "50px"}}/>
        <FaDelicious />
      </div>
    </>
  );
}

export default MainContent;
