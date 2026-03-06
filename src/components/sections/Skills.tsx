import { 
  FileCode2,
  Palette,
  Braces,
  Atom,
  FileType,
  GitBranch,
  Globe,
  Smartphone,
  Figma,
  Puzzle,
  Layout,
  Code
} from "lucide-react";

const skillsData = [
  { name: "HTML5", icon: FileCode2, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: Palette, color: "from-blue-500 to-cyan-500" },
  { name: "Bootstrap", icon: Layout, color: "from-purple-500 to-purple-700" },
  { name: "TailwindCSS", icon: Code, color: "from-cyan-500 to-teal-500" },
  { name: "JavaScript", icon: Braces, color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", icon: FileType, color: "from-blue-600 to-blue-400" },
  { name: "React", icon: Atom, color: "from-cyan-400 to-blue-500" },
  { name: "Git & GitHub", icon: GitBranch, color: "from-gray-600 to-gray-800" },
  { name: "API Integration", icon: Globe, color: "from-green-500 to-emerald-500" },
  { name: "Responsive Design", icon: Smartphone, color: "from-pink-500 to-rose-500" },
  { name: "UI/UX Basics", icon: Figma, color: "from-purple-400 to-pink-500" },
  { name: "Problem Solving", icon: Puzzle, color: "from-indigo-500 to-purple-500" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional Skills Text */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and exploring new technologies. Currently interested in 
            <span className="text-foreground font-medium"> Next.js</span>, and 
            <span className="text-foreground font-medium"> advanced animation libraries</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
