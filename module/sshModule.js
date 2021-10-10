"use strict";
var SSHModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSHModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const index_1 = require("../index");
let SSHModule = SSHModule_1 = class SSHModule extends engine_1.Module {
    static for(options) {
        return { type: SSHModule_1, options };
    }
    get defaults() {
        return {
            id: "sshProvider",
            username: "root"
        };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: index_1.SshProvider }];
    }
};
SSHModule = SSHModule_1 = tslib_1.__decorate([
    engine_1.module()
], SSHModule);
exports.SSHModule = SSHModule;
//# sourceMappingURL=sshModule.js.map