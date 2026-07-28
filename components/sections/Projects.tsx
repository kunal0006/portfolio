// components/sections/Projects.tsx
// Featured + secondary projects grid

import { FadeUp } from '@/components/motion/FadeUp';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { featuredProjects, secondaryProjects } from '@/data/portfolio';

export function Projects() {
  const isTwoCol = featuredProjects.length === 2;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section label */}
        <FadeUp>
          <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
            Web Apps
          </p>
        </FadeUp>

        {/* Section headline */}
        <FadeUp delay={0.05}>
          <h2
            id="projects-heading"
            className="display-md"
            style={{ color: 'var(--text-primary)', marginBottom: '48px' }}
          >
            What I&apos;ve Built
          </h2>
        </FadeUp>

        {/* Featured grid */}
        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
          className={isTwoCol ? 'projects-grid-2col' : 'projects-grid-3col'}
        >
          {featuredProjects.map((project, i) => (
            <FadeUp key={project.name} delay={i * 0.1} className={
              !isTwoCol && i === 0 ? 'project-span-full' : undefined
            }>
              <ProjectCard project={project} priority={i === 0} />
            </FadeUp>
          ))}
        </div>

        {/* Secondary projects */}
        {secondaryProjects.length > 0 && (
          <>
            <FadeUp delay={0.05}>
              <p
                className="label"
                style={{
                  color: 'var(--text-muted)',
                  marginTop: '64px',
                  marginBottom: '24px',
                }}
              >
                Websites
              </p>
            </FadeUp>

            <div
              style={{
                display: 'grid',
                gap: '16px',
                gridTemplateColumns: 'repeat(1, 1fr)',
              }}
              className="secondary-grid"
            >
              {secondaryProjects.map((project, i) => (
                <FadeUp key={project.name} delay={i * 0.07}>
                  <CaseStudyCard project={project} />
                </FadeUp>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 1024px) {
          .projects-grid-2col { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid-3col { grid-template-columns: repeat(2, 1fr) !important; }
          .project-span-full { grid-column: 1 / -1; }
        }
        @media (min-width: 768px) {
          .secondary-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .secondary-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
