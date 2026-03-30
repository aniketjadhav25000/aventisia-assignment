import { MoreVertical } from 'lucide-react';

function Card({ title, description, date }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-[180px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
        <button className="text-gray-6  00 hover:text-gray-600 transition">
          <MoreVertical size={16} />
        </button>
      </div>
      <p className="text-gray-500 text-[11px] leading-relaxed flex-1 line-clamp-4">{description}</p>
      <div className="pt-3 border-t border-gray-200">
        <p className="text-[10px] text-gray-400 font-medium">Created On: {date}</p>
      </div>
    </div>
  );
}

export default Card;