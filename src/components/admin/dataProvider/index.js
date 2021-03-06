export default type => {
    switch (type) {
        case 'rest':
            return import('./rest').then(provider => provider.default);
        default:
            throw new Error(`Unknow dataProvider type ${type}`);
    }
};
