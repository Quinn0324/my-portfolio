import logoPrimary from "../logo-files/primary-light.svg";

export default function Footer() {
    return(
        <div className="pt-2 pt-[2rem] h-200px flex flex-row justify-between items-center">

            <div className="">
            <img src={logoPrimary} alt="Logo" className="h-[15rem] w-auto" />
            </div>
            <div className="flex flex-row justify-center items-center gap-20 ">
                <div className="flex flex-col justify-center">
                    <p className="font-sans text-start text-sm text-secondary mb-4">EMAIL</p>
                    <p className="font-sans text-start text-sm text-secondary mb-4">LINKDIN</p>
                </div>  
                <div className="flex flex-col justify-center">
                    <p className="font-sans text-sm text-secondary mb-4">TWITTER</p>
                    <p className="font-sans text-sm text-secondary mb-4">INSTAGRAM</p>
                </div>
            </div>

        </div>

    );
};