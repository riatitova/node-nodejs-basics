import * as fs from 'fs/promises';

const fileExists = path => fs.stat(path).then(() => true, () => false);

export const create = async () => {
    // Write your code here
    if (await fileExists('./files/fresh.txt')) {
        throw new Error('FS operation failed');
    } else {
        const content = 'I am fresh and young';
        await fs.writeFile('./files/fresh.txt', content);
    }
};

create().then();
