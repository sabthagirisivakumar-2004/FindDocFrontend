import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Doctor.css";
function BasicExample({ item }) {
  return (
    <div className="Dcontainer">
      <Card
        style={{
          width: "18rem",
          marginTop: "10px",
          marginLeft: "55px",
          backgroundColor: "",
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: "10px",
        }}
        className="Dcard"
      >
        <Card.Img
          variant="top"
          src={item.url}
          width={"286px"}
          height={"180px"}
          style={{ borderRadius: "10px" }}
        />
        <Card.Body>
          <Card.Title style={{ paddingLeft: "10px" }}>
            <h3>{item.name}</h3>
          </Card.Title>
          <Card.Text style={{ paddingLeft: "10px" }}>
            {item.specialty}
          </Card.Text>
          <h5 style={{ paddingLeft: "10px" }}>{item.location}</h5>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
