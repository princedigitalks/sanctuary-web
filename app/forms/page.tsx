'use client';

import React, {useState} from 'react';
import {motion} from 'motion/react';
import {
  Bell,
  User,
  Stethoscope,
  CheckCircle2,
  FileText,
  CreditCard,
  UserCheck,
  History,
  Dumbbell,
  FileEdit,
  RotateCw,
  ArrowRight,
  ShieldCheck,
  Info,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FormsPage() {
  const [stressLevel, setStressLevel] = useState(6);

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
              <span className="font-headline font-bold tracking-tight text-primary border-b-2 border-primary cursor-pointer">Appointments</span>
              <span className="font-headline font-bold tracking-tight text-secondary hover:text-primary transition-colors cursor-pointer">Records</span>
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
      <main className="pt-32 pb-24 px-8 max-w-5xl mx-auto w-full">
        {/* Progress Tracker */}
        <div className="mb-16">
          <div className="flex justify-between items-center max-w-2xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-surface-highest/40 -z-10 -translate-y-1/2"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4 bg-background px-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center shadow-glass ring-1 ring-primary/10">
                <CheckCircle2 size={24} fill="currentColor" className="fill-primary/20" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Check-in</span>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4 bg-background px-6 relative">
              <motion.div 
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/30 ring-[6px] ring-primary/5 z-10"
              >
                <FileText size={24} />
              </motion.div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Onboarding</span>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4 bg-background px-6 opacity-40">
              <div className="w-12 h-12 rounded-full bg-surface-highest text-secondary flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Billing</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-14 text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel text-primary shadow-glass">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Patient Status: Active</span>
          </div>
          <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface text-balance">Welcome back, <span className="text-primary opacity-60 italic">Alexander.</span></h1>
          <p className="font-body text-xl text-secondary max-w-xl mx-auto opacity-70 leading-relaxed font-semibold">Please complete your clinical records to finalize your arrival for today&apos;s physical assessment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Forms */}
          <div className="lg:col-span-8 space-y-12">
            {/* Medical History */}
            <section className="bg-white rounded-[3rem] p-10 shadow-ambient border border-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-[1.5rem] bg-surface-low flex items-center justify-center text-primary shadow-inner border border-white">
                  <History size={32} />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-black tracking-tight">Full Medical History</h2>
                  <p className="text-secondary font-semibold opacity-60">Required for annual record synchronization.</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <motion.div 
                  whileHover={{x: 4}}
                  className="p-8 rounded-[2.5rem] bg-surface-low/50 border border-transparent hover:border-primary/10 transition-all cursor-pointer"
                >
                  <p className="text-lg font-bold mb-6 text-on-surface/80">Do you have any known allergies to medication?</p>
                  <div className="flex gap-10">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="allergies" className="w-6 h-6 text-primary border-surface-highest focus:ring-primary peer opacity-0 absolute" />
                        <div className="w-6 h-6 rounded-full border-2 border-surface-highest group-hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity absolute" />
                      </div>
                      <span className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="allergies" className="w-6 h-6 text-primary border-surface-highest focus:ring-primary peer opacity-0 absolute" defaultChecked />
                        <div className="w-6 h-6 rounded-full border-2 border-surface-highest group-hover:border-primary transition-colors peer-checked:border-primary peer-checked:bg-primary/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity absolute" />
                      </div>
                      <span className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">No</span>
                    </label>
                  </div>
                </motion.div>

                <div className="p-8 rounded-[2.5rem] bg-surface-low/50 border border-transparent">
                  <p className="text-lg font-bold mb-8 text-on-surface/80">Select any current symptoms you are experiencing:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Frequent Headaches', 'Joint Stiffness', 'Digestive Discomfort', 'Chronic Fatigue'].map((symptom, i) => (
                      <motion.label 
                        key={i} 
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-transparent hover:border-primary/20 hover:shadow-ambient transition-all cursor-pointer group"
                      >
                        <input type="checkbox" className="rounded-lg text-primary border-surface-highest w-6 h-6 transition-transform group-hover:scale-110" defaultChecked={i === 1} />
                        <span className="font-bold text-secondary group-hover:text-primary transition-colors">{symptom}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Lifestyle Assessment */}
            <section className="bg-white rounded-[3rem] p-10 shadow-ambient border border-white">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <Dumbbell size={32} />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-black tracking-tight">Lifestyle Assessment</h2>
                  <p className="text-secondary font-semibold opacity-60">Custom protocol by Dr. Aris Thorne.</p>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.3em] ml-2">Current Activity Level</label>
                  <select className="w-full bg-surface-low/50 border-b-2 border-primary border-t-0 border-x-0 rounded-t-2xl px-8 py-5 focus:ring-0 focus:border-primary-container outline-none font-bold text-lg appearance-none cursor-pointer">
                    <option>Sedentary (Minimal exercise)</option>
                    <option selected>Lightly Active (1-2 days/week)</option>
                    <option>Moderately Active (3-5 days/week)</option>
                    <option>Very Active (Daily intense training)</option>
                  </select>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex justify-between items-end mb-2">
                    <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.3em] ml-2">Daily Stress Levels</label>
                    <span className="font-headline font-black text-4xl text-primary">{stressLevel}</span>
                  </div>
                  <div className="relative px-2">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={stressLevel}
                      onChange={(e) => setStressLevel(parseInt(e.target.value))}
                      className="w-full h-3 bg-surface-low rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[8px] font-black text-secondary/30 uppercase tracking-[0.4em] mt-6 px-1">
                      <span>Restorative</span>
                      <span>High Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Consent Section */}
            <section className="bg-white rounded-[3rem] p-10 shadow-ambient border border-white overflow-hidden relative">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-primary/5 flex items-center justify-center text-primary">
                  <FileEdit size={32} />
                </div>
                <h2 className="font-headline text-2xl font-black tracking-tight">Consent to Treatment</h2>
              </div>
              
              <div className="bg-surface-low/40 p-8 rounded-[2rem] text-base text-secondary/80 leading-relaxed mb-10 border border-white/60">
                <p className="mb-6">I hereby consent to the administration and performance of all anesthetic, diagnostic, medical and/or surgical treatments and procedures which may be deemed necessary by the physician in charge of my care at Sanctuary Health.</p>
                <p className="font-bold text-secondary">I acknowledge that I am responsible for all charges incurred during the visit and no guarantees have been made to me regarding outcomes.</p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.3em] ml-2">Digital Signature</label>
                <div className="h-48 w-full bg-white border-2 border-dashed border-surface-highest/40 rounded-[2rem] relative flex items-center justify-center overflow-hidden group cursor-crosshair">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>
                  <motion.span 
                    initial={{opacity: 0.2, scale: 0.9}}
                    whileInView={{opacity: 0.4, scale: 1}}
                    className="font-headline italic text-4xl select-none tracking-[0.2em] text-primary"
                  >
                    Alexander Thorne
                  </motion.span>
                  <div className="absolute bottom-6 right-6">
                    <motion.button 
                      whileHover={{rotate: 180}}
                      className="p-3.5 rounded-full glass-panel hover:bg-surface-highest transition-all text-primary shadow-glass active:scale-90"
                    >
                      <RotateCw size={20} />
                    </motion.button>
                  </div>
                  {/* Subtle underline */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-primary/10" />
                </div>
                <p className="text-[8px] text-secondary/40 text-center font-black uppercase tracking-[0.5em] mt-6">By signing, you confirm legal authenticity of coordinates.</p>
              </div>
            </section>

            {/* Action Bar */}
            <div className="flex justify-end pt-10">
              <Link href="/payment" className="block">
                <motion.button 
                  whileHover={{scale: 1.02, x: 5}}
                  whileTap={{scale: 0.98}}
                  className="signature-gradient text-white px-14 py-6 rounded-full font-headline font-black text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all flex items-center gap-4 group"
                >
                  <span>Sync & Proceed</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Column: Context */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="bg-surface-low rounded-3xl p-8 border border-white">
              <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-8">Clinic Visit Summary</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14">
                    <Image 
                      src="https://picsum.photos/seed/doctor-aris/200/200" 
                      alt="Dr. Aris Thorne" 
                      width={56} 
                      height={56} 
                      className="rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-fixed rounded-full border-2 border-surface-low flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-[#001f24]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-primary">Dr. Aris Thorne</p>
                    <p className="text-xs text-secondary font-medium">Senior Osteopath</p>
                  </div>
                </div>
                
                <div className="space-y-5 pt-2">
                  {[
                    {label: 'Time', value: '14:30 PM Today'},
                    {label: 'Room', value: 'Suite 402, North Wing'},
                    {label: 'Visit Type', value: 'Initial Assessment'}
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-secondary/80">{item.label}</span>
                      <span className="font-bold text-on-surface">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-surface-highest/10">
              <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-4 rounded-2xl bg-surface-low/50">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={16} fill="currentColor" className="text-primary fill-primary/20" />
                    <span className="text-sm font-bold">Patient Info</span>
                  </div>
                  <span className="text-[9px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-black uppercase tracking-wider">Done</span>
                </li>
                <li className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary/20">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="animate-pulse w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-bold">Medical History</span>
                  </div>
                  <span className="text-[9px] bg-primary text-white px-2.5 py-1 rounded-full font-black uppercase tracking-wider shadow-md shadow-primary/20">Active</span>
                </li>
                <li className="flex items-center justify-between p-4 rounded-2xl opacity-40">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-sm font-bold">Payment Auth</span>
                  </div>
                  <span className="text-[9px] bg-surface-highest text-secondary px-2.5 py-1 rounded-full font-black uppercase tracking-wider">Pending</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-primary text-white flex flex-col items-center text-center gap-4 shadow-xl shadow-primary/20">
              <ShieldCheck size={48} className="text-[#9eefff]" />
              <p className="font-headline font-bold text-xl leading-tight">Secure Encryption</p>
              <p className="text-xs text-white/70 leading-relaxed">Your medical data is encrypted with 256-bit protocol and is only accessible by your primary care physician.</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Status */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-on-surface text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-4 z-50">
        <Info size={18} className="text-tertiary-fixed" />
        <span className="text-sm font-medium">Forms Remaining: <span className="font-bold text-tertiary-fixed">2 of 3</span></span>
      </div>
    </div>
  );
}
