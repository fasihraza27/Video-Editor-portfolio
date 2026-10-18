import { PROCESS_STEPS } from "../data/portfolioData";
export const CreativeProcess = () => {
  return <section id="process" className="py-24 sm:py-32 border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {
    /* Header */
  }
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            How we work together
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            A clear, four-step post-production workflow designed for smooth collaboration and prompt delivery.
          </p>
        </div>

        {
    /* 4-Column Minimal Process Steps */
  }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => <div key={step.step} className="space-y-3 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-neutral-400 block">
                {step.number}
              </span>
              <h3 className="text-lg font-medium text-white">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {step.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
