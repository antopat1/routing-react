import { useEffect } from "react";

function useCounterText(){
    useEffect(()=>{
        const intervalID= setInterval(()=>{
            const randomNumber = Math.floor(Math.random()*100)
            console.log(randomNumber)
        },1000)
        
        //per far si che quando esco dal componente pulisco e non continui l'esecuzione grazie alla pulizia intevalID
        return () =>{
            clearInterval(intervalID)
        }
    },[])
}

export default useCounterText

