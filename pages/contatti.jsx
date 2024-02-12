import Navbar from "../src/components/navBar";
import useCounterText from "../src/hooks/useCounterTestHook";

function Contatti(){
 useCounterText();
 return(
    <>
     <Navbar></Navbar>
     <h1 className="text-3xl font-bold">Pagina Contatti</h1>
    </>
    );
}

export default Contatti;