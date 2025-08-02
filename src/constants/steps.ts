import LandingPage from '../pages/LandingPage';
import PersonalInfo from '../pages/PersonalInfo';
import AddressDetails from '../pages/AddressDetails';
import VehicleInformation from '../pages/VehicleInformation';
import CoverageOptions from '../pages/CoverageOptions';
import ReviewQuote from '../pages/ReviewQuote';

export const STEP_COMPONENTS = [
    LandingPage,
    PersonalInfo,
    AddressDetails,
    VehicleInformation,
    CoverageOptions,
    ReviewQuote,
];

export const STEP_NAMES = [
    'Personal Information',
    'Address Details',
    'Vehicle Information',
    'Coverage Options',
    'Review & Quote'
];

export const TOTAL_STEPS = STEP_NAMES.length;
