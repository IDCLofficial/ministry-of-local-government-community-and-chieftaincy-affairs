import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/Photo - MINISTRY OF LOCAL GOVERNMENT AND CHIEFTAINCY AFFAIRS.jpg"
                                alt="Local government administration and community development"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Local Government Area, Community and Chieftaincy Affairs in Imo State was established to serve as a vital bridge between the state government and grassroots governance structures. Its formation was rooted in the need to decentralize governance, empower local communities, and ensure traditional institutions play an active role in social and political stability. Since its inception, the ministry has been responsible for coordinating the administration of the 27 local government areas in the state, supervising community development efforts, and regulating the recognition, installation, and roles of traditional rulers.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    It plays a central role in maintaining peace and order through structured interactions with autonomous communities, town unions, and royal institutions. The ministry continues to function as a catalyst for rural development, ensuring that community-driven projects align with the broader developmental goals of the Imo State Government, while preserving cultural heritage and fostering inclusive governance at the grassroots level.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Our Vision */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    To build a socially inclusive and resilient Imo State where every citizen, especially the vulnerable, is protected, empowered, and given equal opportunity to thrive through effective humanitarian services and sustainable social development initiatives.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Our Mission */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    To build a well-governed, peaceful, and inclusive Imo State through effective local government administration, empowered communities, and respected traditional institutions.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Coordinate and strengthen local government systems</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Promote sustainable community development</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Uphold cultural heritage and traditional leadership</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Ensure orderly administration of chieftaincy affairs</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section id="commissioner-profile" className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. (Mrs.) Rubby Emele
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Hon. Commissioner for Local Government Area, Community and Chieftaincy Affairs Imo State
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Hon. (Mrs.) Rubby Emele was appointed in 2021 and reappointed in 2024. A native of Isiala Mbano and former Chairman of the Local Government and ALGON Imo, she leads the ministry with integrity, focus, and passion for inclusive development. She is widely recognized for her humility and results-driven style.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under her stewardship, the ministry has prioritized peacebuilding, town union strengthening, chieftaincy conflict resolution, and youth empowerment. She introduced a needs-based development approach and remains a vocal advocate for responsive, community-led governance, committed to aligning traditional institutions with modern governance for the sustainable growth of Imo State.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[3/4]">
                            <Image
                                src="/photos/Hon. (Mrs.) Rubby Emele.png"
                                alt="Hon. (Mrs.) Rubby Emele - Honourable Commissioner"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core Responsibilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Local Government Administration */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Local Government Administration
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Oversees coordination, supervision, and performance monitoring of all 27 LGAs in the state.
                            </p>
                        </div>

                        {/* Community Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Community Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Handles community-based programs, empowerment projects, and rural development initiatives.
                            </p>
                        </div>

                        {/* Poverty Alleviation Programs */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Poverty Alleviation Programs
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Implement targeted livelihood and empowerment initiatives to reduce poverty and enhance economic resilience at the grassroots.
                            </p>
                        </div>

                        {/* Youth and Women Empowerment */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Youth and Women Empowerment
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Promote gender-inclusive and youth-focused programs that provide skills training, entrepreneurship support, and financial assistance.
                            </p>
                        </div>

                        {/* IDP and Refugee Support */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                IDP and Refugee Support
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensure protection, resettlement, and reintegration support for displaced persons and communities affected by conflict or crisis.
                            </p>
                        </div>

                        {/* Community-Based Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Community-Based Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Facilitate community-driven development projects that foster local ownership and sustainable progress.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Objectives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry is committed to these key strategic objectives to strengthen local governance, empower communities, and preserve traditional institutions across Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Strengthen local government administration and service delivery capacity across all 27 LGAs.",
                            "Enhance community participation in governance and development processes.",
                            "Preserve and promote traditional institutions and chieftaincy affairs.",
                            "Foster peaceful coexistence and conflict resolution in communities.",
                            "Promote transparency and accountability in local government operations.",
                            "Build capacity of traditional rulers and community leaders.",
                            "Facilitate grassroots development through community-driven initiatives.",
                            "Modernize local government systems through digital transformation.",
                            "Strengthen partnerships between government and traditional institutions.",
                            "Ensure inclusive governance that represents all community interests."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated leaders steering the Ministry of Local Government Area, Community and Chieftaincy Affairs towards effective grassroots governance in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Hon. (Mrs.) Rubby Emele.png"
                                    alt="Hon. (Mrs.) Rubby Emele - Commissioner for Local Government Area, Community and Chieftaincy Affairs"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Hon. (Mrs.) Rubby Emele</h3>
                                <p className="text-green-700 font-medium mt-1">Hon. Commissioner for Local Government Area, Community and Chieftaincy Affairs</p>
                                <p className="text-sm text-gray-500 mt-2">Appointed: 2021, Reappointed: 2024</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/AMAFILI ISABELLA KELECHI PERMANENT SECRETARY. MINISTRY OF LOCAL GOVERNMENT AND CHIEFTAINCY AFFAIRS..jpeg"
                                    alt="Permanent Secretary, Ministry of Local Government Area, Community and Chieftaincy Affairs"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Amafili Isabella Kelechi</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                Our organizational structure ensures effective coordination and efficient
                                service delivery across all humanitarian and social development sectors in Imo State.
                                Our organizational structure comprises various departments working
                                collaboratively to achieve our mandate for a more inclusive and resilient state.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/Structures - MINISTRY OF LOCAL GOVERNMENT AND CHIEFTAINCY AFFAIRS.jpg"
                                alt="Ministry of Humanitarian Affairs Building"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-6">
                        {/* Level 1 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">1</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Honourable Commissioner</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provides policy leadership, oversight, and strategic direction in humanitarian coordination, disaster management, and social development.</p>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">2</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Permanent Secretary</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Serves as the administrative head; ensures continuity in governance, interdepartmental coordination, and effective policy execution.</p>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">3</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Directors of Departments</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Report directly to the Permanent Secretary; manage and supervise specific functional areas of the ministry&apos;s operations.</p>
                        </div>

                        {/* Level 4 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">4</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Heads of Units</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Handle day-to-day implementation of unit programs; ensure coordination, reporting accuracy, and program compliance.</p>
                        </div>

                        {/* Level 5 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">5</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Zonal/LGA Social Welfare Officers</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Represent the ministry at the grassroots; implement and monitor humanitarian and social protection programs at the community level.</p>
                        </div>

                        {/* Level 6 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">6</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Field and Emergency Response Officers</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Serve as the ministry&apos;s first responders and outreach agents, providing relief, monitoring vulnerable populations, and managing on-ground operations.</p>
                        </div>

                        {/* Level 7 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">7</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Administrative & Support Staff</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provide operational, clerical, technical, and field support services across the Ministry</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
