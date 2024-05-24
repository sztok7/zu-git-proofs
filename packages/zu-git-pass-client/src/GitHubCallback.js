import { useEffect } from 'react';

export default function GitHubCallback() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            fetch(`${process.env.REACT_APP_ZU_GIT_SERVER_API}/auth/github/callback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            })
            .then(response => response.json())
            .then(data => {
                // return jwt to discourse and close popup
            });
        }
    }, []);

    return <div>Auth in progress...</div>;
}