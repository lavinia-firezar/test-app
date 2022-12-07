// De retinut ca importul CSS-ului in acest mod este posibil cu ajutorul lui Webpack.
import "./App.css";
import "./styles.css";
// In cazul in care componenta este exportata fara default, o importam folosind acolade.
import { Navigation, ExtraCmp } from "./components/Navigation";
// In cazul in care componenta este exportata default, o importam fara acolade.
import UserClass from "./components/UserClass";
import User from "./components/User";
import FootballClub from "./components/FootballClub";

function App() {
  return (
    <div className="App">
      <ExtraCmp />
      {/* Instantiem (cream) componenta Navigation. */}
      <Navigation />
      {/* Instantiem (cream) componenta User, pasandu-i valorile pentru prop-uri. */}
      <FootballClub name={"PSG"} country={"Franta"} />
      <User
        nume={"Vasile"}
        varsta={20}
        gender={"male"}
        address={"Oradea nr.12"}
      />
      <User nume={"Ana"} varsta={23} gender={"female"} address={"Cluj nr.21"} />
      <User
        nume={"Ion"}
        varsta={9999}
        gender={"male"}
        address={"Timisoara nr.29"}
      />
      {/* Chiar daca este o clasa, componenta este creata la fel */}
      <UserClass nume={"XAA-12"} varsta={29} />
    </div>
  );
}

export default App;
