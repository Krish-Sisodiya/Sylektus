/* eslint-disable no-irregular-whitespace */
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Briefcase,
  ChevronRight,
  Users,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import Header from "./common/Header";
import { Link as RouterLink } from "react-router-dom";
import TeamSection from "./TeamSection";

// ----------------------------------------------------------------------
// TEAM DATA
// ----------------------------------------------------------------------

const leadershipTeam = [
  {
    name: "Suresh Sharma",
    role: "CEO & Digital Strategist",
    bio: "Visionary leader driving growth through innovative and scalable digital transformation strategies. 15+ years of experience.",
    image: "/assets/img/suresh.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Verma",
    role: "Lead Full Stack Architect",
    bio: "Specializing in high-performance cloud architecture and complex MERN stack solutions.",
    image: "/assets/img/priya.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rajat Khanna",
    role: "Creative Director & UX Head",
    bio: "Aesthetic design master with deep understanding of user psychology and conversion UX.",
    image: "/assets/img/rajat.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const coreValues = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Continuously experimenting with new tech stacks and methodologies.",
  },
  {
    icon: Globe,
    title: "Transparency",
    description:
      "Open communication and honest feedback drives our internal culture.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Commitment to ethical practices and trust building.",
  },
];

// ----------------------------------------------------------------------
// MOTION VARIANTS
// ----------------------------------------------------------------------

const headerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// ----------------------------------------------------------------------
// REUSABLE TEAM MEMBER CARD
// ----------------------------------------------------------------------

const TeamMemberCard: React.FC<typeof leadershipTeam[0]> = (member) => {
  return (
    <motion.div
      variants={cardItemVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 3,
        rotateX: 1,
        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative h-96 bg-[#181825] rounded-2xl overflow-hidden 
           shadow-xl cursor-pointer border border-[#232334] 
           hover:border-[#A855F7] transform-style-preserve-3d"
    >
      {/* IMAGE */}
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700"
        initial={{ filter: "grayscale(100%) brightness(0.7)", scale: 1 }}
        variants={{
          hover: {
            filter: "grayscale(0%) brightness(1.0)",
            scale: 1.1,
          },
        }}
      />

      {/* NAME + ROLE */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6 pt-10 
                 bg-gradient-to-t from-[#0F0F17]/95 to-transparent z-10"
        variants={{ hover: { y: -10 } }}
      >
        <h3 className="text-3xl font-extrabold text-white">{member.name}</h3>
        <p className="text-xl text-[#A855F7]">{member.role}</p>
      </motion.div>

      {/* BIO OVERLAY */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6 pt-16 
                 bg-[#0F0F17]/90 backdrop-blur-sm z-20"
        initial={{ y: "100%" }}
        variants={{ hover: { y: "0%" } }}
      >
        <p className="text-gray-300 text-lg mb-6 border-l-4 border-[#6366F1] pl-3">
          {member.bio}
        </p>

        <div className="flex space-x-6">
          <motion.a
            href={member.linkedin}
            whileHover={{ scale: 1.3, color: "#0A66C2" }}
            className="text-gray-400"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href={member.twitter}
            whileHover={{ scale: 1.3, color: "#1DA1F2" }}
            className="text-gray-400"
          >
            <Twitter size={28} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ----------------------------------------------------------------------
// MAIN PAGE
// ----------------------------------------------------------------------

const TeamPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  return (
    <div className="min-h-screen bg-[#0F0F17] text-white">
      <Header onChatIconClick={() => {}} />

      <main className="max-w-7xl mx-auto p-4 md:p-8">

        {/* HERO */}
        <motion.section
          variants={headerVariants}
          initial="initial"
          animate="animate"
          className="pt-24 pb-16 md:pt-36 md:pb-24 text-center"
          style={{ y: yRange }}
        >
          <p className="text-lg text-[#A855F7] font-semibold mb-3 uppercase tracking-widest">
            Our People, Our Strength
          </p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#6366F1] to-[#A855F7]"
          >
            The Human Element
          </motion.h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We are a team of innovators, creators, and engineers united by a
            passion for excellence.
          </p>

          <div className="mt-8 text-[#6366F1]/50">
            <Users size={50} className="mx-auto" />
          </div>
        </motion.section>

        {/* LEADERSHIP */}
        <section className="py-12 md:py-16">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-[#6366F1]">
            Visionary Leadership
          </h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </motion.div>
        </section>

        {/* CORE TEAM */}
        <section className="py-12 md:py-16">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-[#A855F7]">
            The Core Innovators
          </h2>

          <p className="text-center text-gray-400 mb-12 text-xl">
            Meet the brilliant minds powering our digital transformation.
          </p>

          <TeamSection />
        </section>

        {/* VALUES */}
        <section className="py-12 md:py-16">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
            Our Core Values
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                className="p-8 bg-[#181825] rounded-2xl 
                           border-b-4 border-[#6366F1]/50 
                           hover:border-[#A855F7] transition-all"
              >
                <value.icon size={40} className="text-[#6366F1] mb-4" />
                <h3 className="text-3xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#6366F1]/10 border border-[#6366F1]/50 
                       rounded-3xl p-10 md:p-16 shadow-2xl text-center
                       hover:bg-[#6366F1]/20 transition-all md:flex 
                       justify-between items-center"
          >
            <div className="text-left md:w-3/4 flex items-center space-x-4">
              <Briefcase size={50} className="text-[#6366F1]" />

              <div>
                <h2 className="text-4xl font-extrabold text-[#6366F1]">
                  Ready to Build the Future?
                </h2>
                <p className="text-lg text-gray-300">
                  Explore roles that challenge you and help redefine digital
                  innovation.
                </p>
              </div>
            </div>

            <RouterLink
              to="/careers"
              className="inline-flex items-center px-10 py-4 
                         bg-[#6366F1] text-white font-bold rounded-full 
                         shadow-xl hover:bg-[#4F46E5] text-lg mt-8 md:mt-0"
            >
              View Open Roles <ChevronRight size={22} className="ml-2" />
            </RouterLink>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;
