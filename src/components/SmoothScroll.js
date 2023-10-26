import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import Navbar from "./NavBar"
import Lottie from "lottie-react";
import oneAnimation from "../lottie/one.json"
import bankruptcylottie1 from "../lottie/bankruptcylottie1.json"
import commerciallottie from "../lottie/commercialdisputelottie1.json"
import corportatelottie from "../lottie/corporatedisputelottie.json"
import taxdisputelottie from "../lottie/taxdisputelottie.json"
import economiclottie from "../lottie/economiccrimelottie.json"
import handwavelottie from "../lottie/handwavelottie.json"
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion"

const SmoothScroll = () => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className="scroll-container">
        <div><Navbar /></div>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
          responsive={true}
        >
          <div className="thumbnails">
            <div className="thumbnail">
              <div className="text-white items-center flex text-center justify-center relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  <div className="text-4xl sm:text-5xl md:text-7xl flex flex-row mb-5">PROBLEM&nbsp;<div className=" text-yellow-300">SOLVER</div></div>
                  <div className="text-1xl sm:text-sm md:text-lg">ONLINE LAWYER</div>
                </div>
                <div className="absolute top-60"><Lottie animationData={oneAnimation} /></div> 
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center underline underline-offset-8 decoration-1 sm:text-5xl md:text-7xl relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  BANKRUPTCY
                  <div className="absolute mb-10 right-40 w-100 h-80">
                    <Lottie animationData={bankruptcylottie1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center underline underline-offset-8 decoration-1 sm:text-5xl md:text-7xl relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  COMMERCIAL DISPUTES
                </div>
                <div className="absolute top-60">
                <Lottie animationData={commerciallottie} />
                </div>
              </div>
              <div className="absolute w-25 h-60 bottom-40">
                
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center underline underline-offset-8 decoration-1 sm:text-5xl md:text-7xl">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  CORPORATE DISPUTES
                </div>
                <div className="absolute top-40 w-100">
                <Lottie animationData={corportatelottie} />
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center underline underline-offset-8 decoration-1 sm:text-5xl md:text-7xl relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  TAX DISPUTES
                </div>
                <div className="absolute top-80">
                <Lottie animationData={taxdisputelottie} />
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center underline underline-offset-8 decoration-1 sm:text-5xl md:text-7xl relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">ECONOMIC CRIME</div>
                <div className="absolute top-55 right-80 h-40 w-40">
                <Lottie animationData={economiclottie} />
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-4xl items-center flex justify-center sm:text-5xl md:text-7xl relative">
                <div className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">BLOG “BANKROMAT”</div>
                <div className="absolute w-25 lg:h-80 h-40 bottom-40">
                <Lottie animationData={handwavelottie} />
                </div>
              </div>
            </div>
            <div className="thumbnail">
              <div className="text-white text-2xl items-center flex justify-center text-center sm:text-2xl md:text-3xl">
                <p className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                  We stand behind the back of the <br />
                  business as it moves forward towards  <br />
                  its goal. We are smart, experienced and <br />
                  a very inconvenient legal company for <br />
                  rivals, we protect the interests of <br />
                  clients in the field economic activities.
                </p>
              </div>
            </div>
            <div className="thumbnail">
            <div className="text-white text-2xl items-center flex justify-center sm:text-2xl md:text-3xl">
                <p className="mt-40 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-60">
                Our product is the search and application of <br />
                individual legal solutions that eliminate <br />
                everything that hinders to the client to make <br />
                a profit. We see the full picture, avoid <br />
                standard moves and leave no doubt there, <br />
                where to win.
                </p>
              </div>
            </div>  
          </div>  
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}

export default SmoothScroll
