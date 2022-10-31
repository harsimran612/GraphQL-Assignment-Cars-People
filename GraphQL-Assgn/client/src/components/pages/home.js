import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../form-container";
import PersonList from "../list/person-list";
import Loader from "../miscellaneous/loader";
import ErrorMessage from "../miscellaneous/error-message";

import { setPerson, setDataFetched } from "../../store/person";

import { GET_PERSONS } from "../../queries";

const Home = () => {
  const dataFetched = useSelector((state) => state.people.dataFetched);

  const { loading, error, data } = useQuery(GET_PERSONS);
  const dispatch = useDispatch();
  if (data && !dataFetched) {
    dispatch(setDataFetched());
    dispatch(setPerson(data.people));
  }

  return (
    <>
      <Loader isLoading={loading} />
      {error ? <ErrorMessage message={error.message} /> : null}
      {data ? (
        <>
          <FormContainer 
          
          style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
          <PersonList />
        </>
      ) : null}
    </>
  );
};

export default Home;
