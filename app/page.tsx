'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';
import {
  Bell,
  User,
  Stethoscope,
  CalendarDays,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Languages,
  Eye,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EntryPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    privacyAccepted: false,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-surface-highest/10">
        <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-2xl signature-gradient flex items-center justify-center text-white shadow-glass transition-transform group-hover:scale-105">
              <Stethoscope size={24} />
            </div>
            <span className="text-2xl font-headline font-extrabold text-primary tracking-tighter">Sanctuary Health</span>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-10">
              <span className="font-headline font-bold tracking-tight text-primary relative after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2px] after:bg-primary cursor-pointer">Check-in</span>
              <span className="font-headline font-bold tracking-tight text-secondary/60 hover:text-primary transition-colors cursor-pointer">Appointments</span>
              <span className="font-headline font-bold tracking-tight text-secondary/60 hover:text-primary transition-colors cursor-pointer">Help</span>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2.5 rounded-full hover:bg-surface-low transition-all active:scale-95">
                <Bell size={22} className="text-secondary/80" />
              </button>
              <div className="w-[1px] h-6 bg-surface-highest/50 mx-2" />
              <button className="p-2.5 rounded-full hover:bg-surface-low transition-all active:scale-95">
                <User size={22} className="text-secondary/80" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-40 pb-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start justify-center w-full">
        {/* Left Hero Section */}
        <motion.div 
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
          className="w-full lg:w-[45%] flex flex-col space-y-12 lg:sticky lg:top-40"
        >
          <div className="space-y-6">
            <motion.div 
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm"
            >
              <ShieldCheck size={14} className="fill-primary/10" />
              <span>Digital Reception v2.4</span>
            </motion.div>
            <h1 className="font-headline text-6xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter text-balance">
              Welcome, please <span className="text-primary/40 italic">check-in</span>
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-md leading-relaxed opacity-80 font-medium">
              We’re glad to see you. Provide your details to begin your consultation in our sanctuary.
            </p>
          </div>
          
          <motion.div 
            whileHover={{rotate: -1}}
            transition={{type: 'spring', stiffness: 300, damping: 20}}
            className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-ambient group"
          >
            <Image 
              src="https://picsum.photos/seed/sanctuary-medical-2/1200/900" 
              alt="Sanctuary atmosphere" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay"></div>
            <div className="absolute bottom-8 left-8 right-8 glass-panel p-10 rounded-[2rem] shadow-glass border-white/40">
              <div className="flex items-center gap-4 mb-3 text-primary font-headline font-black text-xs uppercase tracking-[0.2em]">
                <ShieldCheck size={20} className="fill-primary/20" />
                <span>Secure check-in verified</span>
              </div>
              <p className="text-base text-secondary/80 leading-relaxed font-medium">Your privacy and data security are our highest priority during the admission process.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div 
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1]}}
          className="w-full lg:w-[55%] bg-surface-low rounded-[4rem] p-4 sm:p-12 relative"
        >
          {/* Decorative element */}
          <div className="absolute top-[-20px] right-[40px] w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="bg-white rounded-[3.5rem] p-10 md:p-14 space-y-12 shadow-ambient border border-white relative z-10">
            {/* Step Indicator */}
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-headline font-black text-sm shadow-lg shadow-primary/20">1</div>
              <div className="h-[1px] flex-grow bg-surface-highest/40" />
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-highest text-secondary/40 font-headline font-black text-sm">2</div>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary/50 uppercase tracking-[0.2em] ml-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Elena"
                    className="w-full bg-surface-low border-b-2 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all px-6 py-5 rounded-t-2xl outline-none font-bold text-lg placeholder:text-secondary/20"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary/50 uppercase tracking-[0.2em] ml-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fischer"
                    className="w-full bg-surface-low border-b-2 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all px-6 py-5 rounded-t-2xl outline-none font-bold text-lg placeholder:text-secondary/20"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary/50 uppercase tracking-[0.2em] ml-2">Date of Birth</label>
                  <div className="relative group">
                    <input 
                      type="date"
                      className="w-full bg-surface-low border-b-2 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all px-6 py-5 rounded-t-2xl outline-none appearance-none font-bold text-lg"
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    />
                    <Calendar className="absolute right-6 top-5 text-secondary/30 pointer-events-none transition-colors group-focus-within:text-primary" size={22} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary/50 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full bg-surface-low border-b-2 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all px-6 py-5 rounded-t-2xl outline-none font-bold text-lg placeholder:text-secondary/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <motion.div 
                whileHover={{x: 4}}
                className="flex items-start gap-6 p-6 rounded-[2rem] bg-surface-low/40 border border-surface-highest/10 cursor-pointer"
              >
                <div className="relative mt-1">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="w-6 h-6 rounded-lg border-surface-highest text-primary focus:ring-primary/20 cursor-pointer relative z-10"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})}
                  />
                  <div className="absolute inset-0 bg-primary/5 rounded-lg -z-0" />
                </div>
                <label htmlFor="privacy" className="text-sm text-secondary leading-relaxed cursor-pointer select-none font-medium">
                  I have read and agree to the <span className="text-primary font-black underline decoration-2 underline-offset-4">Notice of Privacy Practices</span> and acknowledge how my personal health information will be managed.
                </label>
              </motion.div>

              <Link href="/forms" className="block">
                <motion.button 
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-headline font-black py-6 rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 text-xl tracking-tight transition-all"
                >
                  <span>Begin Onboarding</span>
                  <ChevronRight size={24} />
                </motion.button>
              </Link>
            </form>

            <div className="text-center pt-4">
              <p className="text-[10px] text-secondary/40 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                <HelpCircle size={14} />
                Need assistance? Tap the <span className="text-primary/60 hover:text-primary transition-colors cursor-pointer">Help</span> button above.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Floating Footer Toolbar */}
      <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-6">
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1}}
          className="glass-panel px-10 py-4 rounded-full flex items-center justify-between shadow-ambient border-white/60"
        >
          <button className="flex items-center gap-3 text-xs font-black text-primary uppercase tracking-widest group">
            <Languages size={18} className="group-hover:rotate-12 transition-transform" />
            <span>English</span>
          </button>
          <div className="w-[1px] h-6 bg-surface-highest/50" />
          <button className="flex items-center gap-3 text-xs font-black text-secondary/60 hover:text-primary transition-all uppercase tracking-widest">
            <span>Español</span>
          </button>
          <div className="w-[1px] h-6 bg-surface-highest/50" />
          <button className="flex items-center gap-3 text-xs font-black text-secondary/60 hover:text-primary transition-all uppercase tracking-widest">
            <Eye size={18} />
            <span>Access</span>
          </button>
        </motion.div>
      </footer>
    </div>
  );
}
