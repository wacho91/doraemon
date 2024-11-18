import { FaArrowDown } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const HeroBottom = () => {
  return (
    <>
        {/* doraemon text section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full">
            <h1 className="text-6xl sm:text-[140px] md:text-[190px] text-center font-bold uppercase text-gray-300/25">
                Doraemon
            </h1>
        </div> 
        {/*bottom section*/}
        <div>
            <div>
                {/* first col */}
                <div>
                    <div>
                        <p>Kolkata</p>
                        <p>India</p>
                    </div>
                    <div>
                        <p>26Jan, 2024</p>
                    </div>
                    <div></div>
                </div>
                {/* second col */}
                <div>
                    {" "}
                    <span>
                        <FaArrowDown />
                    </span>
                </div>
                {/* third col */}
                <div>
                    <div>
                        <div>
                            <IoIosArrowBack />
                        </div>
                        <div>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default HeroBottom
