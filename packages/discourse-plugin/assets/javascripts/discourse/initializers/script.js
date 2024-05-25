import { withPluginApi } from 'discourse/lib/plugin-api';
import zuauth from "../lib/pcd-zuauth";

const fieldsToReveal = {
  revealTicketId: true,
  revealEventId: true,
  revealAttendeeSemaphoreId: true,
  revealProductId: true,
};

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
                const result = await zuauth.zuAuthPopup({
                  zupassUrl: process.env.NEXT_PUBLIC_ZUPASS_SERVER_URL,
                  fieldsToReveal,
                  watermark: '11114r50',
                  config: zuauth.ETHBERLIN04
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