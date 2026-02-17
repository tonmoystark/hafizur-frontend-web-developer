const LeftSide = () => {
  return (
    <div className="space-y-8 w-fit">
      {/* About */}

      <div>
        <h2 className="text-3xl text-center sm:text-left hidden sm:block font-semibold mb-4">
          About Me
        </h2>
        <p className="text-gray-400 sm:w-[80%] w-full leading-relaxed">
          Although I began my academic journey outside of computer science, I
          discovered a strong passion for web development that inspired me to
          transition into the tech field. Since then, I have dedicated myself to
          mastering frontend development and building modern, responsive web
          applications.
        </p>
        <p className="text-gray-400 sm:w-[80%] my-2 w-full leading-relaxed">
          I completed professional training at CodeJogot, where I gained
          hands-on experience working with React, JavaScript, and Tailwind CSS
          to create real-world projects.
        </p>
        <p className="text-gray-400 sm:w-[80%] w-full leading-relaxed">
          I am now actively seeking a frontend internship opportunity where I
          can apply my skills, learn from experienced developers, and contribute
          to impactful products.
        </p>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div className="text-gray-400">
          <p className="font-medium text-white">Bachelor of Arts (BA)</p>
          <p>Rajshahi College, Rajshahi</p>
          <p>4th year — running</p>
        </div>
      </div>

      {/* Training */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
        <div className="text-gray-400">
          <p className="font-medium text-white">
            Full Stack Web Development (PHP)
          </p>
          <p>CodeJogot — Running (8 months)</p>
          <p>Frontend segment completed</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
