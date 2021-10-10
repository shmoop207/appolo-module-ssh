import {singleton, define, inject} from "@appolo/inject";
import {IOptions} from "./IOptions";
import {NodeSSH} from "node-ssh";
import {Crypto} from "@appolo/utils";
import {SshConnection} from "./sshConnection";

@define()
@singleton()
export class SshProvider {

    @inject() private moduleOptions: IOptions

    public async connect(params: { host: string, username?: string, privateKey?: string, readyTimeout?: number }): Promise<SshConnection> {
        const ssh = new NodeSSH();

        let key = (params.privateKey || this.moduleOptions.privateKey).replace(new RegExp(/\\n/, "g"), " ");

        key = Crypto.rsa.cleanPrivateKey(key)

        await ssh.connect({
            host: params.host,
            readyTimeout: params.readyTimeout,
            username: params.username || this.moduleOptions.username,
            privateKey: key
        });

        return new SshConnection(ssh)
    }
}
