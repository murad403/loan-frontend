import ClientStatus from '../components/LenderDashBoard/ClientStatus';
import ClientList from '../components/LenderDashBoard/ClientList';
import useCreditRequestInfo from '../hooks/useCreditRequestInfo';

const LenderDashBoard = () => {
    const {creditRequestInfo} = useCreditRequestInfo();
    const pendingCreditRequestInfo = creditRequestInfo.filter(client => client.status === "pending");
    const successCreditRequestInfo = creditRequestInfo.filter(client => client.status === "success");
    const rejectedCreditRequestInfo = creditRequestInfo.filter(client => client.status === "rejected");
    const creditRequestStatus = {
        totalClients: creditRequestInfo?.length,
        approvedClients: successCreditRequestInfo?.length,
        pendingClients: pendingCreditRequestInfo?.length,
    }
    const clientList = {
        allClients: creditRequestInfo,
        pendingClients: pendingCreditRequestInfo,
        successClients: successCreditRequestInfo,
        rejectedClients: rejectedCreditRequestInfo
    }
    // console.log(creditRequestInfo);
    return (
        <div className='md:space-y-7 space-y-5'>
            <ClientStatus creditRequestStatus={creditRequestStatus}></ClientStatus>
            <ClientList clientList={clientList}></ClientList>
        </div>
    );
};

export default LenderDashBoard;