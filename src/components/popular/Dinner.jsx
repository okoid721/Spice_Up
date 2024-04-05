import Container from '../Container';
import DinnerHead from '../containers/dinner/DinnerHead';
import DinnerMap from '../containers/dinner/DinnerMap';
function Dinner() {
  return (
    <Container>
      <div className="lg:block  hidden">
        <h1 className="text-center mt-5 mb-5 font-extrabold text-3xl underline">
          Dinner Treding
        </h1>
        <DinnerHead />
      </div>
      <div className=" mt-5 ">
        <h1 className="text-center mt-5 font-extrabold text-3xl underline">
          Dinner Recipes
        </h1>
        <DinnerMap />
      </div>
      ;
    </Container>
  );
}

export default Dinner;
