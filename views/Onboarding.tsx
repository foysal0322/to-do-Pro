
import React from 'react';

interface Props {
  onComplete: () => void;
}

const Onboarding: React.FC<Props> = ({ onComplete }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between items-center px-6 py-12 bg-background-dark text-white overflow-hidden">
      <div className="w-full flex-1 flex flex-col justify-center items-center gap-12 pt-8">
        <div className="relative w-full aspect-square max-w-[320px] mx-auto">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          <div 
            className="relative w-full h-full flex items-center justify-center bg-zinc-800/20 rounded-xl border border-zinc-700/30 overflow-hidden"
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCptKKJIvtLPyoXR3M_CdOXMT_jqLlRygLLl0BKG86pTcJXz-qLM1o59Q7M-bEsWPD37wXvdoS9DZc7_-BP3ZafduRopzsMUVt1ayRoUsoAKQyPrijVnvdyBB29eMWKd3begk_aYjLdOV5qWPT_YCCJSTO6ynFjcJA1DSUG4AqavvUaZ74DcmQxWv5TyAG5fmdolMu9GaESakSVqm9RTJevr6AbIFOhu8dEgQDDg8pjWtOgqf4dS6950YzKhLsNKHISIWWbfVckyDk")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -top-4 -right-4 p-4 bg-primary rounded-xl shadow-xl shadow-primary/20 rotate-12">
            <span className="material-symbols-outlined text-background-dark text-3xl">done_all</span>
          </div>
        </div>

        <div className="w-full text-center space-y-4">
          <h1 className="text-white tracking-tight text-4xl font-extrabold leading-tight px-2">
            Welcome to <span className="text-primary">TaskFlow</span>
          </h1>
          <p className="text-zinc-400 text-lg font-normal leading-relaxed px-4">
            Master your day with a calm, organized workspace. Track tasks and achieve your goals with effortless clarity.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 pb-4">
        <div className="flex w-full flex-row items-center justify-center gap-3">
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
        </div>
        <button 
          onClick={onComplete}
          className="flex min-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-background-dark text-lg font-bold leading-normal tracking-wide transition-transform active:scale-95 shadow-lg shadow-primary/10"
        >
          <span>Get Started</span>
          <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
