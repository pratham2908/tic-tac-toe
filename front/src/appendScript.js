export const appendScript = (scriptToAppend) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptToAppend;
    scriptElement.async = true;
    scriptElement.defer = true;
    document.body.appendChild(scriptElement);
}