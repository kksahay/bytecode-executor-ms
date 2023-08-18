import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig.js';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import fs from 'fs'

export const downloadFiles = async (id, tests) => {
    fs.mkdir('input', { recursive: true }, (err) => {
        if (err) throw err;
    })
    fs.mkdir('output', { recursive: true }, (err) => {
        if (err) throw err;
    })
    const folderName = process.env.foldername
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    for (let i = 1; i <= tests; i++) {
        const inputFilePath = `${folderName}/${id}/input/input${i}.txt`;
        const outputFilePath = `${folderName}/${id}/output/output${i}.txt`;
        try {
            const inputFileRef = ref(storage, inputFilePath);
            const outputFileRef = ref(storage, outputFilePath);
            const inputUrl = await getDownloadURL(inputFileRef);
            const outputUrl = await getDownloadURL(outputFileRef);

            const inputResponse = await fetch(inputUrl);
            const outputResponse = await fetch(outputUrl);
            const inputBlob = await inputResponse.blob();
            const outputBlob = await outputResponse.blob();
            const inputBuffer = await inputBlob.arrayBuffer();
            const inputText = Buffer.from(inputBuffer).toString('utf-8');
            const outputBuffer = await outputBlob.arrayBuffer();
            const outputText = Buffer.from(outputBuffer).toString('utf-8');

            fs.writeFileSync(`input/input${i}.txt`, inputText);
            fs.writeFileSync(`output/output${i}.txt`, outputText);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}