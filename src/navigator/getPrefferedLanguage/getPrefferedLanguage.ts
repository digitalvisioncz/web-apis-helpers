export type SubtagVariants = 'language' | 'region';

export type GetPrefferedLanguage = {
    subtag: SubtagVariants,
};

const getPrefferedLanguage = ({
    subtag,
}: GetPrefferedLanguage): string => {
    let prefferedLanguage = navigator.language;

    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
        [prefferedLanguage] = navigator.languages;
    }

    if (subtag === 'language') {
        return prefferedLanguage.split('-')[0];
    }

    if (subtag === 'region') {
        const langCodeArray = prefferedLanguage.split('-');

        return langCodeArray[1].length === 2 ? langCodeArray[1] : langCodeArray[2];
    }

    return prefferedLanguage;
};

export default getPrefferedLanguage;
