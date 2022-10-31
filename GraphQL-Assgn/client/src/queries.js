import { gql } from "@apollo/client";

export const GET_PERSONS = gql`
  {
    people {
      id
      firstname
      lastname
      cars {
        id
        year
        make
        model
        price
        personId
      }
    }
  }
`;

export const GET_PERSON = gql`
  query person($id: String!) {
    person(id: $id) {
      id
      firstname
      lastname
      cars {
        id
        year
        make
        model
        price
        personId
      }
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation updatePerson($id: String!, $firstname: String!, $lastname: String!) {
    updatePerson(id: $id, firstname: $firstname, lastname: $lastname) {
      id
      firstname
      lastname
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateCar(
    $id: String!
    $year: String!
    $make: String!
    $model: String!
    $price: String!
    $personId: String!
  ) {
    updateCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const REMOVE_PERSON = gql`
  mutation deletePerson($id: String!) {
    deletePerson(id: $id) {
      id
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation deleteCar($id: String!) {
    deleteCar(id: $id) {
      id
    }
  }
`;

export const ADD_PERSON = gql`
  mutation createPerson($id: String!, $firstname: String!, $lastname: String!) {
    createPerson(id: $id, firstname: $firstname, lastname: $lastname) {
      id
      firstname
      lastname
    }
  }
`;

export const ADD_CAR = gql`
  mutation createCar(
    $id: String!
    $year: String!
    $make: String!
    $model: String!
    $price: String!
    $personId: String!
  ) {
    createCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;
