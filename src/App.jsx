import './App.css'

function App() {

  //This Variable is use for showing projects.
  const projectLinks = [{title: 'Famous food of 5 countries', link: 'https://famousmeals.netlify.app/', working:'It is a website that use data from API for showing results.'},]

  //This Variable is use for showing skills.
  const skills = ["HTML:5","CSS","Javascript","ReactJS","Redux","React-Router","C Programing Language", "MySQL", "Tailwind CSS"]
  
  return (
    <div className=" text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-[140%] font-bold max-w-[50vw]">Resume</h1>
          <nav className="flex justify-between max-w-[50vw]">
            <a href="#about" className="hover:text-blue-600 mx-[1vw]">About</a>
            <a href="#projects" className="hover:text-blue-600 mx-[1vw]">Projects</a>
            <a href="#contact" className="hover:text-blue-600 mx-[1vw]">Contact</a>
          </nav>
        </div>
      </header>
     

      {/* Profile Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-[5vh] px-4">
        <div className="flex justify-around flex-wrap">
          <div >
            <h2 className="text-4xl font-bold mb-4 max-sm:max-w-[100vw] sm:max-w-[50vw]">Hi Visitor, I'm Shivam Kumar</h2>
            <p className="text-lg text-gray-700 mb-6 ">I’m a Front-end Web developer passionate about building responsive and modern web apps.</p>
            <a href="#projects" className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 duration-200">See My Work</a>
          </div>
          <img  src="https://ik.imagekit.io/shiivuishere/ShivamKumar.jpg?updatedAt=1750396536257" alt="Image is unavilable" className="rounded-xl shadow-md max-sm:min-h-[20vh] max-sm:max-w-[55vw] max-sm:mt-[9vw] sm:min-h-[20vh] sm:max-w-[25vw] inline-flex self-center" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-600 text-lg">
            I’m a developer with experience in React, Tailwind CSS, Javascript. I enjoy turning ideas into real products and solving real-world problems through code.
          </p>
        </div>
        <div className='max-w-4xl mx-auto text-center mt-8'>
          <h3 className="text-3xl font-semibold mb-4">Skills</h3>
          <ol className='inline-flex flex-col flex-wrap'>
            {skills.map(skill => (
              <li className='min-w-[10vw] hover:scale-110 duration-200 text-gray-600' key={skill}>{skill}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
          <div className="inline-flex justify-center flex-wrap ">
            {projectLinks.map(i => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 max-sm:max-w-[100%] max-sm:min-h-[40%] sm:min-w-[20%] sm:min-h-[50%] m-[2vw] hover:scale-105 duration-150">
                <h4 className="text-xl font-bold ">Project Title:</h4>
                <h5 className="text-xl font-semibold mb-[2vh]">{i.title}</h5>
                <hr />
                <p className="text-gray-600 my-[2vh]">{i.working}</p>
                <iframe src={i.link} className='w-[100%] h-[50vh] border-2 rounded-[.3vw]'></iframe>
                <p className="text-gray-600 text-sm mt-[2vh]">
                  <b>Link : </b>
                  <a href={i.link} target='_blank'>Want to visit???</a>
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">Interested in working together or just want to say hi?</p>
          <div>
            <a href="https://www.instagram.com/shiivu.dev?igsh=MTVlbW83cmdjcXowcA==" target='_blank' className=" bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 duration-150">Visit on Instagram</a>
          </div>
          <p className="text-gray-600 my-[2vw]">Or</p>
          <div className=''>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shiivuishere@gmail.com&su=Hello%20Shivam,&body=I%20have%20a%20work%20for%20you," target='_blank' className=" bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 duration-150">Email Me</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Shivam Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App
