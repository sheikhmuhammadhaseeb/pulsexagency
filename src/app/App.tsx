import React, { useState } from 'react';
import { GlassCard } from './components/GlassCard';
import { GlassButton } from './components/GlassButton';
import { Brain, Phone, Target, Zap, Dumbbell, TrendingUp, Users, Mail, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');

  const services = [
    {
      icon: Phone,
      title: 'AI Receptionist',
      description: 'Never miss a call. Our AI handles inquiries 24/7, schedules appointments, and provides instant customer support with human-like conversations.',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Convert visitors into qualified leads automatically. Smart chatbots engage prospects, capture data, and nurture them through your sales funnel.',
    },
    {
      icon: Zap,
      title: 'Smart CRM Integration',
      description: 'Seamlessly sync customer data across platforms. Automate workflows, track interactions, and gain actionable insights with AI-powered analytics.',
    },
  ];

  const useCases = [
    {
      icon: Dumbbell,
      title: 'Class Scheduling',
      description: 'Automate member bookings and send smart reminders',
    },
    {
      icon: TrendingUp,
      title: 'Member Retention',
      description: 'AI-driven engagement to keep members active',
    },
    {
      icon: Users,
      title: 'Lead Nurturing',
      description: 'Convert trial members into paying customers',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Animated mesh gradient backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif' }}>
              Pulse X
            </span>
          </motion.div>

          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <GlassButton variant="primary">Get Started</GlassButton>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Automate Growth.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Powered by Pulse X AI.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI automation. Increase efficiency, reduce costs, and scale effortlessly with intelligent solutions tailored for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlassButton variant="primary">
                Start Free Trial
              </GlassButton>
              <GlassButton variant="secondary">
                Watch Demo
              </GlassButton>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1764601842167-ba701eed47f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBhaXxlbnwxfHx8fDE3NjcyMDk5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Neural Network"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif' }}>
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive automation tools designed to revolutionize your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center mb-6 border border-cyan-400/30">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases - Gyms & Fitness */}
      <section id="use-cases" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-12">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-10 h-10 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif' }}>
                Built for Gyms & Fitness Centers
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl">
              We specialize in helping fitness businesses automate operations, boost member engagement, and maximize revenue with AI-powered solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <useCase.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* About Us */}
      <section id="about" className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif' }}>
              AI-First. Results-Driven.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Pulse X, we believe in the transformative power of artificial intelligence. Our mission is to make enterprise-grade AI automation accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We combine cutting-edge machine learning, natural language processing, and intelligent automation to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a focus on measurable ROI, seamless integration, and exceptional support, we partner with you to build a smarter, more efficient future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-10">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Lightning Fast</h3>
                    <p className="text-gray-400">Deploy AI solutions in days, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Smart Technology</h3>
                    <p className="text-gray-400">Advanced AI that learns and adapts to your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Dedicated Support</h3>
                    <p className="text-gray-400">24/7 expert assistance whenever you need it</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking companies leveraging AI to achieve unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <GlassButton variant="primary">
                Get Started
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>Pulse X</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered automation solutions for the modern business
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">AI Receptionist</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm text-center">
              Pulse X AI Solutions – Owned and Operated by Sheikh Muhammad Haseeb, Sole Proprietor
            </p>
            <p className="text-gray-500 text-xs text-center mt-2">
              © 2025 Pulse X. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
