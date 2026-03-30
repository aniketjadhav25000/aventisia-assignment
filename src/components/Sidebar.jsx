import { Bot, Box, Library, Rocket, Monitor, ListOrdered, Zap, Tv, Clapperboard, ShieldCheck, BookOpen, BarChart3, Fingerprint, Globe } from 'lucide-react';

function Sidebar() {
  const sections = [
    { title: "MY PROJECTS", items: [
      { name: "Agents", icon: <Bot size={18} /> }, 
      { name: "AI Models", icon: <Box size={18} /> }, 
      { name: "Library", icon: <Library size={18} /> }
    ]},
    { title: "ORCHESTRATOR", items: [
      { name: "Published", icon: <Rocket size={18} /> }, 
      { name: "Machines", icon: <Monitor size={18} /> }, 
      { name: "Queues", icon: <ListOrdered size={18} /> }, 
      { name: "Triggers", icon: <Zap size={18} /> }, 
      { name: "Jobs", icon: <Tv size={18} /> }, 
      { name: "Executions", icon: <Clapperboard size={18} /> }, 
      { name: "Vault", icon: <ShieldCheck size={18} /> }, 
      { name: "Knowledge Base", icon: <BookOpen size={18} />, active: true }, 
      { name: "Key Store", icon: <BarChart3 size={18} /> }
    ]},
    { title: "ADMIN", items: [
      { name: "Tenant", icon: <Fingerprint size={18} /> }, 
      { name: "Integrations", icon: <Globe size={18} /> }
    ]}
  ];

  return (
    <div className="w-64 border-r border-gray-100 bg-white h-full flex flex-col py-6 overflow-y-auto shrink-0">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="px-6 text-[10px] font-bold text-gray-400 tracking-widest mb-3 uppercase">{section.title}</h3>
          {section.items.map((item) => (
            <div key={item.name} className={`flex items-center gap-3 px-6 py-2 text-sm cursor-pointer relative ${item.active ? "bg-[#EEF2FF] text-[#4F46E5]" : "text-gray-500 hover:bg-gray-50"}`}>
              {item.active && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#4F46E5]" />}
              <span className={item.active ? "text-[#4F46E5]" : "text-gray-400"}>{item.icon}</span>
              <span className={item.active ? "font-bold" : "font-medium"}>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;