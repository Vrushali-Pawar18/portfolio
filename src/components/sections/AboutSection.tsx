import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { WorkPillars } from './WorkPillars';
import { PROFILE_INFO } from '../../data/profileData';
import { slideFromLeft, slideFromRight } from '../../utils/motionVariants';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="02 · About Me"
          title="Engineering products from idea to production."
          subtitle="A full stack developer with a strong frontend foundation and hands-on experience building production SaaS platforms and AI features."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main narrative text sliding from left */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed"
          >
            <p>
              I'm a Full Stack Developer with a strong frontend foundation and hands-on experience building production web applications, enterprise platforms, and AI-powered product features.
            </p>
            <p>
              My work spans the complete application development lifecycle—from translating product requirements into technical solutions and designing scalable frontend architecture to building backend services, integrating APIs, and delivering reliable user experiences.
            </p>
            <p>
              I specialize in <strong className="text-white font-bold">React.js</strong> and <strong className="text-white font-bold">Next.js</strong>, with experience across JavaScript, TypeScript, Python, FastAPI, and NestJS. I enjoy solving engineering challenges involving complex application state, data-heavy interfaces, asynchronous processing, API integrations, and AI-driven automation.
            </p>
            <p>
              Beyond writing code, I care about how an application is structured, how efficiently it performs, how easily it can be maintained, and how effectively it solves real user problems.
            </p>

            {/* Philosophy blockquote with glossy specular panel */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-obsidian-850 via-obsidian-900 to-obsidian-850 border-l-4 border-teal-brand border-y border-r border-obsidian-750 shadow-glossy-card">
              <div className="flex items-start gap-3.5">
                <Quote className="w-6 h-6 text-teal-light shrink-0 mt-0.5 opacity-90" />
                <p className="text-sm sm:text-base italic text-slate-200 font-medium leading-relaxed">
                  "{PROFILE_INFO.philosophy}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4 Work Pillars Grid sliding from right */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <h3 className="text-xs font-bold text-teal-light uppercase tracking-widest mb-1.5">
              What Defines My Work
            </h3>
            <p className="text-xs text-slate-400 mb-2">
              Four fundamental pillars that anchor every system and feature I architect:
            </p>
            <WorkPillars />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
