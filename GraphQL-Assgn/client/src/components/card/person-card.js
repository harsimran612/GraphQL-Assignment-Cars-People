import { useMutation } from "@apollo/client";
import { Card } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_PERSON, UPDATE_PERSON } from "../../queries";
import { removePerson, updatePerson } from "../../store/person";

import EditPersonForm from "../form/edit-person";
import CardHeader from "../miscellaneous/card-header";
import Title from "../title";
import CarCard from "./car-card";

const PersonCard = ({ person, isDetailPage = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [updatePersonMutation] = useMutation(UPDATE_PERSON);
  const [removePersonMutation] = useMutation(REMOVE_PERSON);

  const handleEdit = (updatedValues) => {
    dispatch(
      updatePerson({
        ...person,
        ...updatedValues,
      })
    );
    updatePersonMutation({
      variables: {
        id: person.id,
        ...updatedValues,
      },
    });
    setIsEditing(false);
  };
  const handleDelete = (personId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this person? This action cannot be undone."
    );
    if (!confirm) {
      return;
    }
    dispatch(removePerson(personId));
    removePersonMutation({
      variables: {
        id: personId,
      },
    });
  };

  return (
    <Card
      headStyle={{
        backgroundColor: "#fdfdfd",
      }}
      title={
        isEditing ? (
          <EditPersonForm
            saveOnClick={handleEdit}
            cancelOnClick={() => {
              setIsEditing(false);
            }}
            firstname={person.firstname}
            lastname={person.lastname}
          />
        ) : isDetailPage ? (
          person.firstname + " " + person.lastname
        ) : (
          <CardHeader
            title={person.firstname + " " + person.lastname}
            editOnClick={() => setIsEditing(true)}
            deleteOnClick={() => handleDelete(person.id)}
          />
        )
      }
      style={{
        margin: isDetailPage ? "50px" : "0px",
        marginBottom: "20px",
      }}
      actions={
        isDetailPage
          ? []
          : [
              <Link
                to={`/people/${person.id}`}
                style={{
                  textAlign: "left",
                  marginLeft: "14px",
                  fontWeight: "bold",
                  color: "#acafb5",
                  display: "inline",
                }}
              >
                LEARN MORE
              </Link>,
            ]
      }
    >
      <div
        style={{
          display: "table-row",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
        }}
      >
        {person.cars.length ? (
          person.cars.map((car) => (
            <CarCard
              key={car.id}
              personCar={car}
              personName={`${person.firstname} ${person.lastname}`}
              isDetailPage={isDetailPage}
            />
          ))
        ) : (
          <Title text={"No Cars Available"} level={3} />
        )}
      </div>
    </Card>
  );
};

export default PersonCard;
