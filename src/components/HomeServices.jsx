import React from 'react'
import { Bot, ChartNoAxesCombined, Check, Cloud, Cloudy, Gavel, GraduationCap, Hammer, Shield, Sparkles } from 'lucide-react'
import AnimatedButton from './ui/AnimatedButton'

const cardData = [
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de-risk enterprise AI adoption.',
        points: [
            'AI Vision & Maturity Assessment',
            'Enterprise AI Roadmap Design',
            'AI Ethics, Risk & Compliance Framework'
        ],
        icon: <Shield size={35} />
    },
    {
        title: 'AI Agent Development',
        desc: 'Build autonomous AI agents for automation.',
        points: [
            'Custom AI Agent Design & Training',
            'Multi-Agent Orchestration Systems',
            'Integration with CRM, ERP & APIs'
        ],
        icon: <Bot size={35} />
    },
    {
        title: 'Data & Analytics Transformation',
        desc: 'Unlock insights with AI-powered analytics.',
        points: [
            'Data Lake & Pipeline Modernization',
            'Predictive & Prescriptive Analytics',
            'Real-time Dashboards & AI Insights'
        ],
        icon: <ChartNoAxesCombined size={35} />
    },
    {
        title: 'Generative AI Integration',
        desc: 'Implement ChatGPT-like tools in your workflows.',
        points: [
            'Custom LLM Fine-tuning (RAG, LoRA)',
            'AI Content & Code Generation Tools',
            'Secure Enterprise GenAI Deployment'
        ],
        icon: <Gavel size={35} />
    },
    {
        title: 'Cloud AI Migration',
        desc: 'Move to AWS/Azure/GCP with AI optimization.',
        points: [
            'AI Workload Assessment & TCO Analysis',
            'MLOps Pipeline on Cloud (SageMaker, Vertex)',
            'Cost-Optimized GPU/TPU Scaling'
        ],
        icon: <Cloud size={35} /> 
    },
    {
        title: 'AI Training & Change Management',
        desc: 'Upskill your team for AI-first culture.',
        points: [
            'Role-based AI Training Programs',
            'Hands-on AI Hackathons & Pilots',
            'Change Management & Adoption Playbook'
        ],
        icon: <GraduationCap size={35} />
    },
];

function ServiceCard({ title, desc, points, icon }) {
    return (
        <div className='flex flex-col justify-between gap-8 group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-gradient-to-br from-cyan-400 to-blue-600 text-white size-16 flex items-center justify-center text-5xl rounded-lg'>
                {icon}
            </div>
            <div className='space-y-2'>
                <div className='font-manrope text-black text-xl'>{title}</div>
                <div className='font-manrope text-gray-600'>{desc}</div>
                <div className='space-y-2'>
                    {points.map((pt, i) => (
                        <div key={i} className='flex items-center gap-2'>
                            <Check strokeWidth={2} className='size-5 text-gray-500' />
                            <span className='font-manrope text-gray-600 text-sm lg:text-base'>{pt}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <AnimatedButton
                    label="Explore More"
                    to="/contact"
                    className="py-2 px-6 border border-blue-500 text-blue-600 hover:border-transparent rounded-full font-manrope font-medium text-sm hover:bg-gradient-to-br from-cyan-400 to-blue-600 hover:text-white transition-colors duration-200"
                />
            </div>
        </div>
    );
}

export default function HomeServices() {
    return (
        <section className='pt-[60px]'>
            <div className='max-w-[1440px] w-full lg:p-8 p-4 mx-auto'>

                <h2 className='lg:text-5xl md:text-4xl text-3xl font-manrope text-center font-bold'>Our core AI Transformation <span className='text-transparent bg-clip-text bg-button-linear'>services</span></h2>
                <p className='font-manrope lg:text-lg text-gray-700 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur in quod facilis esse eos sequi possimus veritatis quam id.</p>

                <div className='grid md:grid-cols-3 gap-6 mt-10'>
                    {cardData.map((card, idx) => (
                        <ServiceCard key={idx} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
