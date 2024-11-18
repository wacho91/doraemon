import { FaYoutube } from "react-icons/fa"


const Hero = () => {
  return (
    <>
        <div>
            <div>
                {/* text content */}
                <div>
                    <div>
                        <h1> Watch Now in</h1>
                        <h1>3D</h1>
                    </div>
                    <p>
                        The first full story in the Doraemon series was published in
                        January 1970
                    </p>
                    <div>
                        <button>
                            Play on
                            <span>
                                <FaYoutube />
                            </span>
                        </button>
                    </div>
                </div>
                {/* image section*/}
            </div>
        </div> 
    </>
  )
}

export default Hero
