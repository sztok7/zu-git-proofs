import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

export default function GitHubCallback() {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("Running effect", code)
        if (code) {
            fetch(`${process.env.REACT_APP_ZU_GIT_SERVER_API}/auth/github`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // TODO figure out from where to take zupass email or id
                body: JSON.stringify({ code, zupassEmail: "filip.stokovic@chainsafe.io" }),
            })
            .then(response => response.json())
            .then(data => {
                redirect('/')
            });
        }
    }, []);

    return <div>Auth in progress...</div>;
}
