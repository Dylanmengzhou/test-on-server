"use client";

export default function Home() {
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen gap-8 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://picsum.photos/id/29/4000/2670')"
      }}
    >
      {/* 添加轻微遮罩层 */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* 内容容器 */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-2xl">
            Beaver Nail Inc.
          </h1>
          <p className="text-xl text-white text-opacity-90 drop-shadow-lg">
            Professional Nail Care Services
          </p>
        </div>
        
        {/* 按钮 */}
        <a 
          href="https://www.beavernail.com"
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50 active:scale-95"
        >
          <span className="relative z-10">Visit Our Website</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        
        {/* 装饰元素 */}
        <div className="flex gap-4 mt-4">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}
