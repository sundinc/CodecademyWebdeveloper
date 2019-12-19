const apiKey = 
'3K3Z6lRhe2Kkoi4A5Mc1Km0zhmvwK7FQ5woFI3qYMuiAYyPGglNCJtaT1aybJ-PkrRuTe596aotHT-VvoAdm5GRTyJ1nrlatzs8lWf-7jLsgIOspLy7I4AGtpzD6XXYx';

const Yelp = {
	searchYelp(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=´${term}&sort_by=${sortBy}`, 
			{
				headers:{
					Authorization: `Bearer ${apiKey}`
				},
			}).then((response) => {
					return response.json();
			}).then((jsonResponse) => {
				if(jsonResponse.business) {
					return jsonResponse.business.map(((business) => {
						return {
							id: business.id,
							imgSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].alias,
							rating: business.rating,
							reviewCount: business.review_count,
						};
					}));
				}
			})
	}
};

export default Yelp;
