import { increment, decrement } from "../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

// con useSelector "consumiamo" i valori dallo stato (sola lettura) , con useDispatch ordini di modifica/azioni dello/sullo stato


function Example(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch= useDispatch();
    return (
        <div>
            <p className="mb-3">Count {count}</p>
            <button 
                className="mb-3"
                aria-label="Increment value"
                onClick={()=>dispatch(increment())}> Incrementa +
            </button>
            <button 
                className="mb-3"
                aria-label="Decrement value"
                onClick={()=>dispatch(decrement())}> Decrementa -
            </button>
        </div>
    );
}

export default Example;