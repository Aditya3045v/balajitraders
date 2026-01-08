'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (typeof window !== 'undefined') {
            const text = `*New Contact Inquiry* 🌞\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email || 'Not provided'}\n` +
                `*Service:* ${formData.service || 'General Inquiry'}\n` +
                `*Message:* ${formData.message}\n\n` +
                `--------------------------------\n` +
                `Sent via Balaji Traders Solar Website`;

            const encodedMessage = encodeURIComponent(text);
            window.open(`https://wa.me/917992436836?text=${encodedMessage}`, '_blank');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="pt-24 pb-20 bg-bg-deep min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 pt-8">
                    <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Contact Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Get in Touch for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Solar Solutions
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Ready to switch to solar? Our team led by Bablu Ji is here to help you with quotes, site surveys, and any questions you may have.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">

                    {/* Contact Information (Left Column) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Highlights */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-white mb-8">Why Contact Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Free Site Survey</h4>
                                        <p className="text-sm text-slate-400">We analyze your roof and energy needs at no cost.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Detailed Quotation</h4>
                                        <p className="text-sm text-slate-400">Transparent pricing with subsidy breakdown.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Expert Consultation</h4>
                                        <p className="text-sm text-slate-400">Talk directly to certified solar experts.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <a href="tel:+917992436836" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium">Phone</p>
                                        <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">+91 79924 36836</p>
                                    </div>
                                </a>

                                <a href="mailto:contact@balajisolar.in" className="flex items-center gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium">Email</p>
                                        <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">contact@balajisolar.in</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium">Service Locations</p>
                                        <p className="text-lg font-bold text-white">Muzaffarpur & Begusarai<br /> North Bihar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <button
                            onClick={() => {
                                if (typeof window !== 'undefined') {
                                    const message = encodeURIComponent("Hi Balaji Traders Solar! I'm interested in solar installation.");
                                    window.open(`https://wa.me/917992436836?text=${message}`, '_blank');
                                }
                            }}
                            className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                        >
                            <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
                            Chat on WhatsApp
                        </button>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 h-full">
                            <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                            <p className="text-slate-400 mb-8">Fill in the form below and we will contact you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone Number"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email (Optional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" className="bg-[#0f172a]">Select Service</option>
                                        <option value="residential" className="bg-[#0f172a]">Residential Solar</option>
                                        <option value="commercial" className="bg-[#0f172a]">Commercial Solar</option>
                                        <option value="pump" className="bg-[#0f172a]">Solar Water Pump</option>
                                        <option value="other" className="bg-[#0f172a]">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message *</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-glow-blue flex items-center justify-center gap-2 group">
                                    Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
