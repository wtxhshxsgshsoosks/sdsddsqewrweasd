import React, { useEffect, useState } from 'react';
import { Github, Code2, Server, Bot, Settings2, Video, Trophy, Users, Code, Cpu, Terminal, Globe, Cloud } from 'lucide-react';

const DiscordIcon = () => (
  <svg className="w-6 h-6" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" 
        fill="currentColor" fillRule="nonzero" />
    </g>
  </svg>
);

const LoadingAnimation = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Reached Members" },
    { icon: <Code className="w-5 h-5" />, value: "50+", label: "Projects Completed" },
    { icon: <Trophy className="w-5 h-5" />, value: "3+", label: "Years Experience" },
    { icon: <Globe className="w-5 h-5" />, value: "20+", label: "Countries Reached" },
  ];

  const hostingProjects = [
    {
      name: "GBNodes",
      period: "Nov 2022 - Present",
      description: "Affordable and reliable game server hosting with global reach and performance.",
      achievements: [
        "Multi-region deployment",
        "DDoS protection",
        "Custom control panel"
      ]
    },
    {
      name: "Servitro LTD",
      period: "Jan 2025 - Present",
      description: "High-performance VPS and dedicated hosting platform with seamless automated deployment and reliability.",
      achievements: [
        "Auto-scalable infrastructure",
        "Innovative ideas",
        "99.5% uptime guarantee"
      ]
    }
  ];

  const networks = [
    {
      name: "MCFleet",
      period: "Nov 2024 - Present",
      description: "MCFleet became one of the largest Minecraft networks I’ve handled, peaking at 2,900 players, showcasing expertise in Java, optimization, databases, and network security.",
      achievements: ["Peak 2,900 players", "Advanced Java & optimizations", "Database & network scaling"]
    },
    {
      name: "GodSpunky",
      period: "Aug 2022 - July 2024",
      description: "GodSpunky was the first network to run my configurations and achieve success with a thriving player base, marking a significant milestone in my journey.",
      achievements: ["Peak 600 players", "Learning experience", "Core systems"]
    },
    {
      name: "MinePool",
      period: "Aug 2024 - Present",
      description: "MinePool is my upcoming private project, built for innovation and high performance. It's still in development, but something exciting is on the way",
      achievements: ["High performance", "Custom features", "Large playerbase"]
    },
    {
      name: "BlueMC",
      period: "Dec 2024 - Present",
      description: "Under new ownership, BlueMC thrived with smarter choices, innovative features, and strategic improvements, making it more successful than ever",
      achievements: ["Better Configurations", "High Performance", "Custom in-game features"]
    }
  ];

  const skills = {
    languages: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
    databases: ["MySQL", "MariaDB", "MongoDB", "Redis", "PostgreSQL"],
    techStack: ["Google Cloud", "Oracle Cloud", "Proxmox", "Pterodactyl", "BGP", "Apache", "Nginx", "Docker", "AWS"],
    specialties: ["System Administration", "Server Development", "Cloud Infrastructure", "Performance Optimization", "Router Configurations", "Cyber Security"]
  };

  const services = [
    { 
      icon: <Code2 className="w-5 h-5" />, 
      text: "Minecraft plugin development",
      details: "Custom plugins, game modes, and core systems"
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      text: "Minecraft server optimisation",
      details: "Performance optimization and scalability"
    },
    { 
      icon: <Server className="w-5 h-5" />, 
      text: "Minecraft server configuration",
      details: "Plugin setups, feature enhancements, and game mode development."
    },
    { 
      icon: <Terminal className="w-5 h-5" />, 
      text: "Full-stack development",
      details: "Modern web applications and APIs"
    },
    { 
      icon: <Bot className="w-5 h-5" />, 
      text: "Discord bot development",
      details: "Custom automation and community tools"
    },
    { 
      icon: <Cpu className="w-5 h-5" />, 
      text: "Systems Administration",
      details: "Scalable and maintainable solutions"
    },
    { 
      icon: <Video className="w-5 h-5" />, 
      text: "Content Ideas",
      details: "Special and audience engaging content ideas"
    }
  ];

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="min-h-screen bg-tech-dark text-gray-300 p-4 font-rubik">
          <main className="max-w-6xl mx-auto space-y-8">
            {/* Hero Section */}
            <section className="py-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">I'm BBAGOD!</h1>
                <div className="space-y-3 max-w-2xl">
                  <p className="text-xl text-gray-200 font-light leading-relaxed">
                    I'm a passionate full-stack developer specializing in Minecraft server optimization for high player counts and system administration. I focus on ensuring performance, scalability, and reliability.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    With my expertise in gaming infrastructure, I've helped engage <span className="text-accent">50,000+ players</span> globally, fostering vibrant communities 
    and pioneering innovative solutions.
                  </p>

                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>
              </div>
            </section>

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-6">
              {/* Top Row: About, Services, Skills */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* About Section */}
                <section className="section-card">
                  <h2 className="text-xl font-medium text-gradient mb-6">About me</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Hey! I'm a self-taught developer from India, passionate about building scalable solutions 
    and delivering outstanding user experiences.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      My journey started with Minecraft server development, sparking a deep passion for 
    system architecture and full-stack development. Over time, I honed my skills in 
    building high-performance, scalable solutions capable of handling thousands of 
    concurrent users. From optimizing game servers to designing efficient backend 
    systems, I thrive on crafting seamless experiences that merge performance, 
    reliability, and innovation.
                    </p>
                  </div>
                </section>

                {/* Services Section */}
                <section className="section-card">
                  <h2 className="text-xl font-medium text-gradient mb-6">Services & Expertise</h2>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="service-item group">
                        <div className="flex items-start space-x-3">
                          <span className="service-icon">
                            {service.icon}
                          </span>
                          <div>
                            <span className="service-title">{service.text}</span>
                            <p className="service-details">{service.details}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Skills Section */}
                <section className="section-card">
                  <h2 className="text-xl font-medium text-gradient mb-6">Technical Arsenal</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gray-400 mb-3 text-sm font-medium">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map(lang => (
                          <span key={lang} className="skill-tag">{lang}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-400 mb-3 text-sm font-medium">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.databases.map(db => (
                          <span key={db} className="skill-tag">{db}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-400 mb-3 text-sm font-medium">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.techStack.map(tech => (
                          <span key={tech} className="skill-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-400 mb-3 text-sm font-medium">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.specialties.map(specialty => (
                          <span key={specialty} className="skill-tag">{specialty}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Hosting Projects */}
              <section className="section-card">
                <h2 className="text-xl font-medium text-gradient mb-6">Hosting Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {hostingProjects.map((project, index) => (
                    <div key={project.name} className="network-item bg-tech-gray/30 rounded-lg p-6 border border-gray-800/30">
                      <div className="flex items-start space-x-3">
                        <span className="text-accent/50 font-mono text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-2 flex-1">
                          <h3 className="network-title flex items-center space-x-2">
                            <Cloud className="w-4 h-4" />
                            <span>{project.name}</span>
                          </h3>
                          <p className="text-sm text-accent/60">{project.period}</p>
                          <p className="text-sm text-gray-400">{project.description}</p>
                          <ul className="mt-2 space-y-1">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center space-x-2">
                                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Minecraft Projects */}
              <section className="section-card">
                <h2 className="text-xl font-medium text-gradient mb-6">Minecraft Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {networks.map((network, index) => (
                    <div key={network.name} className="network-item bg-tech-gray/30 rounded-lg p-6 border border-gray-800/30">
                      <div className="flex items-start space-x-3">
                        <span className="text-accent/50 font-mono text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-2 flex-1">
                          <h3 className="network-title">{network.name}</h3>
                          <p className="text-sm text-accent/60">{network.period}</p>
                          <p className="text-sm text-gray-400">{network.description}</p>
                          <ul className="mt-2 space-y-1">
                            {network.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center space-x-2">
                                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="py-8 mt-8 border-t border-gray-800/50">
              <div className="flex items-center justify-center space-x-6">
                <a href="https://github.com" className="nav-link" aria-label="GitHub Profile">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://discord.com" className="nav-link" aria-label="Discord Server">
                  <DiscordIcon />
                </a>
              </div>
              <p className="text-center mt-4 text-sm text-gray-500">
                © BBAGOD 2025 • Contact me on Discord
              </p>
            </footer>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
