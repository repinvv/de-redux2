import { createIndent } from "./createIndent";

export type SGFunc = (sg: StringGen) => StringGen;

export class StringGen {
  constructor(private readonly lf: string = "\n",
    private readonly indent: number = 0,
    private readonly strings: string[] = [],
    private readonly eol: boolean = true
  ) { }

  public pushIndent(amount: number = 1): StringGen {
    const newIndent = this.indent + amount;
    return new StringGen(this.lf, newIndent, this.strings, this.eol);
  }

  public popIndent(amount: number = 1): StringGen {
    const newIndent = this.indent - amount;
    if (newIndent < 0) {
      throw new Error("Indent error.");
    }

    return new StringGen(this.lf, newIndent, this.strings, this.eol);
  }

  public appendLine(line: string = ""): StringGen {
    if (!line.length) { return this.appendLineFeed(); }
    return this.append(line).appendLineFeed();
  }

  public append(text: string): StringGen {
    const sg = this.eol ? this.appendIndent() : this;
    return new StringGen(sg.lf, sg.indent, [...sg.strings, text], false);
  }

  public braces(func: SGFunc): StringGen {
    return this.bracesImpl(func, "}");
  }

  public bracesSemicolon(func: SGFunc): StringGen {
    return this.bracesImpl(func, "};");
  }

  public bracesComma(func: SGFunc): StringGen {
    return this.bracesImpl(func, "},");
  }

  public toString(): string {
    if (this.indent > 0) {
      console.warn("Possible indent error - indent remaining " + this.indent);
    }
    return this.strings.join("");
  }

  private bracesImpl(func: SGFunc, ending: string): StringGen {
    return func(this.appendLine("{").pushIndent())
      .popIndent().appendLine(ending);
  }

  private appendLineFeed(): StringGen {
    return new StringGen(this.lf, this.indent, [...this.strings, this.lf], true);
  }

  private appendIndent(): StringGen {
    return this.indent > 0
      ? new StringGen(this.lf, this.indent, [...this.strings, createIndent(this.indent)], false)
      : this;
  }
}
