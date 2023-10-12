function Sidebar(){
let isvisible = true 
function close(){
    isvisible = false
}


    return (<div className= "sidebar">
<button onClick= {close}>Zamknij </button>
    Ustawienia
    
    </div>)
}