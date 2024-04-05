import Container from '../Container';
import SmallchopHead from '../containers/smallchop/SmallchopHead';
import SmallchopMap from '../containers/smallchop/SmallchopMap';
function SmallChop() {
  return (
    <Container>
      <div className="lg:block  hidden">
        <h1 className="text-center mt-5 mb-5 font-extrabold text-3xl underline">
          SmallChop Treding
        </h1>
        <SmallchopHead />
      </div>
      <div className=" mt-5 ">
        <h1 className="text-center mt-5 font-extrabold text-3xl underline">
          SmallChop Recipes
        </h1>
        <SmallchopMap />
      </div>
      ;
    </Container>
  );
}
export default SmallChop;
