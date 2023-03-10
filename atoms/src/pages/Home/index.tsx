import { CardPlatinium } from "../../components/CardPlatinium";
import { FormsLogin } from "../../components/Zmolecules/FormsLogin";

export const Home = () => {
  return (
    <div className="container-main">
      <h1>Esses são os compoenentes existentes:</h1>
      <div className="container">
        <CardPlatinium />
        <FormsLogin></FormsLogin>
      </div>
    </div>
  );
};
