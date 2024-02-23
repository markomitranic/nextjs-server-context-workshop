export class User {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly cpr: string,
    ) {}
}

export type UserDto = {
    id: string;
    name: string;
}