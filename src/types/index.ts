export interface PersonalInfoData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
}

export interface AddressDetailsData {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface VehicleInformationData {
    year: string;
    make: string;
    model: string;
    vin: string;
}

export interface CoverageOptionsData {
    coverageType: string;
    liabilityLimits: string;
    collisionDeductible: string;
}

export interface FormData extends PersonalInfoData, AddressDetailsData, VehicleInformationData, CoverageOptionsData { }
