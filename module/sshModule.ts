import {Module, module, IModuleParams} from '@appolo/engine';

import {IOptions} from "./src/IOptions";
import {SshProvider} from "../index";

@module()
export class SSHModule extends Module<IOptions> {

    public static for(options?: IOptions): IModuleParams {
        return {type: SSHModule, options}
    }

    public get defaults(): Partial<IOptions> {
        return {
            id: "sshProvider",
            username: "root"
        }
    }

    public get exports() {
        return [{id: this.moduleOptions.id, type: SshProvider}];
    }
}
