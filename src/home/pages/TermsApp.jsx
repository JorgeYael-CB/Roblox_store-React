import { NavBar } from "../layout/NavBar"

export const TermsApp = () => {
    return (
        <>
            <NavBar/>
            <div className="p-8 bg-gray-100 text-gray-900">
                <h1 className="text-4xl font-bold mb-6">Terms and Conditions of DevComplete Studios</h1>
                <p className="mb-4">Last updated: May 18, 2024</p>
                <p className="mb-4">
                    Welcome to DevComplete Studios. By using our Roblox script sales services, you agree to the following Terms and Conditions. If you do not agree with these terms, please do not use our services.
                </p>
                <h2 className="text-2xl font-semibold mb-2">1. Purchase of Scripts</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>1.1. <strong>Price:</strong> The price of each script is 129 MXN.</li>
                    <li>1.2. <strong>Permanence:</strong> The purchase of a script is permanent and does not expire.</li>
                    <li>1.3. <strong>No refunds:</strong> All sales are final, and we do not offer refunds under any circumstances unless it is an issue with the site.</li>
                    <li>1.4. In case of errors, you can contact us at the support email: <a href="mailto:devcomplete.studios.contact@gmail.com" className="text-blue-500">devcomplete.studios.contact@gmail.com</a></li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">2. Use of Scripts</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>2.1. <strong>Usage license:</strong> When purchasing a script, you are granted a limited, non-exclusive, non-transferable license to use the script on your Roblox account.</li>
                    <li>2.2. <strong>Prohibitions:</strong> Redistribution, resale, sharing, or modification of the scripts is not allowed without prior written consent from DevComplete Studios.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>3.1. <strong>Prohibition of scams:</strong> Any attempt at scamming, deception, or fraudulent conduct will result in suspension or permanent ban from our services.</li>
                    <li>3.2. <strong>Protection of the company:</strong> Any action that negatively affects DevComplete Studios, including but not limited to attacks, defamation, or illegal activities, will result in immediate termination of your services and possible legal action.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">4. Liability</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>4.1. <strong>Limited warranty:</strong> The scripts are sold "as is" and we do not guarantee they will work perfectly under all circumstances.</li>
                    <li>4.2. <strong>Disclaimer:</strong> DevComplete Studios will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our scripts.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">5. Changes to the Terms</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>5.1. <strong>Modifications:</strong> We reserve the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on our website.</li>
                    <li>5.2. <strong>Notification:</strong> It is your responsibility to periodically review these terms to stay informed of any changes.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
                <p className="mb-4">
                    If you have any questions or concerns about these Terms and Conditions, please contact us through our support email at <a href="mailto:devcomplete.studios.contact@gmail.com" className="text-blue-500">devcomplete.studios.contact@gmail.com</a>.
                </p>
                <p className="mt-6">
                    <strong>DevComplete Studios</strong> appreciates your trust and hopes you enjoy our products. By using our services, you agree to comply with these Terms and Conditions in their entirety.
                </p>
            </div>
        </>
    )
};