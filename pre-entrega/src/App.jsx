import ItemListContainer from "./components/Navbar/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a perfumerias Marovi!" />
    </>
  );
}

export default App;
