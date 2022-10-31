import { useMutation } from "@apollo/client";
import { Card, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_CAR, UPDATE_CAR } from "../../queries";
import { moveCarToPerson, removeCar, updateCar } from "../../store/person";
import EditCarForm from "../form/edit-car";
import CardHeader from "../miscellaneous/card-header";

const Text = Typography.Text;

const CarCard = ({ personCar, personName, isDetailPage = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [updateCarMutation] = useMutation(UPDATE_CAR);
  const [removeCarMutation] = useMutation(REMOVE_CAR);

  const handleEdit = (updatedValues) => {
    if (updatedValues.personId !== personCar.personId) {
      dispatch(
        moveCarToPerson({
          oldPersonId: personCar.personId,
          newPersonId: updatedValues.personId,
          carId: personCar.id,
        })
      );
    }
    dispatch(
      updateCar({
        id: personCar.id,
        ...updatedValues,
      })
    );
    updateCarMutation({
      variables: {
        id: personCar.id,
        ...updatedValues,
        year: updatedValues.year.toString(),
        price: updatedValues.price.toString(),
      },
    });
    setIsEditing(false);
  };
  const handleDelete = (carId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Car? This action cannot be undone."
    );
    if (!confirm) {
      return;
    }
    dispatch(removeCar({ personId: personCar.personId, carId: personCar.id }));
    removeCarMutation({
      variables: {
        id: carId,
      },
    });
  };

  return isEditing ? (
    <EditCarForm
      make={personCar.make}
      model={personCar.model}
      year={Number(personCar.year)}
      price={Number(personCar.price)}
      personId={personCar.personId}
      cancelOnClick={() => setIsEditing(false)}
      saveOnClick={handleEdit}
    />
  ) : (
    <Card
      type="inner"
      title={
        isDetailPage ? (
          "Car Details"
        ) : (
          <CardHeader
            title={personCar.make + " " + personCar.model } 
            editOnClick={() => setIsEditing(true)}
            deleteOnClick={() => handleDelete(personCar.id)}
          />
        )
      }
    >
      <div
        style={{
          display: "grid",
          gap: "5px",
          width: "1200px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fit, 1fr)",
        }}
      >
        <Text>Make: {personCar.make}</Text>
        <Text>Model: {personCar.model}</Text>
        <Text>Year: {personCar.year}</Text>
        <Text>Price: ${Number(personCar.price).toFixed(2)}</Text>
        <Text>Person: {personName}</Text>
      </div>
    </Card>
  );
};

export default CarCard;
