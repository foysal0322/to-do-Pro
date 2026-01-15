
import React from 'react';

interface Props {
  onLogin: () => void;
}

const Auth: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col p-6">
      <header class="pt-8 pb-10 text-center">
        <div class="inline-flex items-center justify-center size-16 bg-primary/10 rounded-2xl mb-6">
          <span class="material-symbols-outlined text-primary text-4xl fill">check_circle</span>
        </div>
        <h1 class="text-white tracking-tight text-[32px] font-bold leading-tight">Welcome Back</h1>
        <p class="text-[#9db8b6] text-base font-normal leading-relaxed mt-2">Productivity awaits you. Sign in to continue.</p>
      </header>

      <div className="space-y-4 flex-1">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold ml-1">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com"
            className="w-full rounded-xl bg-surface border border-slate-700 h-14 px-4 text-white focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold ml-1">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full rounded-xl bg-surface border border-slate-700 h-14 px-4 text-white focus:ring-2 focus:ring-primary/50"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-primary text-sm font-semibold">Forgot password?</button>
        </div>
        <button 
          onClick={onLogin}
          className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 mt-4 active:scale-[0.98]"
        >
          Log In
        </button>
      </div>

      <div class="flex items-center my-10 gap-4">
        <div class="h-[1px] flex-1 bg-slate-700/50"></div>
        <span class="text-[#9db8b6] text-xs font-bold uppercase tracking-widest">Or continue with</span>
        <div class="h-[1px] flex-1 bg-slate-700/50"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-8">
        <button className="flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-700 bg-surface">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdP3lT6pYDmK1ovdaW0XRCjiQGKDAcQBe1ZU3mjuKgN_LEit0bkoeo-v-n1ACfp9uLcJ9vSFDtnYAdmLSJwdm3MliG0fDNLMBwXf3Zdkg4wQV1ia06q5k0tKcKu_LtPjq2YhKqR1Hm-Uly3hO1bKgnbdhGKLc0H5arKaJXatZgz87WeLGEAJtp4NCwoS1_i2zpxjZ4wbZyfVKrPUmsZqyWeTK5Y3wF5K1xHRehqG4CVo-09gqUQd8Ek1Mtr5kt9vZSRICzf3umcwQ" className="size-5" alt="G" />
          <span className="font-semibold">Google</span>
        </button>
        <button className="flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-700 bg-surface">
          <span className="material-symbols-outlined text-white text-2xl fill">ios</span>
          <span className="font-semibold">Apple</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
