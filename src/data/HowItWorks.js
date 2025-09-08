import { FiUsers } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";

const howItWorksData = [
    {
        id: 1,
        title: "Create an Account",
        description: "Sign up with your basic information to get started on your credit journey.",
        icon: FiUsers
    },
    {
        id: 2,
        title: "Fill Data Form",
        description: "Provide your financial information securely to calculate your credit score.",
        icon: IoNewspaperOutline
    },
    {
        id: 3,
        title: "Get Score & Limit",
        description: "Receive your credit score and suggested credit limit instantly.",
        icon: VscGraph
    },
    {
        id: 4,
        title: "Connect with Lenders",
        description: "Consent to share your score with trusted lenders to receive loan offers.",
        icon: LuBadgeCheck
    },
];

export default howItWorksData;