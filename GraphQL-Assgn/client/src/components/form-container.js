import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import AddCarForm from "./form/add-car";
import AddPersonForm from "./form/add-person";
import Title from "./title";

const FormContainer = () => {
  // const personsCount = useSelector((state) => state.people.persons.length);

  return (
    <Row  align="middle">
      <Col>
        <Row style={{ justifyContent:"center", marginLeft:"100px" }}>
          <Col>
            <Title text={"Add Person"} level={4} />
            <AddPersonForm />
          </Col>
        </Row>

        <Row style={{ marginLeft:"100px" }}>
          <Col>
            
              <Title text={"Add Car"} level={4} />
              <AddCarForm />
            
          </Col>
        </Row>
      </Col>
    </Row>


  );
};

export default FormContainer;
