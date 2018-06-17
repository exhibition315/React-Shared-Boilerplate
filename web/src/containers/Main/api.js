import { getTime } from '../../../../share/src/utils';

export const fetch = (text) => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            const token = `${text} data ${getTime()}`;
            resolve(token);
        }, 1000);
    });
    return p;
};
