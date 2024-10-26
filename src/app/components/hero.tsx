"use client";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div>
      <section className="max-container padding-container flex flex-col flex-Center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
        <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadown-lg blur-[7rem] z-10"></span>
        {/* left */}
        <div className="relative z-20 flex flex-1 flex-col pt-16">
          <h4 className="font-bold text-2xl text-center">Hello,</h4>
          <h1 className="font-semibold text-8xl relative text-center text-opacity-20 ">I'm ADEENA </h1>
          <h2 className="font-bold text-4xl text-center">
            A {' '}

            <span className="font-bold text-4xl">
              <Typewriter
                words={['developer', 'programmer', 'Student', 'learner!']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}

              />

            </span>
          </h2>

        </div>
        {/* right */}
        <div className="flex flex-1 xl:floatEnd">
          <img src="mypic1.jpg " alt="pic" width={300} height={100} className="bg-right-bottom" />


        </div>
      </section>


    </div>
  )


}

export default Hero;