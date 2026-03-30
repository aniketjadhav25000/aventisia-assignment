function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#4F46E5] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
    >
      <span className="text-lg">+</span> {text}
    </button>
  )
}

export default Button