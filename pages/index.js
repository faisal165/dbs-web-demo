import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex w-screen h-screen bg-white">
      <div className=" flex flex-col w-1/2  bg-zinc-50 place-items-center justify-center space-y-4">
        <p className="text-2xl text-black font-semibold "> Login</p>
        <input
          type="email"
          placeholder="Email"
          className=" w-80 px-4 h-14 bg-gray-200 rounded-full"
        ></input>
        <div className=" flex justify-end place-items-center     ">
          <img
            className=" w-5 mx-4 z-10 absolute"
            src="/icons/eye-crossed.png"
            alt="drop"
          ></img>
          <input
            type="password"
            placeholder="Password"
            className=" z-0 w-80 px-4 h-14 bg-gray-200 rounded-full"
          ></input>
        </div>
        <Link href="/dashboard"><button className="bg-indigo-700 hover:bg-indigo-800  w-80 h-14 rounded-full text-white"> Login</button></Link>
      </div>
      <div className="flex  w-1/2 h-screen  bg-zinc-200 ">
        
        <img
            className="  w-full h-full"
            src="/icons/bg-image.jpg"
            alt=""
          ></img>
          <div className="   h-screen absolute z-10 p-8">
          <div className=" flex w-full h-full bg-white backdrop-filter  backdrop-blur-2xl bg-opacity-20 rounded-3xl  ">
          <div className="  flex flex-col w-full place-items-center justify-center  space-y-4  ">
          <img
            className=" w-24 h-12 mx-4 "
            src="/icons/logo.png"
            alt="drop"
          ></img>
          <p className=" font-extrabold text-2xl  ">
          WELCOME BACK!
          </p>
          <p className=" text-xs w-1/2 text-center">DBS is a preferred Microsoft Dynamics partner in UAE provides Dynamics 365 ERP & CRM to small and mid-sized businesses in UAE & Dubai</p>
          </div>

          </div>       
         
</div>
          
        
      </div>
    </div>
  );
}
