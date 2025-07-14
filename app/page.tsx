"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Beaver Nail</h1>
      <button
        className="bg-white text-black p-2 rounded-md"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <a href="https://www.beavernail.com">Click me</a>
      </button>
    </div>
  );
}
