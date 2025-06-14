type Role = "Admin" | "Regular" | "Guest";
type PlatformUser = IAdmin | IRegularUser | IGuestUser;
interface BaseUser {
  readonly id: string;
  name: string;
}

interface IAdmin extends BaseUser {
  permissions: string[];
  type: Role;
}
interface IRegularUser extends BaseUser {
  posts: string[];
  type: Role;
}
interface IGuestUser extends BaseUser {
  isTrial: boolean;
  type: Role;
}
interface IPlatformUser {
  readonly id: string;
  name: string;
  permissions?: string[];
  posts?: string[];
  isTrial?: boolean;
  type: Role;
}
class AdminUser implements IAdmin {
  constructor(
    public id: string,
    public name: string,
    public permissions: string[],
    public type: Role
  ) {}
  getDisplayInfo(): void {
    console.log(`${this.name}-${this.type}`);
  }
}
class RegularUser implements IRegularUser {
  constructor(
    public id: string,
    public name: string,
    public posts: string[],
    public type: Role
  ) {}
  getDisplayInfo(): void {
    console.log(`${this.name}-${this.type}`);
  }
}
class GuestUser implements IGuestUser {
  constructor(
    public id: string,
    public name: string,
    public isTrial: boolean,
    public type: Role
  ) {}
  getDisplayInfo(): void {
    console.log(`${this.name}-${this.type}`);
  }
}
class User implements IPlatformUser {
  constructor(public id: string, public name: string, public type: Role) {}
}
function isAdmin(platformUser: unknown): platformUser is IAdmin {
  return (platformUser as IAdmin).permissions !== undefined;
}
