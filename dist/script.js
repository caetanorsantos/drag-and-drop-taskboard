const columns = document.querySelectorAll(".column--cards");

let draggedElement;

const dragStart = (event) => {
	draggedElement = event.target;
	event.dataTransfer.effectAllowed = "move";
};

const dragOver = (event) => {
	event.preventDefault();
};

const dragEnter = ({ target }) => {
	if (target.classList.contains("column--cards")) {
		target.classList.add("outline", "outline-1", "outline-blue-500");
	}
};

const dragLeave = ({ target }) => {
	target.classList.remove("outline", "outline-1", "outline-blue-500");
};

const drop = ({ target }) => {
	if (target.classList.contains("column--cards")) {
		target.classList.remove("outline", "outline-1", "outline-blue-500");

		target.append(draggedElement);
	}
};

const addCardEventListener = (card) => {
	card.addEventListener("dblclick", removeCard);
	card.addEventListener("mousedown", (event) => {
		if (event.button == 2) {
			event.preventdefault();
		}
		editCard;
	});

	card.addEventListener("dragstart", dragStart);
	card.addEventListener("focusout", () => {
		card.contentEditable = "false";
		if (!card.textContent) card.remove();
	});
};

const createCard = ({ target }) => {
	const card = document.createElement("section");

	card.classList.add("column--card", "w-full", "min-h-20", "rounded-lg", "font-medium", "text-sm", "bg-white", "px-3", "py-2", "mb-1", "border-solid", "border-2", "border-gray-300");
	card.draggable = "true";
	card.contentEditable = "true";

	addCardEventListener(card);

	if (target.classList.contains("column--cards")) {
		target.append(card);
		card.focus();
	}
};

const removeCard = ({ target }) => {
	if (target.classList.contains("column--card") && confirm("Deseja remover esta tarefa?")) target.remove();
};

columns.forEach((column) => {
	column.addEventListener("dragover", dragOver);
	column.addEventListener("dragenter", dragEnter);
	column.addEventListener("dragleave", dragLeave);
	column.addEventListener("drop", drop);
	column.addEventListener("dblclick", createCard);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Enter" && event.target.classList.contains("column--card")) {
		event.preventDefault();
		event.target.blur();
	}
});
