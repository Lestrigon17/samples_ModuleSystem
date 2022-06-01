import { TBaseMetaInformation } from "./Types/TBaseMetaInformation";

export class Base {
    public static metainfo: TBaseMetaInformation = {
        name: "Base",
        version: "1.0",
        author: "Lestrigon",
        lastUpdate: "01.06.2022"
    }

    public static PrintHello(): void {}
}