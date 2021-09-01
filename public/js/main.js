function hideAllContent() {
	const feature_content = Array.from(
		document.getElementsByClassName("feature-content")
	);
	feature_content.forEach((content) => content.classList.add("hidden"));
}

function showIndividualContent() {
	const individual_content = Array.from(
		document.getElementsByClassName("individual-feature")
	);
	individual_content.forEach((content) => {
		content.addEventListener("click", () => {
			hideAllContent();
			switch (content.id) {
				case "audiovisual":
					document
						.getElementById("audiovisualContent")
						.classList.remove("hidden");
					break;
				case "social-media":
					document
						.getElementById("socialMediaContent")
						.classList.remove("hidden");
					break;
				case "web-development":
					document
						.getElementById("webDevelopmentContent")
						.classList.remove("hidden");
					break;
				case "graphic-design":
					document
						.getElementById("graphicDesignContent")
						.classList.remove("hidden");
					break;
			}
		});
	});
}

function showDefaultContent() {
	document.getElementById("socialMediaContent").classList.remove("hidden");
}
showDefaultContent();
showIndividualContent();
