const HelloWorld = () => {
	const sayHeelo = () => {
		alert("Hello, World!");
	};
	return <button onClick={sayHeelo}>Click me!</button>;
};

export default HelloWorld;
