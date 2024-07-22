import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center h-[80vh] overflow-hidden">
      <div className="w-[50%]">
        <div className="flex justify-center">
          <div className="my-4">
            <h1 className="text-[70px] relative bottom-[-40px] font-[600]">Welcome to </h1>
            <h1 className="text-[120px] font-[700]">Stayvana</h1>
          </div>
        </div>
        <div className="flex gap-[50px] justify-center">
          <button className="bg-white text-black px-3 py-2 rounded-[10px] text-[20px] border-2">Learn More</button>
          <button className="bg-white text-black px-3 py-2 rounded-[10px] text-[20px] border-2">Contact Us</button>  
        </div>
      </div>
    </div>  
  );
}
