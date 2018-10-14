// -----------------------------------------------------------------------------
// <auto-generated>
//  this code was generated from a template.
//
//  manual changes to this file may cause unexpected behavior in your app.
//  manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
// -----------------------------------------------------------------------------
import { Generator, GenerationParams } from "@vlr/razor/types";
import { ReducerGenAction } from "../types";

function generate(action: ReducerGenAction, params: GenerationParams): string {
    const gen = new Generator(params);
    generateContent(gen, action);
    return gen.toString();
}

function generateContent(gen: Generator, action: ReducerGenAction): void {
    const indent = gen.indent;
    gen.append(`case actionTypes.`);
    gen.append((action.type).toString());
    gen.append(`:`);
    gen.eol();
    if (action.alterById) {
        gen.append(`switch(action.stateId){`);
        gen.eol();
        for (const alter of action.alters) {
            gen.append(`case `);
            gen.append((alter.id).toString());
            gen.append(`:`);
            gen.eol();
            gen.append(`  return `);
            gen.append((alter.code).toString());
            gen.append(`;`);
            gen.eol();
        }
        gen.append(`default:`);
        gen.eol();
        gen.append(`  return `);
        gen.append((action.defaultAlter).toString());
        gen.append(`;`);
        gen.eol();
        gen.append(`}`);
        gen.eol();
    } else {
        gen.append(`return `);
        gen.append((action.defaultAlter).toString());
        gen.append(`;`);
        gen.eol();
    }
    gen.indent = indent;
}

export const reducerActionGenerator = {
    generate,
    generateContent
};
