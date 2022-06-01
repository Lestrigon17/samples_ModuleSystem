import { Base } from "./Base";

type TUniqueKey = keyof typeof GlobalNS.ModuleAliases;
type TStoreValue = typeof GlobalNS.ModuleAliases[TUniqueKey];

export class Controller {
    private static store: Map<TUniqueKey, TStoreValue> = new Map();

    public static Register(unqiueName: TUniqueKey, classDefenition: typeof Base): void {
        const logMessage = `[ PLUGIN REGISTERED ] With MetaData:`;
        console.log(logMessage, classDefenition.metainfo);
        
        this.store.set(unqiueName, classDefenition);
    }

    public static Get<T extends TUniqueKey>(moduleName: T): Nullable<typeof GlobalNS['ModuleAliases'][T]> {
        if (!this.store.has(moduleName))
            throw ReferenceError("Unknown module!");

        // Да, эту траблу не смог победить
        // @ts-ignore
        return this.store.get(moduleName);
    }
}