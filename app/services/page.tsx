import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Local Government Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore the comprehensive range of services we provide to local government areas, communities, and traditional institutions in Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Social Welfare & Protection Services */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Local Government Administration
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Professional oversight and support for the 27 Local Government Areas in Imo State, ensuring efficient service delivery and implementation of state policies at the grassroots level.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Humanitarian Relief & Emergency Aid */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Community Development Initiatives
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Implementation of grassroots development projects, capacity building for community leaders, and support for self-help initiatives across Imo State.
                            </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Vulnerable Group Empowerment Programs */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Chieftaincy Affairs Management
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Recognition, installation, and regulation of traditional rulers, maintenance of chieftaincy records, and resolution of traditional disputes.
                            </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Natural Resource Management */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Local Government Finance
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Budget management, financial oversight, and resource allocation for the 27 Local Government Areas in Imo State.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Financial planning and budgeting
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Revenue generation strategies
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Fiscal responsibility oversight
                                </li>
                            </ul>
                        </div>

                        {/* Service 5 - Local Government Finance */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Community Development Programs
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Implementation of grassroots development initiatives and capacity building for community leaders.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Community development grants
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Skills acquisition programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Infrastructure development initiatives
                                </li>
                            </ul>
                        </div>

                        {/* Service 6 - Market Development */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a2 2 0 002-2v-4h2v4a2 2 0 002 2h4a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm6 0a1 1 0 112 0v4a1 1 0 11-2 0V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Boundary Dispute Resolution
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Mediation and resolution of inter and intra-local government boundary disputes to maintain peace and harmony.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Market linkage programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Value chain development
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Agribusiness support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
