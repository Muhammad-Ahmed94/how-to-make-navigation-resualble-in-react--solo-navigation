import Link from "./Link";
import Route from "./Route";
import Button from "./component/Button";

function App() {
  return (
    <div>
      <Link to="/accordion">Acoortdion</Link>
      <Link to="/button">---dropdown</Link>

      <div>
        <Route path="/button">
          <Button />
        </Route>
      </div>
    </div>
  );
}

export default App;
