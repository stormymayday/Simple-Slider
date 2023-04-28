const getElements = (selection) => {

    const elements = document.querySelectorAll(selection);

    if (elements) {
        return elements;
    } else {
        throw new Error(`Elements with selection of '${selection}' do not exist`);
    }

};

export default getElements;