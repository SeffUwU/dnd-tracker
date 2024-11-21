import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity {
  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  toJSON(proto?: any) {
    let jsoned: any = {};
    let toConvert = <any>proto || this;

    Object.getOwnPropertyNames(toConvert).forEach((prop) => {
      const val = toConvert[prop];
      // don't include those
      if (prop === "toJSON" || prop === "constructor") {
        return;
      }
      if (typeof val === "function") {
        jsoned[prop] = val.bind(this);
        return;
      }
      jsoned[prop] = val;
      const proto = Object.getPrototypeOf(toConvert);
      if (proto !== null) {
        Object.keys(this.toJSON(proto)).forEach((key) => {
          if (!!jsoned[key] || key === "constructor" || key === "toJSON")
            return;
          if (typeof proto[key] === "function") {
            jsoned[key] = proto[key].bind(this);
            return;
          }
          jsoned[key] = proto[key];
        });
      }
    });
    return jsoned;
  }
}
