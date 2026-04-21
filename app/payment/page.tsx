'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';
import {
  Bell,
  User,
  Stethoscope,
  LayoutDashboard,
  Wallet,
  ShieldCheck,
  Lock,
  QrCode,
  ChevronDown,
  Headset,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('online');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-surface-highest/20">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            <span className="text-xl font-headline font-bold text-primary tracking-tight">Sanctuary Health</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <span className="font-headline font-bold tracking-tight text-secondary hover:text-primary transition-colors cursor-pointer">Dashboard</span>
              <span className="font-headline font-bold tracking-tight text-primary border-b-2 border-primary cursor-pointer">Billing</span>
            </nav>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-surface-low transition-colors">
                <Bell size={20} className="text-secondary" />
              </button>
              <button className="p-2 rounded-full hover:bg-surface-low transition-colors">
                <User size={20} className="text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto w-full">
        <div className="mb-14 space-y-4">
          <motion.div 
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm"
          >
            <ShieldCheck size={14} className="fill-primary/10" />
            <span>Encrypted Billing Gateway</span>
          </motion.div>
          <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface text-balance">Finalize your <span className="text-primary italic">visit payment</span></h1>
          <p className="text-secondary text-lg font-semibold opacity-60">Secure immediate transaction for record #SH-99281-B</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Summary Card */}
            <section className="bg-white rounded-[3rem] p-10 shadow-ambient border border-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[6px] signature-gradient" />
              <h3 className="font-headline text-2xl font-black mb-10 text-primary tracking-tight">Invoice #SH-2024</h3>
              
              <div className="space-y-8">
                {[
                  {title: 'Specialist Consultation', sub: 'Dr. Aris Thorne • Cardiology Portfolio', price: '$180.00'},
                  {title: 'Diagnostic Lab Panel', sub: 'Comprehensive Lipid & Metabolic Profile', price: '$65.00'},
                  {title: 'Administrative Protocol', sub: 'Digital Records & Global Cloud Sync', price: '$10.00'}
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{opacity: 0, x: -10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.1 * i}}
                    className="flex justify-between items-start group/item"
                  >
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-on-surface leading-tight group-hover/item:text-primary transition-colors">{item.title}</p>
                      <p className="text-sm text-secondary font-semibold opacity-60">{item.sub}</p>
                    </div>
                    <span className="font-headline font-black text-xl text-on-surface">{item.price}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t-2 border-dashed border-surface-highest/40 relative">
                {/* Simulated perforation dots */}
                <div className="absolute top-[-11px] left-[-11px] w-5 h-5 rounded-full bg-background border border-surface-highest/20" />
                <div className="absolute top-[-11px] right-[-11px] w-5 h-5 rounded-full bg-background border border-surface-highest/20" />
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] opacity-40">Subtotal Valuation</span>
                  <span className="text-secondary font-black text-lg opacity-40 line-through">$255.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-1 block">Patient Responsibility</span>
                    <span className="font-headline text-3xl font-black text-on-surface">Total Due</span>
                  </div>
                  <div className="text-right">
                    <motion.span 
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      className="font-headline text-6xl font-black text-primary tracking-tighter"
                    >
                      $255.00
                    </motion.span>
                  </div>
                </div>
              </div>
            </section>

            {/* Meta Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-low/50 rounded-[2.5rem] p-10 space-y-6 border border-white">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-glass ring-1 ring-primary/5">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mb-2">Patient Authority</p>
                  <p className="font-headline font-black text-2xl text-on-surface">Julianne Sterling</p>
                  <p className="text-xs text-secondary font-bold opacity-60">Master Record: 882-019-22</p>
                </div>
              </div>

              <div className="bg-surface-low/50 rounded-[2.5rem] p-10 space-y-6 border border-white">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-glass ring-1 ring-primary/5">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mb-2">Internal Status</p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-tertiary" />
                    <p className="font-headline font-black text-2xl text-on-surface">Self-Pay</p>
                  </div>
                  <p className="text-xs text-secondary font-bold opacity-60">Verified Identity v9</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            <section className="bg-white rounded-[3.5rem] p-12 shadow-ambient border border-white relative group">
              <h3 className="font-headline text-3xl font-black mb-10 text-on-surface tracking-tight text-center">Payment Protocol</h3>
              
              <div className="flex gap-2 p-2 bg-surface-low rounded-[2rem] mb-12 shadow-inner border border-surface-highest/10">
                <button 
                  onClick={() => setPaymentMethod('online')}
                  className={`flex-1 py-4 px-6 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all ${paymentMethod === 'online' ? 'bg-white shadow-ambient text-primary' : 'text-secondary opacity-60 hover:opacity-100'}`}
                >
                  Digital
                </button>
                <button 
                  onClick={() => setPaymentMethod('desk')}
                  className={`flex-1 py-4 px-6 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all ${paymentMethod === 'desk' ? 'bg-white shadow-ambient text-primary' : 'text-secondary opacity-60 hover:opacity-100'}`}
                >
                  Terminal
                </button>
              </div>

              <div className="space-y-12">
                <div className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{scale: 1.05, rotate: 1}}
                    className="p-8 bg-white rounded-[3rem] shadow-ambient border-4 border-surface-low relative group cursor-pointer overflow-hidden ring-1 ring-primary/5"
                  >
                    <QrCode size={200} strokeWidth={0.8} className="text-on-surface opacity-90 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white shadow-2xl px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/10">Scan Code</div>
                    </div>
                  </motion.div>
                  <p className="text-sm text-secondary font-bold text-center mt-8 max-w-[260px] leading-relaxed opacity-60">
                    Use your preferred medical portal or digital wallet for immediate verification.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black text-secondary/30 uppercase tracking-[0.4em] ml-2 font-headline">Stored Credentials</label>
                    <div className="relative group">
                      <select className="w-full bg-surface-low border-b-4 border-primary/20 focus:border-primary px-8 py-5 rounded-t-3xl font-black text-lg outline-none appearance-none cursor-pointer group-hover:bg-surface-highest transition-all shadow-inner">
                        <option>Select vault method...</option>
                        <option>Visa Classic (••• 4242)</option>
                        <option>Apple Pay Vault</option>
                        <option>Sync New Repository</option>
                      </select>
                      <ChevronDown size={22} className="absolute right-8 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-all pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/success" className="block">
                    <motion.button 
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                      className="w-full signature-gradient text-white py-6 px-10 rounded-[2rem] font-headline font-black text-2xl shadow-ambient hover:shadow-primary/40 active:scale-[0.98] transition-all flex justify-center items-center gap-5"
                    >
                      <span>Authorize Protocol</span>
                      <Lock size={24} />
                    </motion.button>
                  </Link>
                  <div className="mt-8 flex items-center justify-center gap-4 text-secondary/30">
                    <ShieldCheck size={18} />
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-center">FIPS-2 Certified Gateway</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Area */}
            <motion.div 
              whileHover={{y: -5}}
              className="bg-[#d6e3ff]/50 rounded-[2.5rem] p-10 flex items-center gap-6 group cursor-pointer hover:bg-[#d6e3ff]/80 transition-all border border-white"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-primary shadow-ambient border border-primary/5">
                <Headset size={32} />
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-black text-[#001b3d] text-xl tracking-tight">Billing Concierge</h4>
                <p className="text-[#00468b] text-base font-bold opacity-70">Assistance with insurance parity</p>
              </div>
              <motion.div 
                whileHover={{x: 5}}
                className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest whitespace-nowrap"
              >
                Connect
                <Phone size={16} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Enhanced Status Notification */}
      <motion.div 
        initial={{opacity: 0, x: 100, scale: 0.8}}
        animate={{opacity: 1, x: 0, scale: 1}}
        transition={{delay: 1.2, type: 'spring', damping: 20}}
        className="fixed bottom-12 right-12 max-w-sm glass-panel shadow-ambient rounded-[2rem] p-6 flex items-center gap-6 border-l-8 border-primary z-[100]"
      >
        <div className="signature-gradient rounded-2xl p-4 shadow-glass">
          <CheckCircle2 size={24} className="text-white" />
        </div>
        <div>
          <p className="font-black text-xs text-primary uppercase tracking-[0.2em] mb-1">Status Synchronized</p>
          <div className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary text-[9px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest border border-primary/20">Payment Verified</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
