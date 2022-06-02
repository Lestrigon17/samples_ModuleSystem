type TUniqueKey = keyof typeof GlobalNS.ModuleAliases;
type TStoreValue = typeof GlobalNS.ModuleAliases[TUniqueKey];
type TAliases = typeof GlobalNS.ModuleAliases;
type TMap<T> = { -readonly [Property in keyof T]: T[Property] };
type TStoreMap = TMap<typeof GlobalNS.ModuleAliases>

export class Controller {
    private static store = {} as TStoreMap;

    public static Register<T extends TUniqueKey>(unqiueName: T, classDefenition: TAliases[T]): void {
        const logMessage = `[ PLUGIN REGISTERED ] With MetaData:`;
        console.log(logMessage, classDefenition.metainfo);

        this.store[unqiueName] = classDefenition;
    }

    public static Get<T extends TUniqueKey>(moduleName: T): TAliases[T] {
        if (!this.store[moduleName])
            throw ReferenceError("Unknown module!");

        return this.store[moduleName];
    }
}