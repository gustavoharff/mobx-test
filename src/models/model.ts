export abstract class Model<T extends object> {

  protected data: T;

  constructor(data: T) {
    this.data = data;
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

}
