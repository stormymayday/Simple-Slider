const getElement = (selection) => {

    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Element with selection of ${selection} does not exist`);
    }

};

export default getElement;