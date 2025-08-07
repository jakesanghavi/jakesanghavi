import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Zap, Star } from 'lucide-react';
import SkillCard from './SkillCard';

export default function AboutSection() {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', level: 90, color: 'from-green-400 to-emerald-400' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'Python', level: 88, color: 'from-yellow-400 to-orange-400' },
    { name: 'AWS', level: 80, color: 'from-orange-400 to-red-400' },
    { name: 'GraphQL', level: 75, color: 'from-pink-400 to-purple-400' }
  ];

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications serving 100k+ users'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built responsive React applications and improved performance by 40%'
    },
    {
      title: 'Junior Developer',
      company: 'DevStudio',
      period: '2019 - 2020',
      description: 'Developed mobile-first websites and learned modern development practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with interests in sports analytics, astrophysics, and investing strategies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="text-yellow-400" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Rocket className="text-blue-400" />
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-400 font-medium mb-2">{exp.company} • {exp.period}</p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: '50+', icon: Code },
            { label: 'Years Experience', value: '5+', icon: Star },
            { label: 'Happy Clients', value: '25+', icon: Rocket },
            { label: 'Coffee Cups', value: '∞', icon: Zap }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}