import { Fragment } from "react";
import Header from "./components/layout/Header";
import MealsSummary from "./components/meals/MealsSummary";
function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;
