const apiKey = 
3K3Z6lRhe2Kkoi4A5Mc1Km0zhmvwK7FQ5woFI3qYMuiAYyPGglNCJtaT1aybJ-PkrRuTe596aotHT-VvoAdm5GRTyJ1nrlatzs8lWf-7jLsgIOspLy7I4AGtpzD6XXYx;

const Yelp = {
		search(term, location, sortBy) {
			return
fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=´${term}&sort_by=${sortBy}`, 
, {
  headers: {
    Authorization: `Bearer ${apiKey}`}
			});
		}
	};

