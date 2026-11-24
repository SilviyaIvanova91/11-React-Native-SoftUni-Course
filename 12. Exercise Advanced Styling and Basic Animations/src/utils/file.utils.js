export const isLocalFile = (uri) => {
    return uri && uri.startsWith('file://');
};
