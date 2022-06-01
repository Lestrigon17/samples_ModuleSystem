/// <reference path="Types/GlobalNS.ModuleAliases.ts" />

import { Base } from "./Base";
import { Controller } from "./Controller";
import { Define, EditMetadata } from "./DefenitionFunctional";
import { EModuleAliases } from "./EModuleAliases";

export class ModuleManager {
    public static Base = Base;
    public static Controller = Controller;

    public static EModuleAliases = EModuleAliases;

    public static Define = Define;
    public static EditMetadata = EditMetadata;
}