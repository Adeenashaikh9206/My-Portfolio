import Image from "next/image";
import myPic from "@/assets/mypic.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            {/* image */}
           <Image
           className=" flex object-cover object-center rounded mx-auto"
           src={require("../../../public/mypic1.jpg")}
           alt="hero"
           width={200}
           height={200}/>
           
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-6xl  mb-4 font-medium text-gray-900 t">About Me
            </h1>
            <p className="mb-8 leading-relaxed">

              Hi! I’m a passionate developer with a strong grip on HTML, CSS, Javascript, TypeScript, and Python. I enjoy building efficient, clean, and user-friendly web applications. My focus is on creating smooth user experiences and writing maintainable code. Always eager to learn and grow, I love solving challenges and staying updated with the latest tech trends. Let's create something amazing together!</p>
            <div className="flex justify-center">
              <Link href={"/assests/cv/adeenacv.pdf"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                View CV
                </button>
                </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


export default About;