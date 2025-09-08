function About() {
  const skills = [
    {
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with modern technologies",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "indigo",
      bgGradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Software Engineering",
      description: "Creating efficient and scalable software solutions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      color: "purple",
      bgGradient: "from-purple-500 to-pink-600",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
          />
        </svg>
      ),
      color: "pink",
      bgGradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="about" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I'm a dedicated computer science student with a passion for creating
            innovative web solutions. My journey in technology is driven by
            curiosity and a desire to build meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative bg-gradient-to-br ${skill.bgGradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
                {skill.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {skill.description}
              </p>

              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${skill.bgGradient} group-hover:w-full transition-all duration-500 rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-full border border-indigo-100">
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-indigo-700 font-medium">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
