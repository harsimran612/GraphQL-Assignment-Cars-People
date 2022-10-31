import { useLazyQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GET_PERSON } from "../../queries";
import PersonCard from "../card/person-card";
import ErrorMessage from "../miscellaneous/error-message";
import Loader from "../miscellaneous/loader";

const PersonDetail = () => {
  const { id } = useParams();
  const person = useSelector((state) =>
    state.people.persons.find((p) => p.id === id)
  );

  const [loadPerson, { loading, error, data }] = useLazyQuery(GET_PERSON, {
    variables: { id },
  });
  let personData = null;
  
  if (person) {
    personData = { person };
  } else {
    if (!data && !loading && !error) {
      loadPerson();
    }
    personData = data;
  }

  return (
    <>
      <Loader isLoading={loading} />
      {error ? <ErrorMessage message={error.message} /> : null}
      {personData ? (
        <>
          <Link
            to="/"
            style={{
              marginLeft: "50px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            GO BACK HOME
          </Link>
          <PersonCard
            key={personData.person.id}
            person={personData.person}
            isDetailPage={true}
          />
        </>
      ) : null}
      ;
    </>
  );
};

export default PersonDetail;
