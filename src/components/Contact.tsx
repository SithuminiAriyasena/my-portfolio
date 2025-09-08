function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "0714034671",
      link: "tel:0714034671",
      color: "emerald",
      bgGradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "Email",
      value: "sithuminiariyasena@gmail.com",
      link: "mailto:sithuminiariyasena@gmail.com",
      color: "red",
      bgGradient: "from-red-500 to-pink-600",
      secondary: {
        value: "22fis0568@ms.sab.ac.lk",
        link: "mailto:22fis0568@ms.sab.ac.lk",
      },
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "SithuminiAriyasena",
      link: "https://github.com/SithuminiAriyasena",
      color: "gray",
      bgGradient: "from-gray-700 to-gray-900",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Sithumini Ariyasena",
      link: "https://www.linkedin.com/in/sithumini-ariyasena-576706336/",
      color: "blue",
      bgGradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let's connect! I'm always open to discussing new opportunities,
          collaborations, or just having a friendly chat about technology.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4 p-6 bg-white">
                  <div
                    className={`bg-gradient-to-br ${method.bgGradient} rounded-xl w-14 h-14 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-gray-800 mb-2">
                      {method.title}
                    </p>
                    <a
                      href={method.link}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium block"
                    >
                      {method.value}
                    </a>
                    {method.secondary && (
                      <a
                        href={method.secondary.link}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium block mt-1"
                      >
                        {method.secondary.value}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Social Media
            </h3>

            {socialLinks.map((social, index) => (
              <div key={index} className="group">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-br ${social.bgGradient} rounded-xl w-14 h-14 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{social.title}</p>
                    <p className="text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300 font-medium">
                      {social.value}
                    </p>
                  </div>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Ready to Start a Project?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to discussing
              exciting opportunities. Let's build something amazing together!
            </p>
            <a
              href="mailto:sithuminiariyasena@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
