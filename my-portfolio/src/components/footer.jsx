import logoPrimary from "../logo-files/primary-light.svg";
import arrowUp from "../icons/arrowUp.svg";

export default function Footer() {
    return(
        <div className="h-[15rem] px-8 flex flex-row justify-between items-center">

            <img src={logoPrimary} alt="Logo" className="h-[15rem] w-[15rem] object-cover"/>

            <div className="flex flex-row justify-center items-center gap-20 ">

                {/* Email - Linkdin  */}
                <div className="flex flex-col justify-center">


                    {/* Email Link  */}
                    <a href="contact">
                    <div className="flex flex-row items-center content-center gap-2 mb-4">
                        <p className="font-sans text-start text-sm text-secondary">EMAIL</p>
                        <img src={arrowUp} alt="twitter" className="w-5 h-5"/>
                    </div>
                    </a>


                    {/* Linkdin Link  */}
                    <a href="https://www.linkedin.com/in/preston-quinn-7b7245234/" target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-row items-center content-center gap-2 mb-4">
                        <p className="font-sans text-start text-sm text-secondary">LINKDIN</p>
                        <img src={arrowUp} alt="twitter" className="w-5 h-5"/>
                    </div>
                    </a>

                </div>  

                {/* Twitter - Instagram  */}
                <div className="flex flex-col justify-center">


                    {/* Twitter Link  */}
                    <a href="https://twitter.com/Preston_Quinnn" target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-row items-center content-center gap-2 mb-4">
                        <p className="font-sans text-sm text-secondary">TWITTER</p>
                        <img src={arrowUp} alt="twitter" className="w-5 h-5"/>
                    </div>
                    </a>


                    {/* Instagram Link  */}
                    <a href="https://www.instagram.com/preston_quinnn/" target="_blank" rel="noopener noreferrer">
                    <div href="instagram.com" className="flex flex-row items-center content-center gap-2 mb-4">
                        <p className="font-sans text-sm text-secondary">INSTAGRAM</p>
                        <img src={arrowUp} alt="twitter" className="w-5 h-5"/>
                    </div>
                    </a>

                </div>
            </div>
        </div>
    );
};