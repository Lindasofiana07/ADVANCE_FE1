import Header from "../components/homepage";
import Beranda from "../components/beranda";
import {
  Lanjut,
  Rating,
  Filmtrending,
  Rilisbaru,
  Footero,
} from "../components/lanjutnontonfilm";

function Berandapage() {
  return (
    <div className="berandapage">
      <Header />
      <Beranda />
      <Lanjut />
      <Rating />
      <Filmtrending />
      <Rilisbaru />
      <Footero />
    </div>
  );
}

export default Berandapage;
