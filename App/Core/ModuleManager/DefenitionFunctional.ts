import { Base } from "./Base";
import { Controller } from "./Controller";
import { EModuleAliases } from "./EModuleAliases";

export function Define(
    unqiueName:  keyof typeof GlobalNS.ModuleAliases,
    version?:    string,
    author?:     string,
    lastUpdate?: string,
) {
    return (constructor: typeof Base) => {
        // Setup metadata of plugin
        if (unqiueName)
            constructor.metainfo.name = unqiueName;
        
        if (version)
            constructor.metainfo.version = version;
            
        if (author)
            constructor.metainfo.author = author;
        
        if (lastUpdate)
            constructor.metainfo.lastUpdate = lastUpdate;

        // Update enum values
        EModuleAliases[unqiueName] = unqiueName;

        Controller.Register(unqiueName, constructor);
    }
}

export class EditMetadata {
    public static Version(version: string = "1.0.0") {
        return (constructor: typeof Base) => {
            constructor.metainfo.version = version;
        }
    }

    public static Author(author: string = "Unkown") {
        return (constructor: typeof Base) => {
            constructor.metainfo.author = author;
        }
    }

    public static LastUpdate(lastUpdate: string = "Unkown") {
        return (constructor: typeof Base) => {
            constructor.metainfo.lastUpdate = lastUpdate;
        }
    }
}