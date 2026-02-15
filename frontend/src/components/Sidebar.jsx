
export  const Sidebar = ( {IsOpen,setIsOpen})=>{
    return(
       <>
        {IsOpen && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300  ${
          IsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 font-bold text-xl border-b flex flex-row justify-between">
          <div  className="">Menu</div>
          <div  className=" cursor-pointer font-light"  onClick={() => setIsOpen(false)}>X</div>
        </div>

        <ul className="p-5 space-y-3">
          <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-500 cursor-pointer">Help</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
        </ul>
      </div>
       </>
    )
};