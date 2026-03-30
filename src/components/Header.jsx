import { Search, Bell, ChevronDown } from 'lucide-react';

function Header() {
  return (
    <div className="bg-[#1E1B4B] h-14 flex items-center justify-between px-6 text-white w-full z-10 shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="\src\assets\Aventisia logo.jpg" alt="Logo" className="h-7 w-auto object-contain rounded" />
          <span className="font-bold text-xl tracking-tight">Worcspace</span>
        </div>
        <div className="flex items-center bg-[#2D2A5D] px-3 py-1.5 rounded-md text-[11px] ml-4 cursor-pointer hover:bg-[#373370]">
          Worcspace 1 <ChevronDown size={14} className="ml-2 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
          <input 
            className="w-full bg-[#2D2A5D] border-none rounded-md py-2 px-10 text-[11px] text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 ring-indigo-500/50" 
            placeholder="Search..." 
          />
          <span className="absolute right-3 top-2.5 text-[10px] text-gray-500 border border-gray-600 px-1.5 rounded">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-5 text-gray-300">
        <Bell size={18} className="cursor-pointer hover:text-white" />
        <div className="w-8 h-8 bg-[#818CF8] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#2D2A5D]">GK</div>
      </div>
    </div>
  );
}

export default Header;