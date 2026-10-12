import React from 'react';
import { Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  updateField,
  setSubmitting,
  setSubmitSuccess,
} from '../../store/slices/contactSlice';
import { showToast } from '../../store/slices/uiSlice';

export const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { formData, status } = useAppSelector((state) => state.contact);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      dispatch(showToast({ message: 'Please fill in all required fields.', type: 'error' }));
      return;
    }

    dispatch(setSubmitting());

    // Simulated async submission
    setTimeout(() => {
      dispatch(setSubmitSuccess());
      dispatch(
        showToast({
          message: 'Thank you! Your message has been received.',
          type: 'success',
        })
      );
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0d9488', '#14b8a6', '#38bdf8', '#10b981'],
        });
      } catch {
        // Safe fallback
      }
    }, 1200);
  };

  return (
    <GlassCard className="p-7 sm:p-9 border-obsidian-750/80">
      <h3 className="text-2xl font-extrabold text-white mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                dispatch(updateField({ field: 'name', value: e.target.value }))
              }
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian-950 border border-obsidian-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Your Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                dispatch(updateField({ field: 'email', value: e.target.value }))
              }
              placeholder="e.g. alex@company.com"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian-950 border border-obsidian-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-all shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) =>
              dispatch(updateField({ field: 'subject', value: e.target.value }))
            }
            placeholder="e.g. Full Stack Role / Project Discussion"
            className="w-full px-4 py-3 rounded-2xl bg-obsidian-950 border border-obsidian-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-all shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Message *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              dispatch(updateField({ field: 'message', value: e.target.value }))
            }
            placeholder="Tell me about your team, product, or engineering opportunity..."
            className="w-full px-4 py-3 rounded-2xl bg-obsidian-950 border border-obsidian-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-all resize-none shadow-sm"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto mt-2"
          icon={<Send className="w-4 h-4" />}
          iconPosition="right"
        >
          {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </GlassCard>
  );
};
