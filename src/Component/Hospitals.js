import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Hospitals.css";
import { Link, useNavigate } from "react-router-dom";
function BasicExample({ item }) {
  const navigate = useNavigate();
  const Hdetails = () => {
    navigate(`/Hdetails/${item.id}`);
  };
  return (
    <div className="Hcontainer" onClick={Hdetails}>
      <Card
        style={{
          width: "18rem",
          marginTop: "10px",
          marginLeft: "55px",
          backgroundColor: "",

          boxShadow: "0 4px 8px 3px rgba(0, 0, 0, 0.2)",
          borderRadius: "20px",
        }}
        className="Hcard"
      >
        <Card.Img
          variant="top"
          src={item.himg}
          width={"288px"}
          height={"180px"}
          style={{ borderStartEndRadius: "20px", borderTopLeftRadius: "20px" }}
        />
        <Card.Body>
          <Card.Title style={{ paddingLeft: "10px" }}>
            <h3>{item.hname}</h3>
          </Card.Title>
          <Card.Text style={{ paddingLeft: "10px" }}>
            {item.hlocation}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
