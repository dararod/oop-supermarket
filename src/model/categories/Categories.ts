export class Categories {
    private _name: string;
    private _description: string;
    private _slug: string;
  
    constructor(name: string, description: string, slug: string) {
      this._name = name;
      this._description = description;
      this._slug = slug
    }
  
    get name(): string {
      return this._name;
    }
  
    get description(): string {
      return this._description;
    }
  
    get slug(): string {
      return this._slug;
    }
  
    set name(name: string) {
      this._name = name;
    }
  
    set description(description: string) {
      this._description = description;
    }
  
    set slug(slug: string) {
      this._slug = slug;
    }
  }
  