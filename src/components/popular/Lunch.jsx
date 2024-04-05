import Container from '../Container';
import LunchHead from '../containers/launch/LunchHead';
import LunchMap from '../containers/launch/LunchMap';

function Lunch() {
  return (
    <Container>
      <div className="lg:block  hidden">
        <h1 className="text-center mt-5 mb-5 font-extrabold text-3xl underline">
          Lunch Treding
        </h1>
        <LunchHead />
      </div>
      <div className=" mt-5 ">
        <h1 className="text-center mt-5 font-extrabold text-3xl underline">
          Lunch Recipe
        </h1>
        <LunchMap />
      </div>
      ;
    </Container>
  );
}

export default Lunch;
