// -----------------------------------------------------------------------------
// <auto-generated>
//  this code was generated from a template.
//
//  manual changes to this file may cause unexpected behavior in your app.
//  manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
// -----------------------------------------------------------------------------
import { Generator, GenerationParams } from "@vlr/razor/types";
import { ReducerGenModel } from "../types";
import { reducerActionGenerator } from "./reducerAction";

function generate(model: ReducerGenModel, params: GenerationParams): string {
    const gen = new Generator(params);
    generateContent(gen, model);
    return gen.toString();
}

function generateContent(gen: Generator, model: ReducerGenModel): void {
    const indent = gen.indent;
    gen.append(`import { IAction } from `);
    gen.quote();
    gen.append(`@vlr/de-redux/types`);
    gen.quote();
    gen.append(`;`);
    gen.eol();
    gen.append(`import { actions, actionTypes } from `);
    gen.quote();
    gen.append(`./`);
    gen.append((model.actionsFile).toString());
    gen.quote();
    gen.append(`;`);
    gen.eol();
    for (const imp of model.imports) {
        gen.append(`import `);
        gen.append((imp.importName).toString());
        gen.append(` from `);
        gen.apostrophe();
        gen.append((imp.path).toString());
        gen.apostrophe();
        gen.append(`;`);
        gen.eol();
    }
    gen.forceEol();
    gen.append(`export function `);
    gen.append((model.reducerName).toString());
    gen.append(`(prev: `);
    gen.append((model.rootStateType).toString());
    gen.append(`, action: IAction): `);
    gen.append((model.rootStateType).toString());
    gen.append(` {`);
    gen.eol();
    gen.append(`  switch(action.type){`);
    gen.eol();
    for (const action of model.actions) {
        gen.indent = indent + "    ";
        reducerActionGenerator.generateContent(gen, action);
        gen.indent = indent;
        gen.eol();
    }
    gen.append(`    default:`);
    gen.eol();
    gen.append(`      return prev;`);
    gen.eol();
    gen.append(`  }`);
    gen.eol();
    gen.append(`}`);
    gen.eol();
    gen.indent = indent;
}

export const reducerGenerator = {
    generate,
    generateContent
};
