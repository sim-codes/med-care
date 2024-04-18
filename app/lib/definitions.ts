export type Patient = {
    id: number;
    full_name: string;
    gender: Array<string>;
    status: Array<string>;
    school_id: number;
    school_role: Array<string>;
};

export type APIData = {
    results: Array<Patient>;
    pages: number;
    next: string;
    previous: string;
};