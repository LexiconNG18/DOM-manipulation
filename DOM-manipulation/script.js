(function () {
	let listan = document.querySelector("#listan");
	let input =  document.querySelector("#entry");

	input.addEventListener("change", addEntry);

	function addEntry() {
		let li = document.createElement("li");
		
		// this refererar till html-elementet som 
		// triggade eventet
		li.innerText = this.value;		
		listan.appendChild(li);
		this.value = "";

		let button = document.createElement("button");
		button.innerText = "x";
		li.appendChild(button);

		button.addEventListener("click", removeEntry);
	}


	function removeEntry() {
		let li = this.parentElement;
		li.remove();
	}

})();