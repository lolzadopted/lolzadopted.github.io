var app = new Vue({
  	el: '#app',
  	data: {
		info: {
      name: "adopted.",
      social: [
        {
          link: "https://twitter.com/lolzadopted",
          type: "twitter",
          name: "Twitter"
        },
        {
          link: "https://reddit.com/u/ItsS0n1c",
          type: "reddit",
          name: "Reddit"
        },
        {
          link: "https://github.com/lolzadopted",
          type: "github",
          name: "GitHub"
        },
        {
          link: "mailto:lolzadopted@gmail.com",
          type: "mail",
          icon_overwrite: {
            type: "fas",
            id: "envelope"
          },
          name: "Email"
        }

      ],
      projects: {}
    }
  	},
  	methods: {
		getEndpoint(url) {
	 		return new Promise((resolve, reject) => {
				fetch(`${url}`).then((response) => {
					if (response.status !== 200) {
		  				console.log(`Looks like there was a problem. Status Code: ${response.status}`);
						reject(response.status);
		  				return;
					};
					// Examine the text in the response
					response.json().then((data) => resolve(data));
				}).catch((err) => reject(err));
	  		});
		},
		init() {
			this.getEndpoint("assets/json/projects.json").then((data) => {
				this.info.projects = data;
	  		}).catch((err) => {
	  			console.error(err);
	  		});
		}
  	}
});

app.init();
