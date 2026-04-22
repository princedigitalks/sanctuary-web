'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Monitor, 
  CalendarCheck, 
  Clock, 
  History, 
  ShieldCheck, 
  CreditCard, 
  ArrowLeft, 
  ArrowRight, 
  Info, 
  Stethoscope, 
  User, 
  ShieldAlert, 
  Wallet, 
  CheckCircle2, 
  Fingerprint, 
  MapPin, 
  Download, 
  HelpCircle, 
  Globe, 
  Lock, 
  FileText,
  Smartphone,
  CalendarDays
} from 'lucide-react';

// --- Types ---
type Step = 'details' | 'consent' | 'payment' | 'confirmation';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('details');
  const [formsProgress, setFormsProgress] = useState({
    history: 'completed',
    consent: 'in-progress',
    payment: 'upcoming'
  });

  const steps: { id: Step; label: string }[] = [
    { id: 'details', label: 'Your Details' },
    { id: 'consent', label: 'Forms & Consent' },
    { id: 'payment', label: 'Payment' }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-white border-b border-slate-100 py-6 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 font-manrope">ClinicFlow</span>
          </div>
          <div className="hidden md:flex text-on-surface-variant font-semibold tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-[10px] items-center gap-2">
            <Monitor className="w-4 h-4" />
            PATIENT SELF CHECK-IN
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center p-4 lg:p-gutter">
        <div className="w-full max-w-7xl">
          {/* Progress Indicator */}
          {currentStep !== 'confirmation' && (
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-between relative px-2">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10"></div>
                <div 
                  className="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all duration-500" 
                  style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                ></div>
                
                {steps.map((step, idx) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = currentStepIndex > idx;
                  
                  return (
                    <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isCompleted ? 'primary-gradient text-white shadow-lg' : 
                        isActive ? 'primary-gradient text-white shadow-lg ring-4 ring-primary/10' : 
                        'bg-white border-2 border-surface-container-highest text-slate-400'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5" /> : <span className="font-bold">{idx + 1}</span>}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {currentStep === 'details' && (
              <DetailsStep key="details" onNext={() => setCurrentStep('consent')} />
            )}
            {currentStep === 'consent' && (
              <ConsentStep 
                key="consent" 
                onBack={() => setCurrentStep('details')}
                onNext={() => setCurrentStep('payment')}
              />
            )}
            {currentStep === 'payment' && (
              <PaymentStep 
                key="payment" 
                onBack={() => setCurrentStep('consent')}
                onNext={() => setCurrentStep('confirmation')}
              />
            )}
            {currentStep === 'confirmation' && (
              <ConfirmationStep key="confirmation" onReset={() => setCurrentStep('details')} />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-100 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>Need help? Ask at the front desk.</span>
          </div>
          <p>© 2024 ClinicFlow Medical Systems. All data is processed securely.</p>
        </div>
      </footer>
    </div>
  );
}

// --- Steps ---

function DetailsStep({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-2xl mx-auto w-full"
    >
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-2xl font-bold font-manrope text-slate-900 mb-1">Patient Information</h2>
          <p className="text-slate-500 text-sm">Please provide your personal details to begin the check-in process.</p>
        </div>
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Name</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Alexander" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Last Name</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Thompson" type="text" />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
            <div className="flex gap-3">
              <div className="relative flex-grow">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">+1</span>
                <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none" placeholder="(555) 000-0000" type="tel" />
              </div>
              <button className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-all whitespace-nowrap">
                OTP Verify
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Date of Birth</label>
            <div className="relative">
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none" type="date" />
              <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input className="w-5 h-5 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary" id="privacy" type="checkbox" />
            <label className="text-sm text-slate-500 leading-snug" htmlFor="privacy">
              I accept the <span className="text-primary font-semibold underline decoration-2 cursor-pointer">privacy policy</span> and understand how my medical data will be handled securely in accordance with HIPAA regulations.
            </label>
          </div>

          <button 
            onClick={onNext}
            className="w-full py-4 primary-gradient text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            Continue to Forms
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/50">
          <ShieldCheck className="text-primary w-6 h-6" />
          <div>
            <h4 className="font-bold text-slate-900 text-xs">Secure Encryption</h4>
            <p className="text-[10px] text-slate-500">256-bit SSL Data Protection</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/50 border border-purple-100/50">
          <Smartphone className="text-secondary w-6 h-6" />
          <div>
            <h4 className="font-bold text-slate-900 text-xs">Need Help?</h4>
            <p className="text-[10px] text-slate-500">Tap help icon for assistance</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConsentStep({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      {/* Left Column */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-lg">Appointment Summary</h3>
            <FileText className="text-slate-400 w-5 h-5" />
          </div>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Patient</p>
              <p className="font-bold text-slate-900">Marcus Sterling</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Doctor</p>
                <p className="text-sm font-medium text-slate-700">Dr. Sarah Chen</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Type</p>
                <p className="text-sm font-medium text-slate-700">Cardiology F/U</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CalendarCheck className="text-primary w-4 h-4" />
                <span>October 24, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Clock className="text-primary w-4 h-4" />
                <span>02:30 PM (EST)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-lg">Check-in Steps</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { icon: History, label: 'Medical History', status: 'Completed', color: 'bg-green-50 text-green-600', checked: true },
              { icon: ShieldAlert, label: 'Consent Forms', status: 'In Progress', color: 'bg-indigo-50 text-indigo-600', active: true },
              { icon: Wallet, label: 'Co-payment', status: 'Upcoming', color: 'bg-slate-50 text-slate-400', disabled: true }
            ].map((step, i) => (
              <div key={i} className={`p-6 flex items-center justify-between ${step.active ? 'bg-slate-50/50' : step.disabled ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.color}`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{step.label}</p>
                    <p className={`text-xs ${step.active ? 'text-primary font-bold' : 'text-slate-500'}`}>{step.status}</p>
                  </div>
                </div>
                {step.checked && <CheckCircle2 className="text-green-600 w-5 h-5" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-2xl font-bold font-manrope text-slate-900">Digital Consent & Authorization</h3>
            <p className="text-slate-500 text-sm">Please review the following terms carefully</p>
          </div>
          <div className="p-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 max-h-[350px] overflow-y-auto mb-8 scrollbar-thin scrollbar-thumb-slate-200">
              <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
                <section>
                  <h4 className="font-bold text-slate-900 text-base mb-2">1. Consent to Medical Treatment</h4>
                  <p>I hereby authorize ClinicFlow MediCenter and its professional staff to perform medical treatments, diagnostic procedures, and therapeutic interventions as deemed necessary for my care. I understand that medicine is not an exact science and acknowledge that no guarantees have been made to me as to the results of treatments or examinations.</p>
                </section>
                <section>
                  <h4 className="font-bold text-slate-900 text-base mb-2">2. Financial Responsibility</h4>
                  <p>I understand that I am financially responsible for all charges regardless of insurance coverage. I authorize the release of any medical or other information necessary to process claims. I also authorize payment of medical benefits to ClinicFlow MediCenter for services described on any insurance claim.</p>
                </section>
                <section>
                  <h4 className="font-bold text-slate-900 text-base mb-2">3. Privacy Practices (HIPAA)</h4>
                  <p>I acknowledge that I have been provided with a copy of the Notice of Privacy Practices, which describes how my protected health information may be used and disclosed. I understand that I have the right to review this notice before signing this consent.</p>
                </section>
              </div>
            </div>

            <label className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer group mb-8">
              <input className="w-6 h-6 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
              <div>
                <p className="font-bold text-slate-900">I have read and agree to all terms and conditions listed above.</p>
                <p className="text-xs text-slate-500 mt-1">By checking this box, you provide a legal electronic signature equivalent to a handwritten signature.</p>
              </div>
            </label>

            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Patient Signature</label>
                <button className="text-primary text-[10px] font-bold hover:underline">Clear Signature</button>
              </div>
              <div className="signature-pad w-full h-40 bg-white border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center relative group cursor-crosshair">
                <Fingerprint className="text-slate-100 w-16 h-16 transition-transform group-hover:scale-110" />
                <p className="text-slate-300 text-center text-xs mt-2 px-6">Please sign within this box using your finger or stylus</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-slate-100">
              <button 
                onClick={onBack}
                className="px-6 py-3 rounded-lg font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button 
                onClick={onNext}
                className="px-10 py-4 primary-gradient text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center gap-3"
              >
                Complete & Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PaymentStep({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-7 space-y-6">
        <h2 className="text-3xl font-bold font-manrope text-slate-900">Choose Payment Method</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Globe, label: 'Online Banking', desc: 'Securely link your bank account.', active: true },
            { icon: CreditCard, label: 'Credit/Debit Card', desc: 'Visa, Master, Amex supported.' },
            { icon: Wallet, label: 'UPI / Wallet', desc: 'PhonePe, Google Pay, Paytm.' },
            { icon: History, label: 'Cash at Clinic', desc: 'Pay at the reception desk.' }
          ].map((method, i) => (
            <button 
              key={i} 
              className={`p-6 bg-white rounded-xl border-2 transition-all text-left flex flex-col gap-3 group ${
                method.active ? 'border-primary ring-4 ring-primary/5 shadow-md' : 'border-slate-100 hover:border-primary/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                method.active ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'
              }`}>
                <method.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">{method.label}</p>
                <p className="text-xs text-slate-500 leading-snug">{method.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
          {[
            { icon: ShieldCheck, label: 'SSL SECURED', color: 'text-emerald-600' },
            { icon: Lock, label: 'PCI DSS COMPLIANT', color: 'text-slate-400' },
            { icon: ShieldCheck, label: 'ENCRYPTED DATA', color: 'text-indigo-600' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
              <badge.icon className={`${badge.color} w-3 h-3`} />
              <span className="text-[10px] font-bold text-slate-600 tracking-wider">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-6 bg-slate-50/50 border-b border-slate-100">
            <h3 className="text-xl font-bold font-manrope">Billing Summary</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-slate-900">Consultation Fee</p>
                <p className="text-xs text-slate-500">Specialist Appointment</p>
              </div>
              <p className="font-bold text-slate-900">$120.00</p>
            </div>

            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                <div>
                  <p className="text-sm font-bold text-emerald-800">Insurance Discount</p>
                  <p className="text-[10px] text-emerald-700">BlueCross Silver Plan</p>
                </div>
              </div>
              <p className="font-bold text-emerald-800">-$45.00</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500">Tax (GST 5%)</p>
              <p className="font-bold text-slate-900">$3.75</p>
            </div>

            <div className="pt-6 border-t border-dashed border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <p className="text-xl font-bold font-manrope">Total Payable</p>
                <p className="text-2xl font-bold text-primary">$78.75</p>
              </div>
              <button 
                onClick={onNext}
                className="w-full py-4 primary-gradient text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Complete Payment
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center mt-4 text-[10px] text-slate-400">
                By clicking Pay Now, you agree to our <span className="text-primary underline cursor-pointer">Terms of Service</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl flex gap-4">
          <Info className="text-primary w-5 h-5 shrink-0" />
          <p className="text-xs text-indigo-900 leading-relaxed font-medium">
            Your payment is 100% secure. We do not store your full card details on our servers.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ConfirmationStep({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto w-full text-center"
    >
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6 shadow-2xl relative">
          <div className="absolute inset-0 bg-primary/5 animate-ping rounded-full"></div>
          <CheckCircle2 className="w-12 h-12 relative z-10" />
        </div>
        <h1 className="text-4xl font-extrabold font-manrope text-slate-900 mb-2">Appointment Confirmed</h1>
        <p className="text-lg text-slate-500 max-w-md mx-auto">Your check-in was successful. Dr. Smith has been notified of your arrival.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
        <div className="md:col-span-8 glass-card rounded-2xl p-8 text-left shadow-lg">
          <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
              <Image 
                src="https://picsum.photos/seed/doctor/200/200" 
                alt="Doctor" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Primary Physician</p>
              <h3 className="text-2xl font-bold font-manrope text-slate-900">Dr. Alexander Smith</h3>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center group">
              <div className="flex items-center gap-2 text-slate-400">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm">Date & Time</span>
              </div>
              <p className="font-bold text-slate-900">Monday, Oct 24 • 10:30 AM</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Location</span>
              </div>
              <p className="font-bold text-slate-900">Suite 402, North Wing</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Fingerprint className="w-4 h-4" />
                <span className="text-sm">Appointment ID</span>
              </div>
              <p className="font-mono font-bold text-primary">#CF-99201-B</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-md text-left flex flex-col justify-between h-[160px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Payment Status</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold mb-3 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                PAID
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed italic">Co-pay of $25.00 processed via Visa ending in 4242.</p>
          </div>
          <div className="rounded-2xl overflow-hidden h-[120px] relative group cursor-pointer shadow-md">
            <Image 
              src="https://picsum.photos/seed/map/400/300" 
              alt="Map" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-[10px] font-bold flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary-fixed-dim" />
                2.4 miles from location
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onReset}
          className="w-full sm:w-auto px-10 py-4 primary-gradient text-white rounded-xl font-bold shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          Finish Check-in
        </button>
        <button className="w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <CalendarCheck className="w-5 h-5" />
          View Appointment
        </button>
        <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-primary font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Download Receipt
        </button>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
        <div className="flex items-center gap-2 text-xs">
          <HelpCircle className="w-4 h-4" />
          <span>Need help? Ask at the front desk</span>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          <div className="w-px h-4 bg-slate-200"></div>
          <span>ClinicFlow Kiosk Terminal #04</span>
        </div>
      </div>
    </motion.div>
  );
}
