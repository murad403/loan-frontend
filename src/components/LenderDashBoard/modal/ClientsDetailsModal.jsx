import useCreditRequestInfo from "../../../hooks/useCreditRequestInfo";
import CreditPassport from "./CreditPassport";
import Decision from "./Decision";
import FinancialInformation from "./FinancialInformation";
import LenderCreditScore from "./LenderCreditScore";
import RiskAssessment from "./RiskAssessment";

const ClientsDetailsModal = ({ actionId, setActionId }) => {
  const { creditRequestInfo } = useCreditRequestInfo();
  const client = creditRequestInfo.find((client) => client._id === actionId);
  // console.log(client?.email);
  return (
    <div className="modal-box w-11/12 max-w-5xl p-0">
      <div className="flex justify-between items-center p-3 bg-gray-100">
        <h3 className="text-lg text-red-950">Client Details</h3>
        <form method="dialog">
          <button
            onClick={() => setActionId(null)}
            className="btn btn-sm btn-circle btn-ghost a"
          >
            ✕
          </button>
        </form>
      </div>
      <div className="md:p-4 p-3 flex gap-16 md:gap-5 items-start flex-col md:flex-row bg-white">
            <div className="md:w-[70%] w-full">
              <CreditPassport creditInfo={client?.creditInfo} email={client?.email}></CreditPassport>
              <FinancialInformation financialInfo={client?.financialInfo}></FinancialInformation>
              <Decision email={client?.email}></Decision>
            </div>
            <div className="md:w-[30%] space-y-3 w-full">
              <LenderCreditScore financialInfo={client?.financialInfo}></LenderCreditScore>
              <RiskAssessment financialInfo={client?.financialInfo}></RiskAssessment>
            </div>
      </div>
    </div>
  );
};

export default ClientsDetailsModal;
