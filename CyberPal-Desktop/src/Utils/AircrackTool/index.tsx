import { app } from "electron";
import { download } from 'electron-dl';
import extract = require('extract-zip');
import path = require('path');
import { spawn } from "child_process";
import { exec } from 'child_process';



export const installAircrack = async (win, options) => {
    console.log("I'm trying to install aircrack");
    const aircrackDownloadURL = 'https://download.aircrack-ng.org/aircrack-ng-1.7-win.zip';
  
    try {
      const downloadedTcpdump= await download(win, aircrackDownloadURL, options);
      console.log('Download completed:', downloadedTcpdump.getSavePath());
      let downloadedTcpdumpPath = downloadedTcpdump.getSavePath().split("\\");
      let downloadedTcpdumpPathFixed = downloadedTcpdumpPath.join("\\\\");

      try {
        const downloadsFolder = app.getPath('downloads');
        const targetDir = path.join(downloadsFolder,'aircrack');
        await extract(downloadedTcpdumpPathFixed, { dir: targetDir });
        console.log('Aircrack extracted');
      } catch (error) {
        console.error('Error extracting Aircrack:', error);
        throw(error);
      }

    } catch (error) {
      console.error('Failed to download Aircrack installer:', error);
    }
};

let aircrack;

export const executeAircrackCommand = (aircrackPath: string, aircrackArgs: Array<string>) => {
    aircrack = spawn(aircrackPath, aircrackArgs);

    aircrack.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    aircrack.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    })

    aircrack.on('close', (code) => {
        console.log(`aircrack process exited with code ${code}`);
    })
}

export const stopAircrackCommand = () => {
    if(aircrack) {
        aircrack.kill();
        console.log('aircrack stopped');
    }
}