export interface UserModel {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    location: UserLocationModel;
}

interface UserLocationModel {
    city: string;
    country: string;
    state: string;
    street: string;
    timezone: string;
}