const getPrefferedLanguage = (): string => {
    let prefferedLanguage = navigator.language;

    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
        [prefferedLanguage] = navigator.languages;
    }

    return prefferedLanguage;
};

export default getPrefferedLanguage;
