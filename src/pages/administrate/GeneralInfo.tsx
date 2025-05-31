interface GeneralInfoProps {
    firstName: string;
    lastName: string;
    experience: string;
    personalWeb: string;
}

const GeneralInfo = ({firstName, lastName, experience, personalWeb}: GeneralInfoProps) => {
  return (
    <div className='grid grid-cols-4'>
        <div className='flex flex-col gap-3  pb-3'>
          <span className='text-text-overlay font-semibold text-sm'>First Name</span>
          <span className='text-gray-normal font-normal text-sm'>{firstName}</span>
        </div>
        <div className='flex flex-col gap-3  pb-3'>
          <span className='text-text-overlay font-semibold text-sm'>Last Name</span>
          <span className='text-gray-normal font-normal text-sm'>{lastName}</span>
        </div>
        <div className='flex flex-col gap-3  pb-3'>
          <span className='text-text-overlay font-semibold text-sm'>Experience</span>
          <span className='text-gray-normal font-normal text-sm'>{experience}</span>
        </div>
        <div className='flex flex-col gap-3  pb-3'>
          <span className='text-text-overlay font-semibold text-sm'>Personal Website</span>
          <span className='text-gray-normal font-normal text-sm'>{personalWeb}</span>
        </div>
      </div>
  )
}

export default GeneralInfo