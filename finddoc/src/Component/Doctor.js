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
          
          
          borderRadius: "10px",
          boxShadow:"0 4px 8px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
        }}
        className="Dcard"
      >
        <Card.Img
          variant="top"
          src={item.url}
          width={"288px"}
          height={"180px"}
          style={{ borderStartEndRadius:"20px",borderTopLeftRadius:"20px"}}
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
