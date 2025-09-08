import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  statusColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon?: React.ReactElement;
  link?: string;
  images?: string[];
}

function ProjectCard({
  title,
  description,
  technologies,
  status,
  statusColor,
  gradientFrom,
  gradientTo,
  icon,
  link,
  images,
}: ProjectCardProps) {
  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      HTML: "bg-orange-100 text-orange-800 border-orange-200",
      CSS: "bg-blue-100 text-blue-800 border-blue-200",
      JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-200",
      React: "bg-cyan-100 text-cyan-800 border-cyan-200",
      "Tailwind CSS": "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return colors[tech] || "bg-gray-100 text-gray-800 border-gray-200";
  };
  return (
    <>
      <div className="group relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        {/* Header with gradient background */}
        <div className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-center space-x-3">
            {icon && <div className="text-white">{icon}</div>}
            <h3 className="text-xl font-bold text-white flex-1">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className={`${getTechColor(tech)} px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className={`${statusColor} px-4 py-2 rounded-xl text-sm font-medium border border-opacity-20`}>
            {status}
          </span>
          {link && title !== "Realtime Bus Tracking System" && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center space-x-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium border-2 border-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}>
              <span className="font-semibold tracking-wide">View Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        {/* Conditional sections for gallery and table */}
        {title === "Bloom Corner Flower Bouquet Website" && images && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-center mb-2 text-pink-600">Gallery</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
              {images.slice(0, 4).map((img, i) => (
                <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white aspect-w-16 aspect-h-9">
                  <img
                    src={img}
                    alt={`Bloom Corner screenshot ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                    style={{ aspectRatio: '16/9' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {title === "Realtime Bus Tracking System" && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-center mb-2 text-green-600">System Details</h4>
            <table className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-700">Frontend</td>
                  <td className="py-2 px-4 text-gray-600">HTML, CSS, JavaScript</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-700">Backend</td>
                  <td className="py-2 px-4 text-gray-600">Python</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-700">Features</td>
                  <td className="py-2 px-4 text-gray-600">Live bus location, ETA, user-friendly map</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-gray-700">Status</td>
                  <td className="py-2 px-4 text-yellow-700">In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function Projects() {
  const projects = [
    {
      title: "Bloom Corner Flower Bouquet Website",
      description:
        "A beautiful and responsive flower bouquet website showcasing various floral arrangements with an elegant design. Features include interactive gallery, contact forms, and mobile-optimized layouts.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "✓ Completed",
      statusColor: "bg-green-100 text-green-800 border-green-200",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      link: "#", // Replace with actual project link
      images: [
        "/bloom1.png",
        "/bloom2.png",
        "/bloom3.png",
        "/bloom4.png",
        "/bloom5.png",
      ],
    },
    {
      title: "Realtime Bus Tracking System",
      description:
        "A web-based system for tracking buses in real time using GPS and live map updates. Built with HTML, CSS, Python, and JavaScript, it provides users with accurate bus locations, estimated arrival times, and a user-friendly interface for commuters.",
      technologies: ["HTML", "CSS", "Python", "JavaScript"],
      status: "🚧 In Progress",
      statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      gradientFrom: "from-green-400",
      gradientTo: "to-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      link: "#", // Replace with actual project link
    },
  ];

  return (
    <div id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
