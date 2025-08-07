import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Zap, Star, GraduationCap } from 'lucide-react';
import SkillCard from './SkillCard';

export default function AboutSection() {
  const skills = [
    { name: 'Python', level: 95, color: 'from-green-400 to-emerald-400' },
    { name: 'Javascript', level: 90, color: 'from-yellow-400 to-orange-400' },
    { name: 'SQL', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'R', level: 88, color: 'from-orange-400 to-red-400' },
    { name: 'React.js', level: 80, color: 'from-blue-400 to-cyan-400' },
    { name: 'Azure Suite', level: 75, color: 'from-pink-400 to-purple-400' }
  ];

  const workExperience = [
    {
      title: 'Data Analyst II',
      company: 'AT&T',
      period: '2024 - Present',
      description: 'Primary developer of various ML and NLP models using Prophet and Transformer models. Informed company strategy around promotional programs and legal claim handling.'
    },
    {
      title: 'Data Analyst Intern',
      company: 'The Kraft Group',
      period: '2024',
      description: 'Predicted event attendance using PyTorch to structure staffing and inventory.'
    },
    {
      title: 'Junior Developer',
      company: 'DevStudio',
      period: '2019 - 2020',
      description: 'Developed mobile-first websites and learned modern development practices'
    }
  ];

  const education = [
    {
      title: 'M.S. in Data Science',
      company: 'Georgia Tech',
      period: '2025-2026',
      description: 'Furthering my understanding in advanced AI/ML fields.',
    },
    {
      title: 'B.S. in Data Science',
      company: 'Case Western Reserve University',
      period: '2020 - 2024',
      description: 'Graduated Summa Cum Laude with a 4.0 GPA and numerous awards.',
    },
  ];

  const [activeTab, setActiveTab] = useState('experience');

  const activeData = activeTab === 'experience' ? workExperience : education;

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

            {/* Toggle Buttons (Tabs) */}
            <div className="relative flex justify-center w-full max-w-sm mx-auto p-1 bg-slate-800 rounded-full border border-slate-700/50">
              {/* The Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 ease-in-out w-1/2 
      ${activeTab === 'experience' ? 'translate-x-0' : 'translate-x-full'}
    `}
              ></div>

              <button
                onClick={() => setActiveTab('experience')}
                className={`relative flex-1 flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-colors duration-300 ease-in-out z-10
      ${activeTab === 'experience'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                <Rocket />
                Experience
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`relative flex-1 flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-colors duration-300 ease-in-out z-10
      ${activeTab === 'education'
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                <GraduationCap />
                Education
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-8">
              {/* To fix later: making delay 0 and layout prop make no animation problems
              Probably a good move is keep them as they were (no layout, index*0.1 delay) 
              when loading experience for the first time, but then using this verson if 
              toggling over from eduation */}
              {activeData.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.0, 0) }}
                  className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-blue-400 font-medium mb-2">{item.company} • {item.period}</p>
                      <p className="text-slate-300">{item.description}</p>
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
            { label: 'Projects Completed', value: '25+', icon: Code },
            { label: 'Years Experience', value: '2+', icon: Rocket },
            { label: 'Proficient Languages', value: '5+', icon: Star },
            { label: 'Live Service Websites', value: '3+', icon: Zap }
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
      </div >
    </section >
  );
}