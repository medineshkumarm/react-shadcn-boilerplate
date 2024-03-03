import CardGrid from "./UI/CardGrid";
import { Carousels } from "./UI/Carousels";
import { NavBar } from "./UI/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <main className="w-full ">
        <CardGrid />
      </main>
      <Carousels />
    </>
  );
}

export default App;
