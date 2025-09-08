function Header() {
  return (
    <header
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden animate-fade-in"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-fade-in-up"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-fade-in-up"></div>
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <div className="relative group animate-fade-in-up">
          <img
            src="./profile.jpg"
            alt="Sithumini Ariyasena"
            className="w-52 h-52 rounded-full mb-8 border-4 border-white shadow-2xl hover:scale-105 transition-all duration-500 object-cover group-hover:shadow-indigo-200/50"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h2 className="font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center leading-tight text-5xl md:text-6xl lg:text-7xl font-sans drop-shadow-lg animate-fade-in-up">
          Hello! It's Sithumini Ariyasena
        </h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 mb-4 shadow-xl border border-white/10 animate-fade-in">
          <p className="text-xl text-indigo-700 font-semibold text-center">
            Undergraduate, Sabaragamuwa University of Sri Lanka (2nd Year)
          </p>
        </div>
        <p className="text-lg text-gray-700 text-center max-w-3xl mb-8 leading-relaxed animate-fade-in">
          Passionate about
          <span className="font-semibold text-indigo-600"> Full Stack Development</span>,
          <span className="font-semibold text-purple-600"> Software Engineering</span>, and
          <span className="font-semibold text-pink-600"> UI/UX Designing</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <a
            href="https://github.com/SithuminiAriyasena"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-4 rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-white">View GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sithumini-ariyasena-576706336/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sithuminiariyasena@gmail.com"
            className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
