import Banner from '../components/home/banner';
import CreditLimit from '../components/home/CreditLimit';
import HowItWorks from '../components/home/HowItWorks';
import IndustrySolution from '../components/home/IndustrySolution';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IndustrySolution></IndustrySolution>
            <CreditLimit></CreditLimit>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;