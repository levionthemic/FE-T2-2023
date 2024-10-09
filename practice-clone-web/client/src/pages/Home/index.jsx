import { Link } from "react-router-dom";
import { Carousel, Col, Menu, Row, Tabs } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
} from "@ant-design/icons";

import "./Home.scss";

import logo from "../../images/logo.png";
import mainBanner from "../../images/main-banner-2-1903x975.jpg";
import categoryImage1 from "../../images/category-image1.jpg";
import categoryImage2 from "../../images/category-image2.jpg";
import categoryImage3 from "../../images/category-image3.jpg";
import { useEffect, useState } from "react";


function Home() {

  const { loading, setLoading } = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, []);

  const menuItems = [
    {
      label: <Link>Sculpture</Link>,
      key: "sculpture",
      children: [
        {
          type: "group",
          label: <Link>Armchairs</Link>,
          children: [
            {
              label: <Link>Poufs</Link>,
              key: "poufs",
            },
            {
              label: <Link>Easy Chairs</Link>,
              key: "easy-chairs",
            },
            {
              label: <Link>Lounge Chairs</Link>,
              key: "lounge-chairs",
            },
            {
              label: <Link>Sofas</Link>,
              key: "sofas",
            },
          ],
        },
        {
          type: "group",
          label: <Link>Components</Link>,
          children: [
            {
              label: <Link>Table Tops</Link>,
              key: "table-tops",
            },
            {
              label: <Link>Table Bases</Link>,
              key: "table-bases",
            },
            {
              label: <Link>Drawers</Link>,
              key: "dwawers",
            },
            {
              label: <Link>Cabinet Doors</Link>,
              key: "cabinet-doors",
            },
          ],
        },
        {
          type: "group",
          label: <Link>Tables</Link>,
          children: [
            {
              label: <Link>Game Tables</Link>,
              key: "game-tables",
            },
            {
              label: <Link>Stools</Link>,
              key: "stools",
            },
            {
              label: <Link>Console Tables</Link>,
              key: "console-tables",
            },
            {
              label: <Link>Coffee Tables</Link>,
              key: "coffee-tables",
            },
          ],
        },
      ],
    },
    {
      label: <Link>Frames</Link>,
      key: "frames",
    },
    {
      label: <Link>Relief</Link>,
      key: "reliefs",
    },
    {
      label: <Link>Statue</Link>,
      key: "statue",
    },
    {
      label: <Link>More</Link>,
      key: "more",
      children: [
        {
          label: <Link>Wardrobes</Link>,
          key: "wardrobes",
        },
        {
          label: <Link>Maquette</Link>,
          key: "maquette",
        },
        {
          label: <Link>Ceramic</Link>,
          key: "ceramic",
        },
        {
          label: <Link>Lighting</Link>,
          key: "lighting",
        },
        {
          label: <Link>Blogs</Link>,
          key: "blogs",
        },
      ],
    },
  ];

  const tabItems = [
    {
      label: "Sculpture",
      key: "1",
      children: <>Home</>
    },
    {
      label: "Maquette",
      key: "2",
      children: ""
    },
    {
      label: "Figurines",
      key: "3",
      children: ""
    },
    {
      label: "Ceramic",
      key: "4",
      children: ""
    }
  ]

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <Menu
                className="header__menu"
                mode="horizontal"
                items={menuItems}
              />
            </div>

            <div className="header__nav-right">
              <div className="header__search">
                <SearchOutlined />
              </div>
              <div className="header__user">
                <UserOutlined />
              </div>
              <div className="header__cart">
                <ShoppingCartOutlined />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1 */}
      <div className="section-one">
        <Carousel style={{ width: "100vw", margin: 0 }}>
          <div>
            <img src={mainBanner} alt={"background"} />
          </div>
        </Carousel>
      </div>

      {/* Section 2 */}
      <div className="section-two">
        <div className="container">
          <Row justify={"center"}>
            <Col span={6}>
              <div className="wrap">
                <div className="wrap__icon">
                  <TruckOutlined />
                </div>
                <div className="wrap__content">
                  <h5 className="wrap__title">Free Shipping</h5>
                  <p className="wrap_desc">Lorem Ipsum is simply</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrap">
                <div className="wrap__icon">
                  <TruckOutlined />
                </div>
                <div className="wrap__content">
                  <h5>Online Support</h5>
                  <p>Lorem Ipsum is simply</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrap">
                <div className="wrap__icon">
                  <TruckOutlined />
                </div>
                <div className="wrap__content">
                  <h5>Money Back</h5>
                  <p>Lorem Ipsum is simply</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="wrap">
                <div className="wrap__icon">
                  <TruckOutlined />
                </div>
                <div className="wrap__content">
                  <h5>Our Services</h5>
                  <p>Lorem Ipsum is simply</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-three">
        <div className="container">
          <div className="inner-title">
            <h2>Top Categories</h2>
          </div>
          <div className="inner-list">
            <div className="inner-item">
              <h4>Ceramic Flower Vase</h4>
              <img src={categoryImage1} alt=""/>
            </div>
            <div className="inner-item">
              <h4>Ceramic Modern Art</h4>
              <img src={categoryImage2} alt=""/>
            </div>
            <div className="inner-item">
              <h4>Home Decor Art</h4>
              <img src={categoryImage3} alt=""/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section-four">
        <div className="container">
          <div className="inner-title">
            <h2>Featured Products</h2>
          </div>
          <div className="inner-list">
            <Tabs defaultActiveKey="1" items={tabItems}></Tabs>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
