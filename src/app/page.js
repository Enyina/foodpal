import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: 'url("/images/foodbg.jpeg")' }}
      className=" w-screen h-screen bg-cover bg-center relative">
      <div className=" absolute bottom-6 text-white flex flex-col gap-3 w-full items-center">
        <h1 className=" text-2xl">Welcome to Foodpal</h1>
        <p className=" text-center flex flex-col opacity-90">
          Discover a world of delightful flavors <span>at your fingertips</span>
        </p>
      </div>
    </div>
  );
}
