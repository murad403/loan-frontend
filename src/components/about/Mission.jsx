import mission from '../../assets/mission.jpg';

const Mission = () => {
    return (
        <div className='flex flex-col md:flex-row my-4 md:my-8 lg:my-14 justify-center gap-4 items-center mx-5 md:mx-14 lg:mx-28'>
            <img src={mission} alt="Our Mission" className='md:w-1/2 rounded-lg' />
            <div className='md:w-1/2 md:space-y-2 space-y-1'>
                <p className='text-[12px] bg-gray-200 inline-block rounded-md px-1 text-red-950'>Our Mision</p>
                <h2 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-black'>Democratizing Access to Fair Credit</h2>
                <p className='text-sm text-gray-700'>At GUEHI and CO, our mission is to create a more inclusive finalcial ecosystem, where everyone has access to fair credit opportunaties. We believe an breacking down barriers between lenders and borrowers throught transparent, data driven solutions that benefit both side of the landing equation</p>
            </div>
        </div>
    );
};

export default Mission;