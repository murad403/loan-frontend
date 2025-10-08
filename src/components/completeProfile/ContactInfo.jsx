import {MdArrowBackIosNew} from "react-icons/md";

const ContactInfo = ({step, setStep, setContactInfo}) =>{
    const handleContactInfo = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const address = form.get('address');
        const city = form.get('city');
        const state = form.get('state');
        const zipCode = form.get('zip-code');
        const contactInfo = {
            address, city, state, zipCode
        }
        setStep(step + 1);
        setContactInfo(contactInfo);
    }
    return (
        <div>
            <h2 className="text-xl font-semibold text-red-950 mb-3">Contact Information</h2>
            <form onSubmit={handleContactInfo} className='mt-5 md:space-y-3 space-y-1'>
                <div className='w-full'>
                        <label className='text-sm font-medium text-gray-800 block'>Address</label>
                        <input name='address' type="text" className=' text-gray-700 appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"12 street road"} required/>
                </div>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                    <div>
                        <label className='text-sm font-medium text-gray-800 block'>City</label>
                        <input name='city' type="text" className='appearance-none text-gray-700 px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"New York"} required/>
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-800 block'>State</label>
                        <input name='state' type="text" className='text-gray-700 appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"NY"} required/>
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-800 block'>ZIP Code</label>
                        <input name='zip-code' type="text" className='text-gray-700 appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"5010"} required/>
                    </div>
                </div>
                <div className="flex justify-between">
        <button
          onClick={() => setStep(step - 1)}
          className="px-4 py-2 rounded bg-gray-400 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
        >
          <MdArrowBackIosNew /> Back
        </button> 
        <button
          type="submit"
          className="px-4 py-2 rounded bg-red-950 text-white disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
                </div>
            </form>
        </div>
    )
}
export default ContactInfo