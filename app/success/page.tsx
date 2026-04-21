'use client';

import React from 'react';
import {motion} from 'motion/react';
import {
  Bell,
  User,
  Stethoscope,
  CheckCircle2,
  CalendarCheck,
  MapPin,
  Clock,
  ArrowRight,
  Wifi,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{duration: 10, repeat: Infinity, ease: 'linear'}}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
          className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[50%] bg-tertiary/5 rounded-full blur-[120px]" 
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-surface-highest/10">
        <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl signature-gradient flex items-center justify-center text-white shadow-glass">
              <Stethoscope size={24} />
            </div>
            <span className="text-2xl font-headline font-extrabold text-primary tracking-tighter">Sanctuary Health</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full bg-surface-low hover:bg-surface-highest transition-all shadow-glass active:scale-95">
              <Bell size={22} className="text-primary" />
            </button>
            <button className="p-3 rounded-full bg-surface-low hover:bg-surface-highest transition-all shadow-glass active:scale-95">
              <User size={22} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl w-full px-8 pt-44 pb-20 flex flex-col items-center">
        {/* Success Hero */}
        <motion.div 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
          className="text-center mb-24 space-y-8"
        >
          <div className="relative inline-flex items-center justify-center">
            <motion.div 
              initial={{scale: 0.5, rotate: -20}}
              animate={{scale: 1, rotate: 0}}
              transition={{type: 'spring', stiffness: 200, damping: 15}}
              className="w-32 h-32 rounded-[2.5rem] bg-white shadow-ambient flex items-center justify-center relative z-10 border border-primary/5"
            >
              <CheckCircle2 size={72} fill="currentColor" className="text-primary fill-primary/10" />
            </motion.div>
            {/* Animated rings */}
            <motion.div 
              animate={{scale: [1, 1.5], opacity: [0.5, 0]}}
              transition={{duration: 2, repeat: Infinity}}
              className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/20 z-0"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter text-balance leading-[0.95]">
              Check-in complete. <br />
              <span className="text-primary/40 italic">You&apos;re in good hands.</span>
            </h1>
            <p className="text-secondary text-2xl font-semibold max-w-2xl mx-auto opacity-70 leading-relaxed text-balance">
              Take a breath and find a seat. Your specialist coordinator has been notified.
            </p>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">
          {/* Main Appointment Card */}
          <motion.div 
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
            className="lg:col-span-8 bg-white rounded-[3.5rem] p-12 shadow-ambient flex flex-col justify-between overflow-hidden relative group border border-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm border border-primary/5">
                <CalendarCheck size={16} />
                Arrival Synchronization Confirmed
              </div>
              <div>
                <h2 className="font-headline text-5xl font-black text-on-surface tracking-tighter mb-4">Dr. Julianne Sterling</h2>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-surface-low text-secondary text-xs font-bold border border-surface-highest/20">Lead Cardiologist</span>
                  <span className="px-4 py-1.5 rounded-full bg-surface-low text-secondary text-xs font-bold border border-surface-highest/20">Specialist Heart Clinic</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t-2 border-surface-low pt-12 mt-16 relative z-10">
              <div className="space-y-3">
                <p className="text-secondary/40 text-[9px] font-black uppercase tracking-[0.4em] mb-1">Time Profile</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <p className="font-headline text-3xl font-black text-on-surface leading-none">10:45 <span className="text-lg opacity-40">AM</span></p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-secondary/40 text-[9px] font-black uppercase tracking-[0.4em] mb-1">Clinic Repository</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary/5 flex items-center justify-center text-tertiary">
                    <MapPin size={24} />
                  </div>
                  <p className="font-headline text-3xl font-black text-on-surface leading-none tracking-tight">Suite <span className="italic">402-B</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* ID Card */}
            <motion.div 
              initial={{opacity: 0, x: 30}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.5}}
              className="bg-surface-low rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center border-t border-white shadow-ambient"
            >
              <p className="text-secondary font-black text-[9px] uppercase tracking-[0.3em] mb-6 opacity-40">Protocol Index</p>
              <div className="bg-white px-8 py-5 rounded-2xl mb-4 shadow-glass border border-primary/5">
                <span className="font-headline text-3xl font-black text-primary tracking-tighter">#SH-8842</span>
              </div>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-wider opacity-60 leading-relaxed px-4">Quote this code for immediate assistance at the concierge desk.</p>
            </motion.div>

            {/* Records Card */}
            <motion.div 
              initial={{opacity: 0, x: 30}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.6}}
              className="signature-gradient rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-primary/30 relative overflow-hidden group min-h-[300px]"
            >
              <Heart size={120} className="absolute -bottom-12 -right-12 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Heart size={24} />
                </div>
                <p className="text-xl font-bold opacity-90 leading-tight">
                  Update your clinical records while you wait.
                </p>
              </div>
              <motion.button 
                whileHover={{scale: 1.05}}
                className="bg-white text-primary py-5 px-8 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl relative z-10 transition-all active:scale-95"
              >
                Review Vault
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Experience Footer */}
        <motion.div 
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.7, duration: 0.8}}
          className="mt-20 w-full bg-white rounded-[3.5rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-surface-highest/10 shadow-ambient"
        >
          <div className="flex-shrink-0 relative group">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-ambient relative z-10 transform transition-transform group-hover:scale-105">
              <Image 
                src="https://picsum.photos/seed/concierge-aris/400/400" 
                alt="Concierge" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{scale: [1, 1.2, 1]}}
              transition={{duration: 2, repeat: Infinity}}
              className="absolute -bottom-2 -right-2 w-10 h-10 bg-tertiary rounded-full border-4 border-white flex items-center justify-center z-20 shadow-lg shadow-tertiary/20"
            >
              <Wifi size={18} className="text-white" />
            </motion.div>
          </div>
          <div className="flex-grow text-center md:text-left space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h3 className="text-on-surface font-headline font-black text-3xl tracking-tight">Wait: ~8 Minutes</h3>
              <span className="hidden md:block text-surface-highest">•</span>
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] py-1 shadow-sm">High Priority Access</span>
            </div>
            <p className="text-secondary text-lg font-semibold opacity-70 leading-relaxed text-balance">
              Dr. Sterling is currently concluding a consultation. Our clinical staff has been alerted of your arrival and will call you shortly.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-surface-low text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-inner border border-white">
              <Wifi size={18} />
              Guest Pass: SH_Sanctuary
            </div>
          </div>
        </motion.div>
      </main>

      {/* Persistent Footer */}
      <footer className="w-full max-w-7xl px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-secondary opacity-30 mt-auto border-t border-surface-highest/10 mx-auto">
        <span>Sanctuary Health Digital Ecosystem v2.4.1</span>
        <div className="flex items-center gap-10">
          <Link href="/" className="hover:text-primary transition-colors">Emergency Protocol</Link>
          <Link href="/" className="hover:text-primary transition-colors">Data Privacy</Link>
          <Link href="/" className="hover:text-primary transition-colors">Help Center</Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary opacity-50" />
          <span>Verified Secure Connection</span>
        </div>
      </footer>
    </div>
  );
}
