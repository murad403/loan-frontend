import { BsGraphUp } from "react-icons/bs";
import { CiCalculator1 } from "react-icons/ci";
import { FaDatabase, FaLeaf } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const industrySolutions = [
    {
        id: 1,
        title: "Building & Construction",
        description: "Specialized financing solutions for construction projects, equipment purchase, and property development with flexible terms tailored to project timelines.",
        icon: CiCalculator1
    },
    {
        id: 2,
        title: "DeFi & Fintech",
        description: "Cutting-edge decentralized finance solutions combining traditional lending models with blockchain technology for faster, more secure transactions.",
        icon: BsGraphUp
    },
    {
        id: 3,
        title: "Agriculture",
        description: "Customized financing for farmers and agribusinesses, considering seasonal cash flows and providing loans for equipment, landacquisition, and operational costs.",
        icon: FaLeaf
    },
    {
        id: 4,
        title: "Event & Entertainment",
        description: "Short-term financing solutions for event organizers and entertainment companies, with quick approval processes and specialized risk assessment models.",
        icon: SlCalender
    },
    {
        id: 5,
        title: "Data & Technology",
        description: "Innovative financing for tech startups and data-driven companies, with IP-backed loan options and growth-focused lending solutions for scaling operations.",
        icon: FaDatabase
    }
]
export default industrySolutions;