export type Patient = {
    id: number;
    full_name: string;
    gender: Array<string>;
    status: Array<string>;
    school_id: number;
    school_role: Array<string>;
    image: string;
};

export type APIData = {
    results: Array<Patient>;
    pages: number;
    next: string;
    previous: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    role: string;
};

export type TokenRequest = {
    access: string;
    refresh: string;
}