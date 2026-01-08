import { Building, Award, Users, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About BALAJI TRADERS SOLAR ENERGY | North Bihar\'s Super Solar Distributor',
    description: 'BALAJI TRADERS SOLAR ENERGY is North Bihar\'s premier solar super distributor. Government-authorized partner offering Waaree, Adani, and Tata Power solar products in Muzaffarpur & Begusarai.',
    keywords: 'about balaji traders solar, solar company muzaffarpur, authorized solar dealer begusarai, waaree solar distributor bihar, solar installer north bihar',
    openGraph: {
        title: 'About BALAJI TRADERS SOLAR ENERGY - Solar Experts in North Bihar',
        description: 'ALL SOLAR NORTH BIHAR SUPER DISTRIBUTORSHIP serving North Bihar with top-tier brands and expert installation.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://balajisolar.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-bg-deep min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Empowering North Bihar with <span className="text-primary">Clean Energy</span></h1>
                    <p className="text-xl text-slate-400">BALAJI TRADERS SOLAR ENERGY is a premier government-authorized solar agency serving Muzaffarpur, Begusarai, and all of North Bihar.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Building className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-slate-400">To make renewable energy accessible and affordable for every household and business in the North Bihar region.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Award className="w-12 h-12 text-accent-green mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Super Distributor</h3>
                        <p className="text-slate-400">We are direct distributors for Waaree, Adani, Microtek, UTL, Luminous, and Tata Power Solar, ensuring the best wholesale prices.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Users className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                        <p className="text-slate-400">Our team consists of certified engineers led by Bablu Ji, trained to handle complex grid-connected installations.</p>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Why We Are Different</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Official NBPDCL / SBPDCL Vendors",
                            "Complete Paperwork Assistance for Subsidies",
                            "Local Support in Muzaffarpur & Begusarai",
                            "North Bihar Super Distributorship",
                            "Zero-Hassle Net Metering Process",
                            "300 Units Free Electricity Assistance"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
