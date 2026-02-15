import React, { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/Sidebar";

function App( {}) {
  const [IsOpen,setIsOpen]=useState(false);


  return (
    <div className="App h-screen w-screen">
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar IsOpen={IsOpen} setIsOpen={setIsOpen} />
      {/* wrapper  */}
      <div>
        <KanbanBoard/>
      </div>
    </div>
  );
}

export default App;
