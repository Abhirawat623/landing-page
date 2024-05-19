export const Home =()=>{
    return(
        <div className="bg-main h-screen">

<div className="relative top-5 left-2"> 
<img src='' alt='logo'/>
<h1 className="text-5xl font-semibold">Astrix.</h1>
</div>

<div className="flex flex-col justify-start items-start flex-wrap gap-y-4  pt-16 pl-14">
     <div className=" flex flex-row max-h-[3rem] max-w-[92rem] justify-center object-contain gap-x-2"><p className="text-6xl leading-[3rem] font-semibold">WE </p> 
     <img className=" w-[32rem] object-cover" src="./img_1.jpg" alt="head-img"/><p className="text-6xl leading-[3rem] font-semibold">ORGANIZE THE</p></div>

     <div className=" flex flex-row max-h-[3rem] max-w-[92rem]  justify-center object-contain gap-x-2"><p className="text-6xl leading-[3rem] font-semibold">CONNECTION</p> 
     <img className=" w-[32rem] object-cover" src="./img_2.jpg" alt="head-img"/></div>

     <div className=" flex flex-row max-h-[3rem] max-w-[92rem]  justify-center object-contain gap-x-2">
     <img className=" w-[32rem] object-cover" src="./img_3.jpg" alt="head-img"/>
        <p className="text-6xl leading-[3rem] font-semibold">BETWEEN</p> 
     <img className=" w-[32rem] object-cover" src="./img_4.jpg" alt="head-img"/>
     <p className="text-6xl leading-[3rem] font-semibold">MUSIC</p> 
     </div>

     <div className=" flex flex-row max-h-[3rem] max-w-[92rem]  justify-center object-contain gap-x-2">
    
        <p className="text-6xl leading-[3rem] font-semibold">ARTIST</p> 
        <img className=" w-[32rem] object-cover" src="./img_5.jpg" alt="head-img"/>
     <p className="text-6xl leading-[3rem] font-semibold">CULTURE</p> 
     <img className=" w-[32rem] object-cover" src="./img_6.jpg" alt="head-img"/>
     </div>

     <div className=" flex flex-row max-h-[3rem] max-w-[92rem]  justify-center object-contain gap-x-2">
     <img className=" w-[32rem] object-cover" src="./img_7.jpg" alt="head-img"/>
        <p className="text-6xl leading-[3rem] font-semibold">ART</p> 
     <img className=" w-[32rem] object-cover" src="./img_4.jpg" alt="head-img"/>
     <p className="text-6xl leading-[3rem] font-semibold">& COLLECTIONS</p> 
     </div>


</div>

        </div>
    )
}