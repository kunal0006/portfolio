'use client';

// components/ui/CommandPalette.tsx
// Cmd+K / Ctrl+K command palette powered by cmdk

import { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Copy, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { personal, featuredProjects } from '@/data/portfolio';
import { copyToClipboard } from '@/lib/utils';

interface CommandPaletteProps {
  onClose: () => void;
}

type CommandItem = {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
};

export function CommandPalette({ onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const scrollTo = useCallback((id: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, [onClose]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'go-work',
      label: 'Go to Work',
      group: 'Navigation',
      icon: <ArrowRight size={14} />,
      action: () => scrollTo('projects'),
    },
    {
      id: 'go-about',
      label: 'Go to About',
      group: 'Navigation',
      icon: <ArrowRight size={14} />,
      action: () => scrollTo('about'),
    },
    {
      id: 'go-contact',
      label: 'Go to Contact',
      group: 'Navigation',
      icon: <ArrowRight size={14} />,
      action: () => scrollTo('contact'),
    },
    // Actions
    {
      id: 'download-resume',
      label: 'Download Resume',
      group: 'Actions',
      icon: <Download size={14} />,
      action: () => {
        onClose();
        window.open(personal.resumeUrl, '_blank');
      },
    },
    {
      id: 'copy-email',
      label: copied ? 'Email Copied!' : 'Copy Email Address',
      group: 'Actions',
      icon: <Copy size={14} />,
      action: async () => {
        await copyToClipboard(personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1500);
      },
    },
    {
      id: 'open-github',
      label: 'Open GitHub',
      group: 'Actions',
      icon: <GithubIcon size={14} />,
      action: () => {
        onClose();
        window.open(personal.github, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'open-linkedin',
      label: 'Open LinkedIn',
      group: 'Actions',
      icon: <LinkedinIcon size={14} />,
      action: () => {
        onClose();
        window.open(personal.linkedin, '_blank', 'noopener,noreferrer');
      },
    },
    // Projects
    ...featuredProjects.map((p) => ({
      id: `project-${p.name.toLowerCase().replace(/\s+/g, '-')}`,
      label: p.name,
      group: 'Projects',
      icon: <ExternalLink size={14} />,
      action: () => {
        onClose();
        if (p.slug) {
          window.location.href = `/work/${p.slug}`;
        } else if (p.liveUrl) {
          window.open(p.liveUrl, '_blank', 'noopener,noreferrer');
        } else if (p.githubUrl) {
          window.open(p.githubUrl, '_blank', 'noopener,noreferrer');
        }
      },
    })),
  ];

  // Group items
  const groups = Array.from(new Set(commands.map((c) => c.group)));

  return (
    <>
      {/* Animated Backdrop & Panel Container */}
      <motion.div
        className="cmdk-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} // easeOutExpo
          style={{ width: '100%', maxWidth: '560px' }}
        >
          <Command
            className="cmdk-panel"
            onClick={(e) => e.stopPropagation()}
            loop
          >
            {/* Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Mail
                size={14}
                style={{ color: 'var(--text-muted)', flexShrink: 0 }}
              />
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Type a command or search..."
                autoFocus
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '14px',
                }}
              />
              <kbd
                style={{
                  padding: '2px 6px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}
              >
                ESC
              </kbd>
            </div>

            {/* List */}
            <Command.List
              style={{
                maxHeight: '380px',
                overflowY: 'auto',
                padding: '8px 0',
              }}
            >
              <Command.Empty
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                }}
              >
                No results for &ldquo;{search}&rdquo;
              </Command.Empty>

              {groups.map((group) => (
                <Command.Group
                  key={group}
                  heading={group}
                  style={
                    {
                      '--cmdk-group-heading-color': 'var(--text-muted)',
                      '--cmdk-group-heading-font-size': '11px',
                      '--cmdk-group-heading-font-family': 'var(--font-jetbrains-mono), monospace',
                      '--cmdk-group-heading-letter-spacing': '0.08em',
                      '--cmdk-group-heading-text-transform': 'uppercase',
                      '--cmdk-group-heading-padding': '8px 20px 4px',
                    } as React.CSSProperties
                  }
                >
                  {commands
                    .filter((c) => c.group === group)
                    .map((cmd) => (
                      <Command.Item
                        key={cmd.id}
                        value={cmd.label}
                        onSelect={cmd.action}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 20px',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          borderRadius: '0',
                          transition: 'color 0.15s ease',
                        }}
                      >
                        <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
                          {cmd.icon}
                        </span>
                        {cmd.label}
                      </Command.Item>
                    ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </motion.div>
      </motion.div>

      {/* cmdk item highlight style injection */}
      <style>{`
        [cmdk-item][data-selected="true"] {
          background: rgba(59,130,246,0.12) !important;
          color: var(--text-primary) !important;
        }
        [cmdk-item][data-selected="true"] svg {
          color: var(--accent) !important;
        }
        [cmdk-group-heading] {
          color: var(--text-muted) !important;
          font-size: 11px !important;
          font-family: var(--font-jetbrains-mono), monospace !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          padding: 8px 20px 4px !important;
        }
        [cmdk-input] {
          caret-color: var(--accent);
        }
        [cmdk-list]::-webkit-scrollbar { width: 4px; }
        [cmdk-list]::-webkit-scrollbar-track { background: transparent; }
        [cmdk-list]::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>
    </>
  );
}
