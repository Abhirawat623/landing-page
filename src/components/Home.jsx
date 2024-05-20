export const Home =()=>{



   
    return(
        <div className="bg-main h-screen">

<div className="relative bg-main top-5 left-2 flex flex-row gap-x-2 pl-6 pt-10"> 
<img  className="h-10 w-10" src='./logo.png' alt='logo'/>
<h1 className="text-5xl font-semibold">Astrix.</h1>
</div>

<div className="flex flex-col 
translate  top-1/2 left-1/2 max-w-[30rem] xl:max-w-[80rem]  justify-start items-start object-fill flex-nowrap gap-y-4 break-words  pt-16 pl-14">
     <div className=" flex flex-row max-h-[3rem]  justify-center object-contain gap-x-2"><p className="text-4xl xl:text-6xl leading-[3rem]  font-semibold">WE </p> 
     <img className=" w-[8rem] xl:w-[32rem] object-cover z-0" src="./img_1.jpg" alt="head-img"/><p className="text-4xl xl:text-6xl  leading-[3rem] z-10 font-semibold head-mob-animate  xl:head-animate z-5">ORGANIZE THE</p>
    </div>

     <div className=" flex flex-row max-h-[3rem]   pl-4justify-center object-contain gap-x-2"><p className="text-4xl xl:text-6xl leading-[3rem] font-semibold">CONNECTION</p> 
     <img className=" w-[10.2rem] xl:w-[41.2rem] object-cover " src="./img_2.jpg" alt="head-img"/>
     <div className="head-animate text-main">wwwwwwwwwwwwwwwwwwwww</div></div>

     <div className=" flex flex-row max-h-[3rem]   justify-center object-contain gap-x-2">
     <img className=" w-[20rem] object-cover" src="./img_3.jpg" alt="head-img"/>
       <div className="head-animate max-h-[3rem] object-contain  flex flex-row"> <p className="text-4xl xl:text-6xl  leading-[3rem] font-semibold">BETWEEN</p> 
     <img className=" w-[16rem] object-cover" src="./img_4.jpg" alt="head-img"/>
     <p className="text-4xl xl:text-6xl  leading-[3rem] font-semibold">MUSIC</p> </div>
     </div>

     <div className=" flex flex-row max-h-[3rem]   justify-center object-contain gap-x-2">
    
        <p className="text-4xl xl:text-6xl  leading-[3rem] font-semibold">ARTIST</p> 
        <img className=" w-[16rem] object-cover" src="./img_5.jpg" alt="head-img"/>
    <div className="head-animate max-h-[3rem] object-contain  flex flex-row"><p className="text-4xl xl:text-6xl  leading-[3rem] font-semibold">CULTURE</p> 
     <img className=" w-[19.2rem] object-cover" src="./img_6.jpg" alt="head-img"/></div>
     </div>

     <div className=" flex flex-row max-h-[3rem] justify-center object-contain gap-x-2">
     <img className=" w-[15rem] object-cover" src="./img_7.jpg" alt="head-img"/>
       
    <div className="head-animate max-h-[3rem] object-contain  flex flex-row"> 
    <p className="text-4xl xl:text-6xl leading-[3rem] font-semibold">ART</p> <img className=" w-[13.5rem] object-cover" src="./img_4.jpg" alt="head-img"/>
     <p className="text-4xl xl:text-6xl  leading-[3rem] font-semibold">& COLLECTIONS</p> </div>
     </div>


</div>

        </div>
    )
}