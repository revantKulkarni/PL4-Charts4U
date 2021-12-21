// import '../src/x-603859-pl4-charts4u';
import '../../src/x-603859-pl4-charts4u';

export default () => {
	const header = document.createElement("h2");
	header.innerText = "Charts4U";
	document.body.appendChild(header);
	basic();
};

export const basic = () => {
	const header = document.createElement("h3");
	header.innerText = "PL4-Charts4U";
	document.body.appendChild(header);

	const container = document.createElement("div");
	const component = document.createElement("x-603859-pl4-charts4u");
    container.appendChild(component);
	document.body.appendChild(container);
}