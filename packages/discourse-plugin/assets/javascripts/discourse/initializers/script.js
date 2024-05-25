import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'listener',
    initialize() {
      withPluginApi('0.8.9', api => {
        api.onPageChange(() => {
          const loginButton = document.querySelector(".btn.oauth2_basic");
        
            if (loginButton) {
              alert("WOWOWOW");
              loginButton.addEventListener("click", clickCallback, { once: true });
            }
        //   api.onAppEvent("modal:body-shown", (event) => {
        //     alert("HEY");
        //     
        //   });
        });
      });
    }
  };