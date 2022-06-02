/// <reference path="index.d.ts" />
import { App } from "../../App";

const {ModuleManager} = App.Core;

//                    Тут автокомплит пашет в название
@ModuleManager.Define("ModuleB",)
export class ModuleB extends App.Core.ModuleManager.Base {
    public static PrintHello(): void {
        console.log("I'm moduleB");
    }
    
    public static OnlyModuleBMethod(): void {
        console.error("OnlyModuleBMethod");
    }
}