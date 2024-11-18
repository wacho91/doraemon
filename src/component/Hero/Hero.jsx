import { FaStar, FaYoutube } from "react-icons/fa"

import HeroImg from "../../assets/dora-hero.png";
import HeroImg2 from "../../assets/dora.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import HeroBottom from "./HeroBottom";

const Hero = () => {

    const [isPlay, setIsPlay] = useState(false);
    const handlePlay = () => {
        setIsPlay(!isPlay);
    }

  return (
    <>
        <div>
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
                    <div>
                        <img 
                            src={HeroImg} 
                            alt="" 
                        />
                        <div></div>
                    </div>
                    {/*Review Section*/}
                    <div>
                        <div>
                            <div>
                                <img 
                                    src={HeroImg2} 
                                    alt="" 
                                />
                                <p>
                                    4.7{" "}
                                    <span>
                                        <FaStar />
                                    </span>
                                </p>
                                <p>
                                    Bandai Figuartszero Doraemont
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* bottom section*/}
            <HeroBottom />
            <div>
                {/* Video Play section */}
                {isPlay && (
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h1>
                                        Subscribe our TCJ youtube channel
                                    </h1>
                                    <IoClose 
                                        onClick={handlePlay}
                                    />
                                </div>
                                <iframe
                                    width="100%"
                                    height="260"
                                    src="https://www.youtube.com/embed/i9e9Xz4OHig?si=rZ_k0qUIcjUIPUH_"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Hero
