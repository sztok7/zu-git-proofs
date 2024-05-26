import { useCallback } from 'react';
import { getWithoutProvingUrl } from '@pcd/passport-interface/PassportInterface';
import { zupassPopupExecute } from '@pcd/passport-interface';
import { MessagePCDPackage } from '@pcd/message-pcd'

const constructProofUrl = () => {
    return getWithoutProvingUrl('https://zupass.org', window.location.href, 'message-pcd', true)
}

export default function ZupassLogin() {
    const login = useCallback(async () => {
        const proofUrl = constructProofUrl();

        const result = await zupassPopupExecute(proofUrl)


        if (result.type !== 'pcd') return

        console.log(result.pcdStr)

        const pcd = MessagePCDPackage.deserialize(result.pcdStr)

        console.log(pcd)

        const discourseUrl = process.env.DISCOURSE_URL // searchParams.get('discourse_url')

        try {
            const response = await fetch(discourseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pcd: 'rfgeghfihefuyifghodgf',
                    email: 'anon@anon.xyz',
                    badges: 'Core Contributor'
                }),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }, []);


    return (
        <>
            <button onClick={login}>Mit Zupass anmelden</button>
        </>
    );
}
