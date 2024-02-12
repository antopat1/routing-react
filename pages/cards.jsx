import Navbar from "../src/components/navBar";
import CardItem from "../src/components/cardItem";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-10">
        Pagina con tutte le card con il link a sottopagina
      </h1>
       
      {/* className="grid grid-cols-4 gap-5" non funziona classe Talwind.. ?*/}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}> 
        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id} style={{ textDecoration: 'none', color: 'inherit', width: 'calc(25% - 10px)', marginBottom: '20px' }}>
            <CardItem
              title={city.title}
              isVisited={city.isVisited}
              imgURL={city.imgURL}>
              {city.description}
            </CardItem>
          </Link>
        ))}
      </div>

    </>
  );
}

export default Cards;