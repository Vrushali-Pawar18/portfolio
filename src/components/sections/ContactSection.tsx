import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { fadeInUp } from '../../utils/motionVariants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="08 · Contact"
          title="Have an interesting problem to solve? Let's talk."
          subtitle="I'm interested in opportunities where I can build meaningful products, solve challenging engineering problems, and contribute across the stack."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct details column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <ContactInfo />
          </motion.div>

          {/* Interactive Form column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
