  
  
  export function Navbar({setIsOpen}){
  
    return(
        <div className=" flex justify-between  items-center  h-17 px-10 shadow-xl  ">
           <div className="text-3xl cursor-pointer block  font-medium"  onClick={() => setIsOpen(true) } >☰</div>
          <div className="  "><h1 className="text-2xl font-extrabold text-blue-500 ">KANBAN BOARD</h1></div>
          <div></div>
        </div>
    )
  }