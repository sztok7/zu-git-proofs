import { useCallback } from 'react';
import { getWithoutProvingUrl } from '@pcd/passport-interface/PassportInterface';
import { zupassPopupExecute } from '@pcd/passport-interface';

const constructProofUrl = () => {
    return getWithoutProvingUrl('https://zupass.org', window.location.href, 'message-pcd', true)
}

export default function ZupassLogin() {
    const login = useCallback(async () => {
        const proofUrl = constructProofUrl();

        const result = await zupassPopupExecute(proofUrl)

        if (result.type !== 'pcd') return

        //const pcd = MessagePCDPackage.deserialize(result.pcdStr)

        const discourseUrl = process.env.REACT_APP_DISCOURSE_URL // searchParams.get('discourse_url')

        window.location.href = discourseUrl

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

            window.location.href = discourseUrl
        } catch (error) {
            console.error("Error:", error);
        }
    }, []);


    return (
            <button onClick={login} className='btn-github'>Mit Zupass anmelden</button>
    );
}
