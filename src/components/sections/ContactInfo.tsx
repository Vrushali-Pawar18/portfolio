import React, { useState } from 'react';
import { Copy, Check, Linkedin, Github, FileDown, Sparkles } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { PROFILE_INFO } from '../../data/profileData';
import { useAppDispatch } from '../../store/hooks';
import { showToast, incrementResumeDownload } from '../../store/slices/uiSlice';
import { downloadResumeFile } from '../../utils/downloadResume';

export const ContactInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    dispatch(showToast({ message: 'Email copied to clipboard!', type: 'success' }));
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResumeClick = () => {
    dispatch(incrementResumeDownload());
    dispatch(showToast({ message: 'Downloading Vrushali_Pawar.pdf...', type: 'success' }));
    downloadResumeFile('Vrushali_Pawar.pdf');
  };

  return (
    <div className="space-y-4">
      {/* Email Card with 1-click copy */}
      <GlassCard className="p-7 border-obsidian-750/80 hover:border-teal-brand/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-light">
            Direct Email
          </span>
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-teal-brand hover:text-white text-slate-300 text-xs font-semibold transition-colors cursor-pointer shadow-sm border border-obsidian-700"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-teal-light" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <a
          href={`mailto:${PROFILE_INFO.email}`}
          className="text-base sm:text-lg font-bold text-white hover:text-teal-light transition-colors block break-all tracking-tight"
        >
          {PROFILE_INFO.email}
        </a>
      </GlassCard>

      {/* Social Connects */}
      <div className="grid grid-cols-2 gap-4">
        <a
          href={PROFILE_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-3xl bg-gradient-to-b from-obsidian-850 to-obsidian-900 border border-obsidian-750 hover:border-teal-brand/50 text-slate-200 hover:text-teal-light transition-all flex flex-col justify-between group shadow-glossy-card"
        >
          <div className="w-10 h-10 rounded-2xl bg-teal-brand/15 border border-teal-brand/30 flex items-center justify-center text-teal-light mb-4 group-hover:scale-110 transition-transform">
            <Linkedin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">LinkedIn</h4>
            <p className="text-xs text-slate-400 mt-0.5">Professional network</p>
          </div>
        </a>

        <a
          href={PROFILE_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-3xl bg-gradient-to-b from-obsidian-850 to-obsidian-900 border border-obsidian-750 hover:border-teal-brand/50 text-slate-200 hover:text-teal-light transition-all flex flex-col justify-between group shadow-glossy-card"
        >
          <div className="w-10 h-10 rounded-2xl bg-cyan-ice/15 border border-cyan-ice/30 flex items-center justify-center text-cyan-ice mb-4 group-hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">GitHub</h4>
            <p className="text-xs text-slate-400 mt-0.5">Source code & repos</p>
          </div>
        </a>
      </div>

      {/* Resume Download Card */}
      <div className="p-7 rounded-3xl bg-gradient-to-br from-obsidian-850 via-obsidian-900 to-obsidian-850 border border-teal-brand/30 shadow-glossy-card">
        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-light" />
          <span>Looking for my complete resume?</span>
        </h4>
        <p className="text-xs text-slate-400 mb-5 leading-relaxed font-normal">
          Download my latest CV with verified technical achievements and production outcomes.
        </p>
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={handleResumeClick}
          icon={<FileDown className="w-4 h-4" />}
        >
          Download Résumé (Vrushali_Pawar.pdf)
        </Button>
      </div>
    </div>
  );
};
