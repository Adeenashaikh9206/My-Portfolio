import { IoMdCheckbox } from "react-icons/io";
const Skills = () => {
  return (
    <div id="Skills">
      
      <div data-aos="fade-up"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skills */}

            
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>

            {/* skill2 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>

            {/* skiil3 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Javascript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>
              {/* skill4 */}
              <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>
            {/* skill5 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TailwindCSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>
            {/* skiil6 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <IoMdCheckbox className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Python
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1  w-full bg-gray-300 rounded-xl ">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>

                  <p className=" font-bold text-blue-500 text-right ">100%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
export default Skills