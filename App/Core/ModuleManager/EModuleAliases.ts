type aliasKeys = keyof typeof GlobalNS.ModuleAliases;

type TEModuleAliases = { [key in aliasKeys]: key };
export var EModuleAliases: TEModuleAliases = {} as TEModuleAliases;