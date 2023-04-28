const getElements = (selection) => {

    const elements = document.querySelectorAll(selection);

    if (elements.length > 0) {
        return elements;
    } else {
        throw new Error(`No elements were selected using '${selection}' selection`);
    }

};

export default getElements;