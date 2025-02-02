import { Button, Typography } from "@material-tailwind/react";
import banner from "../../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import webresume from "../../assets/webresume.pdf";
// import webresume from "../../../public/webresume.pdf";

const Banner = () => {

//   const onButtonClick = () => {
     
//     // using Java Script method to get PDF file
//     fetch("/webresume.pdf").then((response) => {
//         response.blob().then((blob) => {
         
//             // Creating new object of PDF file
//             const fileURL =
//                 window.URL.createObjectURL(blob);
                 
//             // Setting various property values
//             let alink = document.createElement("a");
//             alink.href = fileURL;
//             alink.download = "webresume.pdf";
//             alink.click();
//         });
//     });
// };

  return (
    <div className="ml-6 my-32 flex justify-between gap-8 min-h-full">
      <div className="flex items-center flex-1">
        <div>
          <h1 className="font-bold text-6xl leading-[70px]">
            I am{" "}
            <span className="text-blue-600">Jannatul Ferdous Mirza</span>
          </h1>
          <span> </span>
          <h1
            className="text-4xl"
            style={{ paddingTop: "1rem", fontWeight: "normal" }}
          >
            {" "}
            <span className="text-blue-400" style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Jr. Web Developer",
                  "MERN Stack Developer",
                  "React.js Developer",
                  "Front-End Developer"
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p className="text-2xl mt-6">I am an aspiring MERN developer on a journey to build dynamic web applications.</p>
          </h1>
          <div className="mt-6 flex gap-10">
            <div className="flex items-center font-medium gap-2 text-xl">
              <IoIosMail className="text-2xl text-blue-600" />
              <p>jfmirza1303@gmail.com</p>
            </div>
            <div className="flex items-center font-medium gap-2 text-xl">
              <IoLogoWhatsapp className="text-2xl text-green-600" />
              <p>+8801531531367</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={webresume} download="Resume_Jannatul_Ferdous_Mirza.pdf"  target="_blank">
              <Button className="py-4 bg-blue-500 hover:bg-blue-800 flex gap-2 items-center">
                <FaDownload className="text-lg"></FaDownload>Download Resume
              </Button>
            </a>
            <Link to="https://github.com/MiM1303">
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-3 text-[14px]"
              >
                <FaGithub className="text-xl"></FaGithub> Github
              </Button>
            </Link>
            <Link to="https://www.linkedin.com/in/jfmirza/">
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-3 text-[14px]"
              >
                <FaLinkedin className="text-xl"></FaLinkedin> LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-[600px] my-auto" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
