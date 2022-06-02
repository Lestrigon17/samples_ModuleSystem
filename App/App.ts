/// <reference path="types.d.ts" />

import { Core } from "./Core";

export class App {
    public static Core = Core;
}

import "./Modules/Loader";
const {ModuleManager} = App.Core;

// Получаем по енуму, класс подставляет IDE
const ModuleA = ModuleManager.Controller.Get(ModuleManager.EModuleAliases.ModuleA);
ModuleA.PrintHello();
ModuleA.OnlyModuleAMethod();

const ModuleB = ModuleManager.Controller.Get(ModuleManager.EModuleAliases.ModuleB);
ModuleB.PrintHello();
ModuleB.OnlyModuleBMethod();