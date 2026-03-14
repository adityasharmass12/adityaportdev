import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 font-display sm:text-4xl mb-4">
          <span className="text-purple-500/50 font-mono text-2xl sm:text-3xl mr-2">&lt;</span>
          Featured Projects
          <span className="text-purple-500/50 font-mono text-2xl sm:text-3xl ml-2">/&gt;</span>
        </h2>
        <div className="w-24 h-1 bg-purple-500/30 mx-auto rounded-full" />
      </motion.div>

      {resumeData.projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Projects will be mapped here when added to data.ts */}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center p-12 border border-purple-500/20 bg-purple-900/10 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(139,92,246,0.1)] text-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 bg-purple-500/20 rounded-full text-purple-300 mb-6"
          >
            <FolderGit2 size={40} />
          </motion.div>
          <h3 className="text-2xl font-semibold text-purple-100 mb-3 flex items-center justify-center gap-2">
            Architecting New Solutions
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-2.5 h-6 bg-purple-400/80"
            />
          </h3>
          <p className="text-purple-300/70 max-w-md mx-auto">
            I am currently building and refining several exciting projects. Check back soon for updates and live demos!
          </p>
        </motion.div>
      )}
    </section>
  );
};
