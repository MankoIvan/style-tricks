import OrbitalSpinner from "./components/OrbitalSpinner/OrbitalSpinner";
import SimpleCard from "./components/SimpleCard/SimpleCard";

const anims = [
  {
    component: <OrbitalSpinner />,
    title: "Orbital Spinner"
  },
]

function App() {
  return (
    <>
      <div className="row">
        {anims.map((anim) => <SimpleCard component={anim.component} title={anim.title} />)}
      </div>
    </>
  );
}

export default App;
