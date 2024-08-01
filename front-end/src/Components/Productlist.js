// src/components/ProductList.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { itemlist } from "./assets/asset";
import "./styles/productstyle.css"

const ProductList = () => {
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(itemlist, 3);

  const chunkArrays = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkss = chunkArrays(itemlist, 5);


  const chunkArra = (array, size) => {
    const result = [];
    for (let i = 0; i < 20; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chun = chunkArra(itemlist, 5);

  const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "450px", width: "100%" }}
            src="https://th.bing.com/th/id/R.a5959263ff129b7bf1c7b578106ef56d?rik=tmn2bH7HecMXKQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fPicture-Plain-HD.jpg&ehk=xQvEklueZmmJuRuwL6YghOZRB6twsklP1vfIAqpRTAs%3d&risl=&pid=ImgRaw&r=0"
            alt="slide-1"
          ></img>
          <Carousel.Caption>
            <div>
              <h5 style={{ color: "black" }}>Exclusive Product New Arrival</h5>
              <div style={{ fontSize: "90px", color: "#575457" }}>
                Organic Coffee
              </div>
              <div style={{ fontSize: "60px", color: "#575457" }}>
                SPECIAL BLEND
              </div>
              <div>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Fresh
                </span>{" "}
                BREAKFAST PRODUCTS ON SALE
              </div>
            </div>
            <h3 style={{ fontSize: "60px" }}>UP To 50% OFF</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "450px", width: "100%" }}
            src="https://getwallpapers.com/wallpaper/full/6/6/0/1224106-plain-hd-wallpapers-2560x1600-for-desktop.jpg"
            alt="slide-2"
          ></img>
          <Carousel.Caption>
            <div>
              <h5 style={{ color: "black" }}>Exclusive Product New Arrival</h5>
              <div style={{ fontSize: "90px", color: "#323132" }}>
                Amla Powder
              </div>
              <div style={{ fontSize: "60px", color: "#4D4A4D" }}>
                INDIAN GOOSEBERRY POWDER
              </div>
              <div>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Fresh Powder
                </span>{" "}
                BREAKFAST PRODUCTS ON SALE
              </div>
            </div>
            <h3 style={{ fontSize: "60px" }}>UP To 70% OFF</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "450px", width: "100%" }}
            src="https://getwallpapers.com/wallpaper/full/5/7/2/1119171-plain-wallpapers-2560x1600-computer.jpg"
            alt="slide-3"
          ></img>
          <Carousel.Caption>
            <div>
              <h5 style={{ color: "black" }}>Exclusive Product New Arrival</h5>
              <div style={{ fontSize: "90px", color: "#575457" }}>
                Fit Low Carb
              </div>
              <div style={{ fontSize: "60px", color: "#575457" }}>
                CANDY BAR
              </div>
              <div>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Sugar free
                </span>{" "}
                BREAKFAST PRODUCTS ON SALE
              </div>
            </div>
            <h3 style={{ fontSize: "60px" }}>UP To 45% OFF</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div style={{ display: "flex", gap: "10%", backgroundColor: "#F4F5F8" }}>
        <div>
          <img
            style={{ height: "40px" }}
            src="https://cdn-icons-png.flaticon.com/128/6831/6831000.png"
            alt="free shipping"
          ></img>
          <h5>FREE SHIPPING</h5>
          <div>Free shipping on all orders over ₹2000.00</div>
        </div>
        <div>
          <img
            style={{ height: "40px" }}
            src="https://cdn-icons-png.flaticon.com/128/5500/5500861.png"
            alt="money back"
          ></img>
          <h5>MONEY BACK GUARANTEE</h5>
          <div>100% money back guarantee</div>
        </div>
        <div>
          <img
            style={{ height: "40px" }}
            src="https://cdn-icons-png.flaticon.com/128/4526/4526832.png"
            alt="online support"
          ></img>
          <h5>ONLINE SUPPORT 24/7</h5>
          <div>Only whatsapp For online support</div>
        </div>
        <div>
          <img
            style={{ height: "40px" }}
            src="https://cdn-icons-png.flaticon.com/128/2058/2058414.png"
            alt="secure payments"
          ></img>
          <h5>SECURE PAYMENTS</h5>
          <div>100% Secure payment in our portal</div>
        </div>
      </div>
      <br></br>
      <div style={{ backgroundColor: "#E9EEF4", width: "100%" }}>
        <h2>Popular Departments</h2>
        <p>Products From These Categories Often Buy</p>
        <h3>Most Popular</h3>
        <p>All our new arrivals in an exclusive brand selection</p>
      </div>
      <div style={{ display: "flex", gap: "5%" }}>
        <div className="sort-by">
          <h4>SORT BY</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {[
              "View All",
              "Antioxidants",
              "Ayurvedic",
              "Digestive Health",
              "General Health",
              "Herbal, Specialty Supplements",
              "Immune Health",
              "Men Health",
              "Organic",
              "Personal Care",
              "Sexual Health",
              "Vitamins, Minerals",
              "Women Health",
            ].map((category, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  value={category}
                />
                <label htmlFor={category} style={{ marginLeft: "8px",color:"#338AF8" }}>
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
        <Carousel>
            {chunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage:
                      'url("https://th.bing.com/th/id/R.2e26cd3c79eabc7666092c68a827e2c9?rik=P9%2fk20yAeemP%2bg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fFree-Plain-HD-Backgrounds-Download.png&ehk=0KSQjpqxMQxyd9Dzgz9B2%2bZsVtPSJCwoEACSmCorjnc%3d&risl=&pid=ImgRaw&r=0")',
                    backgroundSize: "cover",
                    height: "500px",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  {chunk.map((product) => (
                    <Card
                      style={{
                        width: "18rem",
                        display: "inline-flex",
                        height: "370px",
                        margin: "2.5%",
                      }}
                      key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          height: "150px",
                          width: "150px",
                          marginLeft: "20%",
                          marginTop:"8%"
                        }}
                        src={product.image}
                      />
                      <Card.Body>
                        <Card.Title>{product.catgories}</Card.Title>
                        <Card.Text>{product.name}</Card.Text>
                        <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                        <Button style={{border:"none", color:"#4A72A2",fontWeight:"bold"}} variant="outline-primary">
                          {product.price}
                        </Button>
                        <Button
                          variant="secondary"
                        >
                          ADD
                        </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div style={{ backgroundColor: "#E9EEF4", width: "100%" }}>
        <h2>This Week's Specials</h2>
        <p>All our new arrivals in a exclusive brand selection</p>
      </div>
      <div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={true} indicators={false}>
            {chunkss.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage:
                      'url("https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg")',
                    backgroundSize: "cover",
                    height: "500px",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  {chunk.map((product) => (
                    <Card
                      style={{
                        width: "18rem",
                        display: "inline-flex",
                        height: "370px",
                        margin: "2px",
                        boxShadow: "1px 1px 9px 7px #CAC5C3",
                      }}
                      key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          height: "150px",
                          width: "150px",
                          marginLeft: "20%",
                          marginTop:"8%"
                        }}
                        src={product.image}
                      />
                      <Card.Body>
                        <Card.Title>{product.catgories}</Card.Title>
                        <Card.Text>{product.name}</Card.Text>
                        <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                        <Button style={{border:"none", color:"#4A72A2",fontWeight:"bold"}} variant="outline-primary">
                          {product.price}
                        </Button>
                        <Button
                          variant="secondary"
                        >
                          ADD
                        </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


        <div className="promotion-container" >
      <div className="promotion-header">
        <p className="exclusive-product">Exclusive Product New Arrival</p>
        <h1 className="product-name">Nuturemite Coffee</h1>
        <h2 className="special-blend">SPECIAL BLEND</h2>
        <p className="fresh">Fresh!</p>
        <div className="special-offers">
        <h2>Special Offers</h2>
        <p>All our new arrivals in an exclusive brand selection</p>
      </div>
      </div>
      <div className="promotion-image">
        <img src="https://nuturemite.info/wp-content/uploads/2022/11/1074372-1-scaled.jpg" alt="Nuturemite Banana Fruit Powder" />
        <div className="image-text">
          <p className="low-carb">Low Carb</p>
          <p className="brand-name">Nuturemite</p>
          <p className="product-description">Nuturemite-Banana-Fruit-Powder</p>
        </div>
      </div>
     
    </div>

<div>
<div>
            {chun.map((chunk, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  backgroundColor:"#E6ECF2",
                    backgroundSize: "cover",
                    height: "500px",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  {chunk.map((product) => (
                    <Card
                      style={{
                        width: "18rem",
                        display: "inline-flex",
                        height: "370px",
                        margin: "3px",
                        boxShadow: "1px 1px 9px 7px #CAC5C3",
                        border:"none"
                      }}
                      key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          height: "150px",
                          width: "150px",
                          marginLeft: "20%",
                          marginTop:"8%"
                        }}
                        src={product.image}
                      />
                      <Card.Body>
                        <Card.Title>{product.catgories}</Card.Title>
                        <Card.Text>{product.name}</Card.Text>
                        <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                        <Button style={{border:"none", color:"#4A72A2",fontWeight:"bold"}} variant="outline-primary">
                          {product.price}
                        </Button>
                        <Button
                          variant="secondary"
                        >
                          ADD
                        </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
            
            ))}
        </div>
</div>


    </div>
  );
};

export default ProductList;
