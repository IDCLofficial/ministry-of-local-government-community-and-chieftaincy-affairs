import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaUsers, FaShield, FaGavel } from "react-icons/fa6";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "Imo State Ministry of Local Government, Community and Chieftaincy Affairs" },
  description: "Support for Imo State's 27 local government areas, community development and traditional institutions, including chieftaincy affairs.",
  path: "/",
});


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>  
        <Link href="/about">
          <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Read more
          </button>
        </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
              <Image
                src="/photos/Structure - MINISTRY OF LOCAL GOVERNMENT AND CHIEFTAINCY AFFAIRS.jpg"
                alt="Local government administration and community development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Overview of the Ministry of Local Government Area, Community and Chieftaincy Affairs
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Welcome to the Ministry of Local Government Area, Community and Chieftaincy Affairs – Imo State. We are dedicated to fostering responsive, transparent, and accountable governance at the grassroots level. Our mission is to support the 27 Local Government Areas in delivering effective public service, promote inclusive community development, and protect the integrity of our revered traditional institutions. Through policy direction, capacity-building, and collaboration with stakeholders, this ministry ensures that both modern governance and cultural heritage serve the common good of all Imolites.
                </p>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Welcome from Hon. (Mrs.) Rubby Emele
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  &ldquo;Welcome to the Ministry of Local Government Area, Community and Chieftaincy Affairs. I am Hon. (Mrs.) Rubby Emele, and I am honored to serve as your Commissioner. Appointed in 2021 and reappointed in 2024, I bring my experience as a native of Isiala Mbano and former Chairman of the Local Government and ALGON Imo.&rdquo;
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Under my stewardship, the ministry has prioritized peacebuilding, town union strengthening, chieftaincy conflict resolution, and youth empowerment. I lead with integrity, focus, and passion for inclusive development, introducing a needs-based development approach while remaining a vocal advocate for responsive, community-led governance.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  I am committed to aligning traditional institutions with modern governance for the sustainable growth of Imo State, ensuring that both modern governance and cultural heritage serve the common good of all Imolites.&ldquo;
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600} className="mt-5">
                <Link href="/about#commissioner-profile" className="">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Read Full Bio
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                <Image
                  src="/photos/Hon. (Mrs.) Rubby Emele.png"
                  alt="Hon. (Mrs.) Rubby Emele"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Priorities Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Ministry Priorities
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaUsers size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Inclusive Grassroots Governance</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">Promote inclusive and participatory governance at the grassroots level across all 27 Local Government Areas in Imo State.</p>
                <Link href={"/about"}><button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button></Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaShield size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Traditional Institutions Strengthening</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Strengthen traditional institutions and their roles in community development while preserving cultural heritage.
                </p>
                <Link href={"/about"}><button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button></Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaGavel size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Transparency & Accountability</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Enhance transparency and accountability in local government administration through effective monitoring and evaluation.
                </p>
                <Link href={"/about"}><button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button></Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaUsers size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Community Partnership</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Foster partnerships with communities and stakeholders for rural development and peaceful coexistence.
                </p>
                <button className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</button>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Humanitarian Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Humanitarian Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Government Partners
            </h2>
          </AnimatedEntrance>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "Imo State House of Assembly", logo: "/photos/imo-house-assembly-logo.jpeg" },
              { name: "Ministry of Finance", logo: "/photos/ministry-finance-logo-1.webp" },
              { name: "National Bureau of Statistics", logo: "/photos/nbs-logo.jpeg" },
              { name: "Federal Ministry of Interior", logo: "/photos/federal-interior-logo.png" },
              { name: "National Council on Local Government", logo: "/photos/nclg-logo.png" }
            ].map((partner, index) => (
              <AnimatedEntrance
                key={partner.name}
                {...ANIMATION_PRESETS.CARD_FADE_UP}
                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                className="flex items-center justify-center"
              >
                <div className="text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="bg-white p-2 rounded-lg shadow-sm w-24 sm:w-32 md:w-40">
                    <Image
                      src={partner.logo}
                      alt={`Partner ${partner.name}`}
                      width={100}
                      title={`Partner ${partner.name}`}
                      height={60}
                      className="w-full h-auto object-contain aspect-[2/1]"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
