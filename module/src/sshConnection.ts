import {singleton, define, inject} from "@appolo/inject";
import {NodeSSH, SSHExecCommandOptions, SSHExecCommandResponse, SSHExecOptions} from "node-ssh";
import {SFTPWrapper} from "ssh2";
import {TransferOptions} from "./IOptions";



export class SshConnection {

    constructor(private _ssh: NodeSSH) {
    }

    public isConnected(): boolean {
        return this._ssh.isConnected()
    }

    public execCommand(givenCommand: string, options?: SSHExecCommandOptions): Promise<SSHExecCommandResponse> {
        return this._ssh.execCommand(givenCommand, options)
    }

    public putFile(localFile: string, remoteFile: string, givenSftp?: SFTPWrapper | null, transferOptions?: TransferOptions | null): Promise<void> {
        return this._ssh.putFile(localFile, remoteFile, givenSftp, transferOptions);
    }

    public getFile(localFile: string, remoteFile: string, givenSftp?: SFTPWrapper | null, transferOptions?: TransferOptions | null): Promise<void> {
        return this._ssh.getFile(localFile, remoteFile, givenSftp, transferOptions);
    }

    public async execCommandAndThrow(givenCommand: string, options?: SSHExecCommandOptions): Promise<string> {
        let result = await this._ssh.execCommand(givenCommand, options);

        if (result.code > 0) {
            throw new Error(`failed to run command ` + result.stderr)
        }

        return result.stdout;
    }

    public exec(command: string, parameters: string[], options?: SSHExecOptions & {
        stream: 'both';
    }): Promise<SSHExecCommandResponse> {
        return this._ssh.exec(command, parameters, options)
    }

    public dispose(): void {
        this._ssh.dispose();
    }


}
