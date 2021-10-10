"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SshConnection = void 0;
class SshConnection {
    constructor(_ssh) {
        this._ssh = _ssh;
    }
    isConnected() {
        return this._ssh.isConnected();
    }
    execCommand(givenCommand, options) {
        return this._ssh.execCommand(givenCommand, options);
    }
    putFile(localFile, remoteFile, givenSftp, transferOptions) {
        return this._ssh.putFile(localFile, remoteFile, givenSftp, transferOptions);
    }
    getFile(localFile, remoteFile, givenSftp, transferOptions) {
        return this._ssh.getFile(localFile, remoteFile, givenSftp, transferOptions);
    }
    async execCommandAndThrow(givenCommand, options) {
        let result = await this._ssh.execCommand(givenCommand, options);
        if (result.code > 0) {
            throw new Error(`failed to run command ` + result.stderr);
        }
        return result.stdout;
    }
    exec(command, parameters, options) {
        return this._ssh.exec(command, parameters, options);
    }
    dispose() {
        this._ssh.dispose();
    }
}
exports.SshConnection = SshConnection;
//# sourceMappingURL=sshConnection.js.map