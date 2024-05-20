import {Cards} from "./Cards"
export const Main =()=>{

    return(
        <div className="bg-sec h-screen">
            {/* <div className="relative bg-sec text-yellow-500 top-5 left-2 flex flex-row items-center gap-x-2 pl-6 pt-10"> 
<img  className="h-9 w-10 bg-yellow-500"  src='./logo.png' alt='logo'/>
<h1 className="text-5xl font-semibold">Astrix.</h1>
</div> */}

{/* middle section */}
<div className="flex flex-row justify-center items-between  relative bg-sec">
    <div>
        
    <div className="flex flex-col  items-start ">
        {/* para */}
        <div className="flex flex-col justify-start text-white text-4xl font-semibold"><p>Exlpore Your First</p>
            <p>Collectible</p></div>
        {/* subheading */}
        <div className="flex flex-col justify-start  text-white text-6xl font-bold">
            <p>Meta</p>
            <p>Lives</p></div>
    </div>
    </div>
    <div className="bg-purple-400 w-full h-[3.2rem] relative rotate-head">
<p className="animate-para text-3xl">Lorem,re voluptareraepe ex. Modi nostribus eius.</p></div>
    <div className="flex flex-col justify-start right-[12rem] absolute gap-y-12">
        {/* para */}
        <div className="flex flex-col justify-start text-white text-2xl font-semibold"><p>Exlpore Your First</p>
            <p>Collectible</p></div>
        {/* subheading */}
        <div className="flex flex-col justify-start text-white text-6xl font-bold">
            <p>Meta</p>
            <p>Lives</p></div>
            {/* details */}
            <div className="flex flex-col justify-start text-white text-2xl font-semibold">
            <p>Live in Astrix</p>
            <p>Lorem i Volupt odie hsdas</p>
            <p>Lorem i Voluptas3d</p>
            <p>Lorem i Volu3dptas</p>
            <p>Lorem i Vold3dduptas</p>
           </div>
           <div className="flex flex-row justify-start items-center text-white text-2xl font-semibold">
            <img className=" h-16 w-28" src="./cascade.png" alt="cascade"/>
            <p>22K People Interested</p></div>
            <div className="flex flex-row justify-start items-center text-white gap-x-5">
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
            <button className="rounded-xl bg-yellow-300 w-1/2 text-3xl mb-2 ">Join Waitlist</button>
    </div>
</div>

</div>
    )
}