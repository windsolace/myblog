import LazyLoad from "vanilla-lazyload";

const logEvent = (eventName, element) => {
	console.log(
		Date.now(),
		eventName,
		element.getAttribute("data-src"),
		element.getAttribute("src")
	);
};

const lazyLoadOptions = {
	elements_selector: ".lazy",
	to_webp: true,

	callback_enter: element => {
		logEvent("ENTERED", element);
	},
	callback_load: element => {
		logEvent("LOADED", element);
	},
	callback_set: element => {
		logEvent("SET", element);
	},
	callback_error: element => {
		logEvent("ERROR", element);
		element.src = "https://via.placeholder.com/50";
	}
};

// const createLazyLoadInstance = new LazyLoad(lazyLoadOptions);

export default () => {
    const createLazyLoadInstance = new LazyLoad(lazyLoadOptions);
};
