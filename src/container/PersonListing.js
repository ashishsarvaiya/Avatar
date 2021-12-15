import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const PersonPage = () => {
  const [details, setDetails] = useState(null);

  const fetchPersons = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    setDetails(response.data);
  };
  useEffect(() => {
    fetchPersons();
  }, []);
  const renderList = !details ? (
    <img
      src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}
      alt="loading..."
    />
  ) : (
    details.map((product) => {
      const { id, name, email, phone, company, website, address, username } =
        product;
      return (
        <div className="row" key={id}>
          <div className="ui link cards">
            <div className="card">
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                alt={name}
              />
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta">
                  <MailOutlined />
                  {" " + email}
                </div>
                <div className="meta">
                  <PhoneOutlined /> {" " + phone}
                </div>
                <div className="meta">
                  <GlobalOutlined /> {" " + website}
                </div>
                <div className="meta">
                  <ShopOutlined /> {company ? " " + company.name : ""}
                </div>
                <div className="meta">
                  <EnvironmentOutlined />
                  {address ? address.street + " " + address.suite : ""}
                  <br />
                  {address ? address.city + " " + address.zipcode : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
  return <div className="ui grid container">{renderList}</div>;
};

export default PersonPage;
