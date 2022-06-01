/// <reference path="index.d.ts" />
import { App } from "../../App";

const {ModuleManager} = App.Core;

//                    Тут автокомплит пашет в название
@ModuleManager.Define("ModuleA",)
export class ModuleA extends ModuleManager.Base {
    public static PrintHello(): void {
        console.log("I'm moduleA", this.metainfo);
    }

    public static OnlyModuleAMethod(): void {
        console.error("OnlyModuleAMethod");
    }
}