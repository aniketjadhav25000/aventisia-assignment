import { X, ChevronDown } from 'lucide-react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" onClick={onClose} />
      <div className="relative w-[460px] bg-white h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Create New Knowledge Base</h2>
            <p className="text-[11px] text-gray-400 mt-1">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition"><X size={20} /></button>
        </div>

        <div className="mt-8 space-y-6 flex-1 overflow-y-auto pr-2">
          <div>
            <label className="block text-[10px] font-bold text-gray-600  mb-2">Name (Cannot be edited later)<span className="text-red-500 font-bold ml-0.5">*</span></label>
            <input type="text" placeholder="Name" className="w-full border border-gray-200 p-2.5 rounded-lg text-xs focus:ring-1 ring-[#4F46E5] outline-none transition" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-600  mb-2">Description</label>
            <textarea placeholder="Description" rows={4} className="w-full border border-gray-200 p-2.5 rounded-lg text-xs focus:ring-1 ring-[#4F46E5] outline-none transition resize-none" />
          </div>
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-600  mb-2">Vector Store<span className="text-red-500 font-bold ml-0.5">*</span></label>
            <select className="w-full border border-gray-200 p-2.5 rounded-lg text-xs bg-white outline-none appearance-none cursor-pointer">
              <option>Qdrant</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 bottom-3 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <label className="block text-[10px] font-bold text-gray-600  mb-2">LLM Embedding Model<span className="text-red-500 font-bold ml-0.5">*</span></label>
            <select className="w-full border border-gray-200 p-2.5 rounded-lg text-xs bg-white outline-none appearance-none cursor-pointer">
              <option>text-embedding-ada-002</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 bottom-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button className="bg-[#4F46E5] text-white px-10 py-2.5 rounded-lg text-xs font-bold hover:bg-[#4338CA] transition shadow-md">Create</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;