'use client'

export default function InteractiveCard({children,contentName}:{children:React.ReactNode, contentName:string}){
    function onCardSelected(){
        alert("You Select "+ contentName)
    }
    
    function onCardMouseAction(event:React.SyntheticEvent) {
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg')
        }
    }

    return(
        <div className="w-full h-[300px] bg-white rounded-lg shadow-lg" 
        // <div className="font-mono text-aliceblue w-1/5 h-[300px] bg-blue-900 rounded-lg shadow-2xl" 
        // onClick={()=>onCardSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)} >
            {children}
        </div>
    );
}