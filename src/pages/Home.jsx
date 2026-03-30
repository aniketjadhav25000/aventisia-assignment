import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from 'lucide-react';

function Home() {
  const [open, setOpen] = useState(false);
  const items = Array(6).fill({ title: "Test", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...", date: "14/07/2025" });

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-10 overflow-y-auto bg-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">Knowledge Base</h2>
            <div className="flex gap-4">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-100 rounded-lg text-[11px] w-72 outline-none" />
              </div>
              <button onClick={() => setOpen(true)} className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg text-[11px] font-bold flex items-center gap-2 hover:bg-[#4338CA] transition shadow-sm">
                <Plus size={16} /> Create New
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 border border-gray-200 pt-3 px-3 pb-4 rounded-lg">
            {items.map((item, idx) => <Card key={idx} {...item} />)}
          </div>
          {/* Exact Pagination Footer */}
          <div className="mt-20 flex justify-between items-center text-[11px] text-gray-500">
            <span className="font-bold">6 rows</span>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 font-bold">
                <span>Rows per page</span>
                <div className="flex items-center border border-gray-100 rounded px-2 py-1 gap-2 cursor-pointer">
                  <span>10</span> <ChevronDown size={12} />
                </div>
              </div>
              <span className="font-bold">page 1 of 1</span>
              <div className="flex gap-1">
                {[<ChevronsLeft size={14}/>, <ChevronLeft size={14}/>, <ChevronRight size={14}/>, <ChevronsRight size={14}/>].map((icon, i) => (
                  <button key={i} className="p-1 border border-gray-100 rounded text-gray-300 hover:bg-gray-50 transition">{icon}</button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Home;