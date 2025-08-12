import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { FaUsers, FaBuilding, FaGavel, FaHandshake, FaBook } from "react-icons/fa6";

// Local Government project icons mapping
const PROJECT_ICONS = {
    1: FaUsers, // Traditional Rulers Registry
    2: FaBuilding,   // Community Development
    3: FaBuilding,    // Council Secretariats
    4: FaHandshake, // Town Union Governance
    5: FaGavel,    // Peacebuilding
    6: FaGavel, // Traditional Rulers Installation
    7: FaBook, // Civic Education
    8: FaBuilding, // Rural Infrastructure
    9: FaUsers, // Leadership Training
    10: FaHandshake // Cultural Heritage
};

// Local Government projects
const LOCAL_GOVERNMENT_PROJECTS = [
    {
        number: 1,
        title: "Automation of Traditional Rulers' Registry",
        description: "Digital record-keeping system for autonomous communities and traditional rulers to improve transparency and administrative efficiency.",
        location: "Statewide",
        category: "Digital Governance",
        status: "Ongoing",
        partners: "ICT Department, Traditional Rulers Council"
    },
    {
        number: 2,
        title: "Community Development Fund Initiative",
        description: "Empowering communities through direct funding for grassroots development projects and capacity building programs.",
        location: "All 27 LGAs",
        category: "Community Development",
        status: "Ongoing",
        partners: "Local Government Areas, Community Development Committees"
    },
    {
        number: 3,
        title: "Construction and Renovation of Council Secretariats",
        description: "Infrastructure development to improve local government administrative facilities and service delivery capacity.",
        location: "Selected LGAs",
        category: "Infrastructure",
        status: "Ongoing",
        partners: "Ministry of Works, Local Government Areas"
    },
    {
        number: 4,
        title: "Strengthening Town Union Governance",
        description: "Capacity building and institutional strengthening for town unions to enhance community leadership and participation.",
        location: "All Communities",
        category: "Governance",
        status: "Ongoing",
        partners: "Town Unions, Community Leaders"
    },
    {
        number: 5,
        title: "Peacebuilding and Conflict Resolution Projects",
        description: "Promoting peaceful coexistence and resolving disputes between communities and traditional institutions.",
        location: "Conflict-prone areas",
        category: "Peace & Security",
        status: "Ongoing",
        partners: "Traditional Rulers, Security Agencies"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#F7F8F9]">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="" />
            
            {/* Projects Description */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Local Government Area, Community and Chieftaincy Affairs is committed to strengthening local governance, empowering communities, and preserving traditional institutions across Imo State. Explore our key initiatives that are transforming local administration, enhancing community participation, and promoting inclusive governance at the grassroots level.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {LOCAL_GOVERNMENT_PROJECTS.map((project, index) => {
                            const IconComponent = PROJECT_ICONS[project.number as keyof typeof PROJECT_ICONS];
                            return (
                                <AnimatedEntrance 
                                    key={project.number} 
                                    {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                    delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                >
                                    <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="h-48 bg-green-50 flex items-center justify-center">
                                            {IconComponent && (
                                                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                                                    <IconComponent size="3em" color="#16a34a" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Category</span>
                                                    <span className="text-gray-900 text-right">{project.category}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Status</span>
                                                    <span className={`font-medium text-right ${
                                                        project.status === "Active" ? "text-blue-600" :
                                                        project.status === "In Progress" ? "text-yellow-600" :
                                                        project.status === "Completed" ? "text-green-600" :
                                                        project.status === "Ongoing" ? "text-orange-600" : ""
                                                    }`}>{project.status}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Partners</span>
                                                    <span className="text-gray-900 text-right">{project.partners}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center mt-4 text-green-600 text-sm">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
