import { exec } from 'child_process';

export const installNmap = () => {
  console.log("I'm trying to install nmap");
    const installCommand = 'choco install nmap -y';
    exec(installCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('Error installing nmap:', error);
        return;
      }
      console.log('Nmap installed successfully:', stdout);
    });
  };

export const executeNmapCommand = (nmapCommand) => {
  exec(`nmap \${nmapCommand}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing nmap command:', error);
      return;
    }
    console.log('Nmap command output:', stdout);
  });
};

// export const executeNormalCommand = (command: string) => {
//   console.log("executing the command");
//   console.log(command);
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing command: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Command stderr: ${stderr}`);
//       return;
//     }
//     console.log(`Command stdout: ${stdout}`);
//   });
// }