import { useState } from "react";

function App() {
  const [color,setColor] = useState("Olive")
  return (
    <>
     <div className="w-full h-screen duration-200 text-center pt-10" style={{backgroundColor : color}}>
     <div className="flex fixed flex-wrap inset-x-0 bottom-12 justify-center px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl">
        <button onClick={()=> setColor("red")} className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Red</button>
        <button onClick={()=> setColor("green")} className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Green</button>
        <button onClick={()=> setColor("pink")} className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Pink</button>
        <button onClick={()=> setColor("blue")} className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Blue</button>
        <button onClick={()=> setColor("black")} className="bg-black text-white px-4 py-2 rounded-full shadow-lg outline-none">Black</button>
        <button onClick={()=> setColor("orange")} className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Orange</button>
        <button onClick={()=> setColor("purple")} className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg outline-none">Purple</button>
        <button onClick={()=> setColor("maroon")} className="bg-red-900 text-white px-4 py-2 rounded-full shadow-lg outline-none">Maroon</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App;