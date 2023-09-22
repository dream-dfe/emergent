import Image from "next/image"


type TeamMemberProps = {
    name: string
     role: string
       imageSrc: string 
}
const TeamMember = ({ name, role,  imageSrc }: TeamMemberProps) => {
    return (
      <div className="   ">
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="  w-full flex justify-center">
            <div className="h-32 w-32">
              <Image src={imageSrc} width={200} height={200} alt={name} className="rounded-full object-cover h-full w-full shadow-md" />
            </div>
          </div>
          <div className="px-6 mt-8">
            <div className="font-bold text-xl text-main-purple text-center pb-1">{name}</div>
            <p className="text-gray-800 text-sm text-center">{role}</p>
            <div className="w-full flex justify-center pt-5 pb-5">
            
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TeamMember