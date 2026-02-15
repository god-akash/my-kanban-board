import React from 'react';

function KanbanBoard() {
    // const [isFormOpen, setIsFormOpen] = useState(false);
    const columns =[
        {
            key:"firsts",
            title:"To Do",
            color:"text-blue-400"
        },
        {
            key:"second",
             title:"In Progress",
            color:"text-purple-400"
        },
        {
            key:"third",
             title:"Done",
            color:"text-green-400"
        },
    ];
    return (
        <div className='w-full h-[calc(99vh-4rem)] p-6 flex flex-col md:flex-row gap-6 text-slate-100 items-start overflow-x-auto'>
            
            
            <div className='md:h-full border-2 '>
                <div className='md:h-96 md:w-110 h-64 w-full rounded-2xl border border-slate-400 shadow-xl hidden md:flex items-center justify-center'>
                    <span className="text-slate-500 font-medium">Graph</span>
                </div>
                <div className=' border border-slate-400 rounded-2xl  p-5 my-5  '>
                    <button className="add-task-btn-primary " >
                        + New Task
                    </button>
                </div>
                <div className="mt-4"></div>
            </div>

            {/* Column s */}
            {columns.map( (col)=>(
                <div key={col.key} className='shrink-0 md:w-80 w-full md:h-[80vh] h-96 rounded-2xl border border-slate-300 shadow-xl flex flex-col'>
                <div className="p-4 border-b border-slate-700">
                    <h2 className={`font-bold text-lg ${col.color}`}>{col.title}</h2>
                </div>
                <div className="p-3 flex-1 overflow-y-auto scroll-smooth custom-scrollbar no-scrollbar">
                </div>
            </div>
            )
            )};
            
        </div>
    );
}

export default KanbanBoard;