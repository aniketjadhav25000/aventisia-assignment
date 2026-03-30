import { Search, Bell, ChevronDown } from 'lucide-react';
import logo from '../assets/Aventisia logo.jpg'; 

function Header() {
  return (
    <div className="bg-[#1E1B4B] h-14 flex items-center justify-between px-6 text-white w-full z-10 shrink-0">
      {/* Left Section: Branding & Workspace */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Using the imported logo variable for production safety */}
          <img 
            src={logo} 
            alt="Logo" 
            className="h-7 w-auto object-contain rounded" 
          />
          <span className="font-bold text-xl tracking-tight">Worcspace</span>
        </div>
        
        <div className="flex items-center bg-[#2D2A5D] px-3 py-1.5 rounded-md text-[11px] ml-4 cursor-pointer hover:bg-[#373370] transition-colors">
          Worcspace 1 <ChevronDown size={14} className="ml-2 text-gray-400" />
        </div>
      </div>

      {/* Middle Section: Global Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search..." 
            className="w-full bg-[#2D2A5D] border-none rounded-md py-2 px-10 text-[11px] text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 ring-[#4F46E5]/50 transition-all" 
          />
          <span className="absolute right-3 top-2.5 text-[10px] text-gray-500 border border-gray-600 px-1.5 rounded flex items-center justify-center font-mono">
            ⌘K
          </span>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer group">
          <Bell size={18} className="text-gray-300 group-hover:text-white transition-colors" />
          {/* Added a small notification dot common in UI dashboards */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-[#1E1B4B]"></span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-full flex items-center justify-center text-white text-[11px] font-bold border-2 border-transparent group-hover:border-white/20 transition-all">
            GK
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;