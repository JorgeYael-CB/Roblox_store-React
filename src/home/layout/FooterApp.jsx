import { NavLink } from "react-router-dom"

export const FooterApp = () => {
    return (
        <footer className="rounded-sm bg-black py-6 px-12 flex flex-row justify-evenly items-center mt-36">


            <div>
                <h3 className="text-white font-bold text-4xl">DevComplete Studios</h3>
            </div>

            <div className="flex flex-col gap-3">
                <a target="_blank" href="https://discord.gg/zAjWS9KU">
                    <img className="w-10" src="/svg/discord.svg" alt="Discord Icon"/>
                </a>

                <a target="_blank" href="https://www.youtube.com/channel/UCaorjdhDs4JMW1QvwmKJv-g">
                    <img className="w-10" src="/svg/YT.svg" alt="Youtube Icon"/>
                </a>

                <a target="_blank" href="https://github.com/JorgeYael-CB">
                    <img className="w-10" src="/svg/github.svg" alt="Github Icon"/>
                </a>
            </div>

            <div className="flex flex-col gap-3">
                <NavLink className="text-white text-xl" to="/faq">FAQ</NavLink>
                <NavLink className="text-white text-xl" to="/terms">Terms</NavLink>
            </div>
        </footer>
    )
}
