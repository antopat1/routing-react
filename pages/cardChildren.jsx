import Navbar from "../src/components/navBar";
import CardItem from "../src/components/cardItem";
import { useSelector} from "react-redux";
import {Outlet, Link } from "react-router-dom";

function CardsChildren() {
    const cities = useSelector((state) => state.cities.value);
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold mb-10">Pagina children</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id} style={{ textDecoration: 'none', color: 'inherit', width: 'calc(25% - 10px)', marginBottom: '20px' }} >
                        <CardItem
                            title={city.title}
                            isVisited={city.isVisited}
                            imgURL={city.imgURL}>
                            {city.description}
                        </CardItem>
                    </Link>
                ))}
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Outlet />
                </div>
        </>
    )
}

export default CardsChildren;