import { SlCalender } from "react-icons/sl";

const PersonalInfo = ({step, setStep, setPersonalInfo}) =>{

    const handlePersonalInfo = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const firstName = form.get('first-name');
    const lastName = form.get('last-name');
    const dateOfBirth = form.get('date-of-birth');
    const gender = form.get("gender");
    const personalInfo = {
      firstName, lastName, dateOfBirth, gender
    }
    setStep(step + 1);
    setPersonalInfo(personalInfo);
  }
    return (
        <div>
            <h2 className="text-xl font-semibold text-red-950 mb-3">Personal Information</h2>
            <form onSubmit={handlePersonalInfo} className='mt-5 md:space-y-3 space-y-1'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-800 block'>First Name</label>
                        <input required  name='first-name' type="text" className='appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px] text-gray-700' placeholder="Enter your first name" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-800 block'>Last Name</label>
                        <input required name='last-name' type="text" className='appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px] text-gray-700' placeholder="Enter your last name" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-1/2 relative'>
                        <label className='text-sm font-medium text-gray-800 block'>Date Of Birth</label>
                        <input name='date-of-birth' required type="date" className='px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px] text-gray-700'/>
                        <span className="absolute right-3 cursor-pointer top-8 text-gray-500 pointer-events-none">
                            <SlCalender/>
  </span>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-800 block'>Gender</label>
                        <select name="gender" className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px] text-gray-700">
                            <option value="male" defaultChecked>Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                {/* button */}
                <div className="flex justify-end mt-3">
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
export default PersonalInfo