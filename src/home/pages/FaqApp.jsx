import { FooterApp } from "../layout/FooterApp";
import { NavBar } from "../layout/NavBar";


export const FaqApp = () => {
    return (
        <>
            <NavBar/>
            <div className="p-8 bg-gray-100 text-gray-900">
                <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">1. How much does each script cost?</h2>
                    <p>The price of each script is 129 MXN.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">1.1 How much does it cost in dollars?</h2>
                    <p>The price in dollars $7</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">2. Is the purchase of a script permanent?</h2>
                    <p>Yes, the purchase of a script is permanent and does not expire.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">3. Are there any refunds available?</h2>
                    <p>All sales are final, and we do not offer refunds under any circumstances unless it is an issue with the site.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">4. How can I contact support if I encounter errors?</h2>
                    <p>If you encounter errors, you can contact us at the support email: <a href="mailto:devcomplete.studios.contact@gmail.com" className="text-blue-500">devcomplete.studios.contact@gmail.com</a></p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">5. What is the usage license for the scripts?</h2>
                    <p>When purchasing a script, you are granted a limited, non-exclusive, non-transferable license to use the script on your Roblox account.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">6. Can I redistribute or resell the scripts?</h2>
                    <p>No, redistribution, resale, sharing, or modification of the scripts is not allowed without prior written consent from DevComplete Studios.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">7. What actions can result in a suspension or ban?</h2>
                    <p>Any attempt at scamming, deception, or fraudulent conduct will result in suspension or permanent ban from our services.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">8. What happens if I engage in actions that negatively affect DevComplete Studios?</h2>
                    <p>Any action that negatively affects DevComplete Studios, including but not limited to attacks, defamation, or illegal activities, will result in immediate termination of your services and possible legal action.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">9. Is there any warranty for the scripts?</h2>
                    <p>The scripts are sold "as is" and we do not guarantee they will work perfectly under all circumstances.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">10. Is DevComplete Studios liable for any damages?</h2>
                    <p>DevComplete Studios will not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or inability to use our scripts and is not responsible for what happens in the game due to the use of the scripts.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">11. Can the Terms and Conditions change?</h2>
                    <p>We reserve the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on our website.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">12. How can I stay informed about changes to the Terms and Conditions?</h2>
                    <p>It is your responsibility to periodically review these terms to stay informed of any changes.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">13. How can I contact DevComplete Studios?</h2>
                    <p>If you have any questions or concerns about these Terms and Conditions, please contact us through our support email at <a href="mailto:devcomplete.studios.contact@gmail.com" className="text-blue-500">devcomplete.studios.contact@gmail.com</a>.</p>
                </div>
            </div>

            <FooterApp/>
        </>
    )
};