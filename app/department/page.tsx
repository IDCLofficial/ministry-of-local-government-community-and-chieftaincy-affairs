import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";
import { FaUsers, FaGavel, FaHandshake, FaBook, FaLandmark, FaMapMarkerAlt } from "react-icons/fa";
import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

export default function Department() {
    return (
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <HeroSection {...HERO_CONFIGS.DEPARTMENT} />

                {/* Main Content */}
                <div className="px-4 sm:px-6 lg:px-20 py-12">
                    <TabContentSystem 
                        sidebarTitle="Ministry Departments"
                        tabs={[
                            {
                                id: "local-government",
                                label: "Local Government Administration",
                                icon: <FaLandmark className="mr-2" />,
                                content: {
                                    title: "Department of Local Government Administration",
                                    imageSrc: "/photos/Local Government - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.jpg",
                                    imageAlt: "Local Government Administration",
                                    description: "The Department of Local Government Administration oversees the administration of the 27 Local Government Areas in Imo State. We ensure efficient service delivery, coordinate inter-governmental relations, and implement state policies at the local level. Our responsibilities include supervising local government operations, managing council affairs, and ensuring compliance with statutory regulations. We work to strengthen local governance structures and enhance service delivery to communities across the state."
                                }
                            },
                            {
                                id: "community-development",
                                label: "Community Development",
                                icon: <FaUsers className="mr-2" />,
                                content: {
                                    title: "Department of Community Development",
                                    imageSrc: "/photos/Community Development - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.jpeg",
                                    imageAlt: "Community Development",
                                    description: "The Department of Community Development focuses on grassroots empowerment and rural transformation. We facilitate community-driven development initiatives, support capacity building for community leaders, and oversee the implementation of community projects. Our work includes mobilizing communities for self-help projects, promoting civic engagement, and ensuring that development efforts are inclusive and sustainable. We collaborate with local stakeholders to identify and address the unique needs of communities across Imo State."
                                }
                            },
                            {
                                id: "chieftaincy-affairs",
                                label: "Chieftaincy Affairs",
                                icon: <FaGavel className="mr-2" />,
                                content: {
                                    title: "Department of Chieftaincy Affairs",
                                    imageSrc: "/photos/Chieftaincy Affairs - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.jpeg",
                                    imageAlt: "Chieftaincy Affairs",
                                    description: "The Department of Chieftaincy Affairs is responsible for the recognition, installation, and regulation of traditional rulers in Imo State. We maintain the register of recognized traditional rulers, oversee chieftaincy matters, and serve as a liaison between the government and traditional institutions. Our work includes resolving chieftaincy disputes, organizing traditional council meetings, and preserving the cultural heritage of our communities. We ensure that traditional institutions continue to play their vital role in maintaining peace and stability at the grassroots level."
                                }
                            },
                            {
                                id: "inter-governmental",
                                label: "Inter-Governmental Relations",
                                icon: <FaHandshake className="mr-2" />,
                                content: {
                                    title: "Department of Inter-Governmental Relations",
                                    imageSrc: "/photos/Inter-Governmental Relations - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.jpg",
                                    imageAlt: "Inter-Governmental Relations",
                                    description: "The Department of Inter-Governmental Relations facilitates collaboration between different levels of government and traditional institutions. We coordinate joint initiatives, manage inter-governmental communications, and ensure effective implementation of policies across all tiers of government. Our work includes organizing stakeholders' forums, managing inter-governmental partnerships, and promoting synergy between government agencies and traditional rulers for effective governance and development."
                                }
                            },
                            {
                                id: "planning-research",
                                label: "Planning, Research & Statistics",
                                icon: <FaBook className="mr-2" />,
                                content: {
                                    title: "Department of Planning, Research & Statistics",
                                    imageSrc: "/photos/Planning, Research & Statistics - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.jpeg",
                                    imageAlt: "Planning, Research & Statistics",
                                    description: "The Department of Planning, Research & Statistics is responsible for policy formulation, data management, and research initiatives. We conduct studies on local government administration, analyze development trends, and provide data-driven recommendations for policy decisions. Our work includes maintaining the local government database, conducting capacity-building programs, and monitoring the implementation of government policies at the local level. We provide the necessary research and statistical support to enhance evidence-based decision-making in local governance."
                                }
                            },
                            {
                                id: "boundary-matters",
                                label: "Boundary Matters",
                                icon: <FaMapMarkerAlt className="mr-2" />,
                                content: {
                                    title: "Department of Boundary Matters",
                                    imageSrc: "/photos/Boundary Matters - MINISTRY OF LOCAL GOVERNMENT AFFAIRS.webp",
                                    imageAlt: "Boundary Matters",
                                    description: "The Department of Boundary Matters is responsible for the delineation and management of inter and intra-local government boundaries in Imo State. We handle boundary disputes, maintain accurate boundary records, and provide technical support for boundary-related matters. Our work includes conducting boundary surveys, organizing stakeholders' meetings for conflict resolution, and ensuring peaceful coexistence among communities. We work closely with the National Boundary Commission and other relevant agencies to maintain harmonious relationships between communities."
                                }
                            }
                        ]}
                    />
                </div>
            </div>
        </AnimatedEntrance>
    );
}
