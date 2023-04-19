import Navbar from "../../components/navbar/Navbar";
import PriceForm from "../../components/priceForm/PriceForm";

function Price() {
  return (
    <div>
      <Navbar backgroundColor={true} borderBottom={true} />
      <PriceForm />
    </div>
  );
}
export default Price;
