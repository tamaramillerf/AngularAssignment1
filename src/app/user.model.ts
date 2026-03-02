// User information
export class User {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  // Combine the names into a single string
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Adds specific dashboard data
export class UserProfile extends User {
  constructor(
    firstName: string,
    lastName: string,
    public age: number,
    public bio: string,
    public profilePicture: string,
    public isOnline: boolean = false
  ) {
    // Calls the constructor of the base User class
    super(firstName, lastName);
  }
}