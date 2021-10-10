"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SshProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const node_ssh_1 = require("node-ssh");
const utils_1 = require("@appolo/utils");
const sshConnection_1 = require("./sshConnection");
let SshProvider = class SshProvider {
    async connect(params) {
        const ssh = new node_ssh_1.NodeSSH();
        let key = (params.privateKey || this.moduleOptions.privateKey).replace(new RegExp(/\\n/, "g"), " ");
        key = utils_1.Crypto.rsa.cleanPrivateKey(key);
        await ssh.connect({
            host: params.host,
            readyTimeout: params.readyTimeout,
            username: params.username || this.moduleOptions.username,
            privateKey: key
        });
        return new sshConnection_1.SshConnection(ssh);
    }
};
tslib_1.__decorate([
    inject_1.inject()
], SshProvider.prototype, "moduleOptions", void 0);
SshProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], SshProvider);
exports.SshProvider = SshProvider;
//# sourceMappingURL=sshConnectionProvider.js.map