import { Col, List, Row } from "antd";
import { useSelector } from "react-redux";
import PersonCard from "../card/person-card";
import Title from "../title";

const PersonList = () => {
  const persons = useSelector((state) => state.people.persons);

  return (
    <Row>
      <Col span={24}>
        {persons.length ? <Title text="People List" level={3} /> : null}
        <List
          grid={{ gutter: 20, column: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            padding: "0 20px",
            
          }}
        >
          <List.Item>
            {persons.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </List.Item>
        </List>
      </Col>
    </Row>
  );
};

export default PersonList;
