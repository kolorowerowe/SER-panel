

export const downloadFile = (object: string, fileName: string, type: string) => {
    const element = document.createElement("a");

    const file = new Blob([object],
        {type: type});

    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};