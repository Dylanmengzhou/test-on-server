"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-[url('https://picsum.photos/id/29/4000/2670')] bg-cover bg-center">
      <h1 className="text-5xl font-bold text-black bg-white p-3 rounded-xl">Beaver Nail</h1>
      <button
        className="bg-black text-white p-2 rounded-md font-bold"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <a href="https://www.beavernail.com">Click me</a>
      </button>
    </div>
  );
}
