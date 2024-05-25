import { withPluginApi } from 'discourse/lib/plugin-api';
import { zuAuthPopup } from "../lib/pcd-zuauth";

const fieldsToReveal = {
  revealTicketId: true,
  revealEventId: true,
  revealAttendeeSemaphoreId: true,
  revealProductId: true,
};

const config = [
  {
    pcdType: "eddsa-ticket-pcd",
    publicKey: [
      "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
      "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
    ],
    eventId: "53edb3e7-6733-41e0-a9be-488877c5c572",
    eventName: "ETHBerlin04"
  }
];

export default {
    name: 'listener',
    initialize() {
      withPluginApi('0.8.9', api => {
        api.onPageChange(() => {
          const observeLoginButton = () => {
            // Function to handle the login click event
            const handleLoginButtonClick = async(event) => {
              event.preventDefault();
              console.log('Custom login action!');

              try {
                const result = await zuAuthPopup({
                  zupassUrl: "https://zupass.org/",
                  fieldsToReveal,
                  watermark: BigInt(Math.trunc(Math.random() * 1e15)),
                  config
                });
                console.log(result);
              } catch (e) {
                console.error(e);
              }
              
            };
  
            // Create a mutation observer to watch for changes in the modal container
            const modalContainer = document.querySelector('.modal-container');
            if (modalContainer) {
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.addedNodes.length) {
                    // Check if the login button is present in the added nodes
                    const loginButton = modalContainer.querySelector('.btn.oauth2_basic');
                    if (loginButton) {
                      // Attach the event listener to the login button
                      loginButton.addEventListener('click', handleLoginButtonClick);
                      // Once found and listener attached, disconnect the observer
                      observer.disconnect();
                    }
                  }
                });
              });
  
              // Start observing the modal container for child list changes
              observer.observe(modalContainer, { childList: true, subtree: true });
            }
          };
  
          // Call the function to set up the observer
          observeLoginButton();
        });
      });
    }
  };