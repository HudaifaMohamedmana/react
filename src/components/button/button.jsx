export default function Button({setCounter}) {

    return(

        <>
        <button onClick={()=> setCounter((state) => state += 1)}> 
            Increment
            </button>
        </>
    )

    
}