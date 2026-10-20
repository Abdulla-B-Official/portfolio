'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Brain, 
  Cpu, 
  Database, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X, 
  Eye,
  BookOpen,
  Code2,
  GraduationCap,
  Check,
  Award,
  Sparkle,
  GitCommit,
  Flame,
  Calendar
} from 'lucide-react';

// Custom SVG Icons for GitHub and LinkedIn
const Github = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const linkedinCertUrl = "https://www.linkedin.com/in/abdullfhariq07/details/certifications/";
  const githubProfileUrl = "https://github.com/Abdulla-B-Official";
  const userEmail = "abdullfhariq.official@gmail.com";

  // Grid intensity levels for contribution matrix visualization
  const generateContributionDays = () => {
    const levels = [0, 1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3];
    return levels;
  };

  const contributionDays = generateContributionDays();

  const getContributionColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-900/60 border-emerald-800';
      case 2: return 'bg-emerald-600/80 border-emerald-500';
      case 3: return 'bg-emerald-400 border-emerald-300 shadow-sm shadow-emerald-400/30';
      default: return 'bg-slate-900 border-slate-800/80';
    }
  };

  const projects = [
    {
      id: 'hazardous-detection',
      title: 'Hazardous Object Detection',
      category: 'Computer Vision',
      tags: ['YOLOv9', 'OpenCV', 'Python', 'Flask'],
      summary: 'Real-time computer vision application detecting dangerous items with live bounding box annotations and confidence score meters.',
      liveUrl: 'https://hazardous-object-detection.onrender.com',
      githubUrl: 'https://github.com/Abdulla-B-Official/Hazardous-Object-Detection',
      badge: 'Live Application',
      details: 'Built using YOLOv9 fine-tuned on industrial dataset annotations. Features real-time video streaming, bounding box overlays, and confidence threshold controls.',
      metrics: ['YOLOv9 Architecture', 'Render Deployment', 'Real-Time Inference']
    },
    {
      id: 'weldvision-ai',
      title: 'WeldVision AI',
      category: 'Computer Vision',
      tags: ['YOLOv8s ONNX', 'OpenCV', 'Flask', 'React'],
      summary: 'Industrial vision inspection platform identifying micro-cracks, surface porosity, and structural welding defects in manufacturing lines.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/WeldVision-AI',
      badge: 'Industrial ML',
      details: 'Leverages ONNX Runtime for ultra-fast CPU/GPU inference. Features an interactive dashboard connected to a lightweight Flask REST backend.',
      metrics: ['ONNX Accelerated', 'Defect Segmentation', 'Industrial QC']
    },
    {
      id: 'ai-resume-screening',
      title: 'AI Resume Screening System',
      category: 'NLP & Semantic Search',
      tags: ['NLP', 'SentenceTransformers', 'Python', 'Flask'],
      summary: 'Automated candidate screening and resume parser calculating semantic relevance scores and skill matrices against job descriptions.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/AI-Resume-Screening-System',
      badge: 'NLP System',
      details: 'Parses PDF and Docx resumes, extracts key candidate skills, and compares dense vector embeddings using SentenceTransformers.',
      metrics: ['Automated Parsing', 'Dense Similarity Match', 'Candidate Ranking']
    },
    {
      id: 'language-translation',
      title: 'Language Translation System',
      category: 'NLP & Semantic Search',
      tags: ['Seq2Seq', 'FLAN-T5', 'Keras LSTM/GRU', 'PyTorch'],
      summary: 'Neural Machine Translation system comparing recurrent sequence models against fine-tuned transformer architectures for English to Tamil translation.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/Language-Translation-System',
      badge: 'Transformer NMT',
      details: 'Implements dual model comparison: Recurrent Encoder-Decoder with attention and fine-tuned FLAN-T5 LLM models for natural translation.',
      metrics: ['BLEU Evaluation', 'Transformer Fine-tuning', 'Seq2Seq Architecture']
    },
    {
      id: 'legal-clause-similarity',
      title: 'Legal Clause Similarity Engine',
      category: 'NLP & Semantic Search',
      tags: ['SentenceTransformers', 'FAISS', 'NLP', 'Flask'],
      summary: 'Dense vector semantic search engine performing sub-millisecond clause comparison across large regulatory and contract databases.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/Legal-Clause-Similarity-Engine',
      badge: 'Vector Search',
      details: 'Utilizes fine-tuned Transformer embeddings indexed with FAISS for semantic search across thousands of legal clause vectors.',
      metrics: ['FAISS Indexing', 'Sub-10ms Lookup', 'Cosine Vector Search']
    },
    {
      id: 'customer-feedback-sentiment',
      title: 'Customer Feedback Sentiment Analysis',
      category: 'NLP & Semantic Search',
      tags: ['TF-IDF', 'Logistic Regression', 'FastAPI', 'Python'],
      summary: 'Automated real-time NLP text classification microservice evaluating customer review text and sentiment polarity.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/Customer-Feedback-Sentiment-Analysis',
      badge: 'API Microservice',
      details: 'Class-balanced text classification pipeline vectorized with TF-IDF and served through high-performance FastAPI endpoints.',
      metrics: ['FastAPI Microservice', 'TF-IDF Vectorizer', 'Production Ready']
    },
    {
      id: 'mnist-autoencoder',
      title: 'MNIST Autoencoder Studio',
      category: 'Deep Learning',
      tags: ['TensorFlow', 'Keras', 'Deep Learning', 'CNN'],
      summary: 'Interactive neural network workbench showcasing deep convolutional autoencoders for digit image compression and noise removal.',
      liveUrl: null,
      githubUrl: 'https://github.com/Abdulla-B-Official/MNIST-Autoencoder-Studio',
      badge: 'Deep Learning',
      details: 'Custom deep convolutional autoencoder architecture trained to compress high-dimensional digit representations and reconstruct noise-free images.',
      metrics: ['Convolutional Autoencoder', 'Denoising Capability', 'Latent Space Mapping']
    }
  ];

  const certifications = [
    {
      title: 'Deloitte Australia Data Analytics Job Simulation',
      issuer: 'Deloitte / Forage',
      type: 'Job Simulation Certification',
      skills: 'Data Analysis, Forensic Technology, Data Visualization, Business Insights'
    },
    {
      title: 'Data Science Intern Certification (6 Months)',
      issuer: 'Besant Technologies',
      type: 'Internship Program Certification',
      skills: 'Python, Exploratory Data Analysis, Machine Learning Models, SQL, Data Pipelines'
    },
    {
      title: 'Introduction to Programming Using Python',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      type: 'Academic Certification',
      skills: 'Core Python, Algorithmic Thinking, Control Flow, Data Structures'
    },
    {
      title: 'SQL Basics Certification',
      issuer: 'SkillRack',
      type: 'Technical Skill Certification',
      skills: 'Relational Database Queries, Data Filtering, Aggregations, Joins'
    },
    {
      title: 'C Arithmetic Operators & Control Flow',
      issuer: 'SkillRack',
      type: 'Programming Skill Certification',
      skills: 'C Logic Building, Operational Flow, Expression Evaluation'
    },
    {
      title: 'C Input & Output Operations',
      issuer: 'SkillRack',
      type: 'Programming Skill Certification',
      skills: 'Standard I/O Streams, Formatting, Memory Fundamentals'
    },
    {
      title: 'Cybersecurity & Ethical Hacking Foundations',
      issuer: 'Security Essentials',
      type: 'Security Certification',
      skills: 'Network Security, Ethical Hacking Concepts, Vulnerability Assessment'
    }
  ];

  const learningJourney = [
    {
      title: 'Python Programming',
      repo: 'Python-Data-Science',
      description: 'Core object-oriented Python, data structures, algorithms, and automated pipeline scripts.',
      link: 'https://github.com/Abdulla-B-Official/Python-Data-Science',
      icon: Code2
    },
    {
      title: 'Data Analytics & Statistics',
      repo: 'Statistics-and-Data-Analytics',
      description: 'Exploratory Data Analysis (EDA), hypothesis testing, probability distributions, Pandas, and NumPy.',
      link: 'https://github.com/Abdulla-B-Official/Statistics-and-Data-Analytics',
      icon: Terminal
    },
    {
      title: 'Machine Learning Engineering',
      repo: 'Machine-Learning-Workflows',
      description: 'Supervised and unsupervised models, scikit-learn, hyperparameter tuning, and evaluation metrics.',
      link: 'https://github.com/Abdulla-B-Official/Machine-Learning-Workflows',
      icon: Cpu
    },
    {
      title: 'Deep Learning & Neural Networks',
      repo: 'Deep-Learning-TensorFlow-PyTorch',
      description: 'Convolutional neural networks, TensorFlow, Keras, PyTorch, autoencoders, and optimization routines.',
      link: 'https://github.com/Abdulla-B-Official/Deep-Learning-TensorFlow-PyTorch',
      icon: Brain
    },
    {
      title: 'NLP & Transformers Guide',
      repo: 'NLP-Transformers-Guide',
      description: 'Text preprocessing, embeddings, Hugging Face, Transformers, BART, FLAN-T5, and vector search.',
      link: 'https://github.com/Abdulla-B-Official/NLP-Transformers-Guide',
      icon: Layers
    },
    {
      title: 'SQL & Database Analytics',
      repo: 'SQL-Database-Analytics',
      description: 'Complex SQL queries, joins, aggregations, database design, and MySQL analytics operations.',
      link: 'https://github.com/Abdulla-B-Official/SQL-Database-Analytics',
      icon: Database
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-100 font-sans selection:bg-teal-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Grid Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0b1120]/90 border-b border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-wider text-white group">
            <span className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
              <Brain className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-teal-300 bg-clip-text text-transparent">
              Abdulla B
            </span>
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-teal-400 transition-colors">Certifications</a>
            <a href="#learning" className="hover:text-teal-400 transition-colors">Learning Journey</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={githubProfileUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all border border-slate-800"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdullfhariq07/" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all border border-slate-800"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 transition-all shadow-lg shadow-teal-500/20 text-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-slate-800 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">Certifications</a>
            <a href="#learning" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">Learning Journey</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-teal-400 font-medium">Contact</a>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a href={githubProfileUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abdullfhariq07/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Passionate in Data Science and ML Engineering
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Practical AI with <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Computer Vision & NLP</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Abdulla B</strong>. I specialize in training object detection models (YOLOv8/v9), building transformer NLP solutions, deep learning architectures, and deploying full-stack web applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 transition-all shadow-xl shadow-teal-500/20 flex items-center gap-2"
              >
                <Eye className="w-4 h-4" /> View Featured Projects
              </a>
              <a 
                href="#certifications" 
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Award className="w-4 h-4" /> Certifications
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact Info
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">22</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">GitHub Repositories</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Computer Vision</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">YOLOv8 & YOLOv9</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">NLP & DL</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Transformers & Keras</p>
              </div>
            </div>
          </div>

          {/* Engineering Progression Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 border border-slate-700/60 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">ProITBridge Progression</h3>
                  <p className="text-xs text-slate-400">Data Science & Agentic AI Specialist Course</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed Core Modules
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">100% Core</span>
                  </div>
                  <p className="text-xs text-slate-400">Python, Machine Learning Workflows, Deep Learning (Keras/TensorFlow), Computer Vision (YOLO), and NLP Transformers.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                      <Sparkle className="w-3.5 h-3.5 text-teal-400 animate-spin" /> Upcoming Advanced Track
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">In Progress</span>
                  </div>
                  <p className="text-xs text-slate-400">Currently advancing into Generative AI architectures, Autonomous Agentic AI frameworks, and multi-agent system design.</p>
                </div>
              </div>

              <a 
                href="#certifications"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700"
              >
                Jump to Licenses & Certifications <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section (With Integrated GitHub Contributions Table) */}
      <section id="about" className="py-20 bg-[#0f172a]/60 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Background & Competencies</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">About Abdulla B</p>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 leading-relaxed text-base">
              <p>
                I am a dedicated <strong className="text-white">Data Scientist & AI/ML Engineer</strong> committed to designing real-world intelligent systems.
              </p>
              <p>
                My expertise spans object detection models (<span className="text-teal-300 font-semibold">YOLOv8 & YOLOv9</span>), deep learning networks with <span className="text-teal-300 font-semibold">Keras & TensorFlow</span>, NLP language pipelines (Resume Screening, Neural Machine Translation, FAISS Similarity Search), and SQL relational analytics.
              </p>
              <p>
                I integrate machine learning models directly into production web backends built with Flask, FastAPI, and React, hosting applications live on Render and Vercel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all space-y-2">
                <Cpu className="w-8 h-8 text-teal-400" />
                <h3 className="font-bold text-white text-lg">Computer Vision</h3>
                <p className="text-xs text-slate-400">YOLOv8, YOLOv9, OpenCV, Defect Inspection & Hazardous Detection</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all space-y-2">
                <Brain className="w-8 h-8 text-cyan-400" />
                <h3 className="font-bold text-white text-lg">Deep Learning</h3>
                <p className="text-xs text-slate-400">Keras, TensorFlow, PyTorch, Convolutional Neural Networks & Autoencoders</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all space-y-2">
                <Database className="w-8 h-8 text-emerald-400" />
                <h3 className="font-bold text-white text-lg">NLP & Vector Search</h3>
                <p className="text-xs text-slate-400">Transformers, SentenceTransformers, FAISS & Sentiment Classification</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all space-y-2">
                <Layers className="w-8 h-8 text-yellow-400" />
                <h3 className="font-bold text-white text-lg">Full-Stack Deployments</h3>
                <p className="text-xs text-slate-400">Flask REST Endpoints, FastAPI, React, Render & Vercel Services</p>
              </div>
            </div>
          </div>

          {/* GitHub Activity Matrix / Green Dot Contribution Table */}
          <div className="p-8 rounded-3xl bg-[#0b1120] border border-slate-800/80 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <GitCommit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    GitHub Activity & Contributions
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-medium">Daily Track</span>
                  </h3>
                  <p className="text-xs text-slate-400">Continuous open-source development across 22 repositories</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Active Streaks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>2025 – 2026</span>
                </div>
                <a 
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 font-semibold flex items-center gap-1.5 transition-all border border-slate-700"
                >
                  <Github className="w-4 h-4" /> Follow @Abdulla-B-Official
                </a>
              </div>
            </div>

            {/* Matrix Columns Display */}
            <div className="space-y-3">
              <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="min-w-[700px] grid grid-rows-7 grid-flow-col gap-1.5">
                  {contributionDays.map((level, idx) => (
                    <div 
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-[3px] border transition-all hover:scale-125 hover:z-10 cursor-pointer ${getContributionColor(level)}`}
                      title={`Contribution activity level: ${level}`}
                    />
                  ))}
                </div>
              </div>

              {/* Legend & Summary Statistics */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <p className="font-mono text-[11px]">
                  <strong className="text-teal-400">500+</strong> contributions in the last year across ML, CV, NLP & DL repositories.
                </p>

                <div className="flex items-center gap-2 text-[11px]">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-[2px] bg-slate-900 border border-slate-800" />
                    <span className="w-3 h-3 rounded-[2px] bg-emerald-900/60 border border-emerald-800" />
                    <span className="w-3 h-3 rounded-[2px] bg-emerald-600/80 border border-emerald-500" />
                    <span className="w-3 h-3 rounded-[2px] bg-emerald-400 border border-emerald-300" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Technical Stack</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Technical Skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Code2 className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-white">Programming & Querying</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Python</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> SQL / MySQL</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> C Programming</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> JavaScript / React</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Brain className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold text-white">ML & Computer Vision</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> TensorFlow & Keras</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> PyTorch & scikit-learn</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> YOLOv8 & YOLOv9</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> OpenCV Image Processing</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Database className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white">NLP & Vector Search</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Hugging Face Transformers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FLAN-T5 & BART</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> SentenceTransformers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FAISS Vector Indexing</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Terminal className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-white">Analytics & Deployment</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Pandas & NumPy</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Flask & FastAPI Services</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Git, GitHub & Docker</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Render & Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-[#0f172a]/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Repositories & Applications</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</p>
            <p className="text-slate-400 text-sm">Computer vision systems, deep learning autoencoders, and NLP language platforms built and published on GitHub.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {['all', 'computer vision', 'deep learning', 'nlp & semantic search'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group rounded-2xl bg-[#0b1120] border border-slate-800 hover:border-teal-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/10"
              >
                <div className="p-6 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-slate-800 flex justify-between items-start">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300">
                    {project.badge}
                  </span>
                  {project.liveUrl && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Application
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1"
                    >
                      Architecture Details <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 rounded-lg transition-all"
                          title="Open Live App"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications Section */}
      <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Verified Credentials</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Licenses & Certifications</p>
          <p className="text-slate-400 text-sm">Click any certificate card to view and verify credentials on LinkedIn.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <a 
              key={idx}
              href={linkedinCertUrl}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-teal-500/50 transition-all duration-300 space-y-4 group flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">{cert.type}</span>
                  <h3 className="font-bold text-white text-lg group-hover:text-teal-300 transition-colors mt-0.5">{cert.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
                </div>
                <p className="text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <strong className="text-slate-400">Skills Verified:</strong> {cert.skills}
                </p>
              </div>

              <div className="pt-2 text-xs font-semibold text-teal-400 flex items-center gap-1">
                Verify on LinkedIn <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="py-20 bg-[#0f172a]/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Repository Backed Mastery</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Learning Journey</p>
            <p className="text-slate-400 text-sm">Explore my continuous hands-on learning repositories covering core pillars of Data Science & AI.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningJourney.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a 
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-[#0b1120] border border-slate-800 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl hover:shadow-teal-500/5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-mono">
                      {item.repo}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-teal-400 flex items-center gap-1">
                    View Repository <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section (Direct Contact Info Cards Only) */}
      <section id="contact" className="py-20 bg-[#0f172a]/80 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">Let's Connect</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</p>
            <p className="text-slate-300 max-w-xl mx-auto text-sm">
              I am actively seeking opportunities in Data Science, Machine Learning Engineering, Computer Vision, and NLP.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col items-center justify-center space-y-3 group hover:border-teal-500/40 transition-all">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-sm">Email</h3>
              <p className="text-xs text-slate-400 truncate w-full">{userEmail}</p>
              <button 
                onClick={handleCopyEmail}
                className="mt-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? 'Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* GitHub Card */}
            <a 
              href={githubProfileUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col items-center justify-center space-y-3 group hover:border-teal-500/40 transition-all"
            >
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-sm">GitHub</h3>
              <p className="text-xs text-slate-400">@Abdulla-B-Official</p>
              <span className="mt-2 text-xs font-semibold text-teal-400 flex items-center gap-1">
                View Repos <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/abdullfhariq07/" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col items-center justify-center space-y-3 group hover:border-teal-500/40 transition-all"
            >
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-sm">LinkedIn Profile</h3>
              <p className="text-xs text-slate-400">Abdulla B</p>
              <span className="mt-2 text-xs font-semibold text-teal-400 flex items-center gap-1">
                Connect <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0b1120] border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {currentYear} Abdulla B. Built with Next.js, React & Tailwind CSS.</p>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0f172a] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300">
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
              <p className="text-teal-400 text-sm font-mono">{selectedProject.category}</p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Architecture Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedProject.metrics.map((metric: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 text-center">
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <a 
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" /> GitHub Repository
              </a>
              {selectedProject.liveUrl && (
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-teal-500/20"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}