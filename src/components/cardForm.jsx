import { useState } from 'react';
import { useDispatch} from "react-redux";
import {add} from "../../redux/citiesSlice";


function CardForm() {
  const dispatch = useDispatch();
  const [formDataState, setFormData] = useState({
    name: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value; // all'interno di tutti i possibili dati del form ne intercetta la tipologia
    setFormData(
      { ...formDataState, 
        [name]: inputValue, }
    )
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: Math.random(),
      name: formDataState.name,
      description: formDataState.description,
      imgURL: formDataState.imgURL,
      isVisited: formDataState.isVisited,
    };
    setFormData({
      name: "",
      description: "",
      imgURL: "",
      isVisited: false,
    });
    dispatch(add(newCard));
  };

  return (
    <form onSubmit={hundleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">

      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" value={formDataState.name} onChange={handleInputChange}></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="description">Descrizione</label>
        <textarea name="description" value={formDataState.description} onChange={handleInputChange}></textarea>
      </div>


      <div className="flex flex-col">
        <label htmlFor="imgURL">Immagine</label>
        <input type="text" name="imgURL" value={formDataState.imgURL} onChange={handleInputChange}></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="checkbox">Visitata?</label>
        <input type="checkbox" name="isVisited" checked={formDataState.isVisited} onChange={handleInputChange}></input>
      </div>


      <button className="bg-zinc-950" type="submit">Aggiungi Card</button>
    </form>
  )
}

export default CardForm;