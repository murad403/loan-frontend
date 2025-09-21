import pending from "../../assets/pending.png";
import useLoanStatus from '../../hooks/useLoanStatus';
import reject from "../../assets/reject.png";

const LoanStatus = () => {
    const {data} = useLoanStatus();
    // console.log(data.status);
    return (
        <div>
            {
                data?.status === "approve" ? 
                <div className="px-3 py-5 shadow-md bg-white rounded-sm space-y-4">
                <div>
                    <h3 className="text-red-950 font-semibold">Loan Amount</h3>
                    <p className="mt-2">${1000}</p>
                </div>
                <div>
                    <h3 className="text-red-950 font-semibold">Interest Rate</h3>
                    <p className="mt-2">{1000}%</p>
                </div>
                <div>
                    <h3 className="text-red-950 font-semibold">Terms (months)</h3>
                    <p className="mt-2">{12} Month</p>
                </div>
                <p className="text-red-950 font-semibold text-[16px]">**Note: {"aflkajdflsdjflsdkfjasldkfjalfjdlfkjadfklajdsflkjdflkdjfladkjfl"}</p>
                </div> :
                data?.status === "reject" ?
                <div className="flex flex-col items-center">
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-center'>We're sorry, your loan was not approved at this time</h2>
                <img className="h-[300px]" src={reject} alt="Reject" />
                </div> :
                <div className="flex flex-col items-center">
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-center'>Your loan has not yet been approved. Please wait for further updates</h2>
                <img className="h-[300px]" src={pending} alt="Pending" />
                </div>
            }
        </div>
    );
};

export default LoanStatus;