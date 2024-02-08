import { EContacts } from "./types";

export const useContacts = () => {
  const redirectTo = (type: EContacts) => {
    switch (type) {
      case EContacts.GITHUB:
        window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE);
        break;
      case EContacts.LINKEDIN:
        window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE);
        break;
      default:
        break;
    }
  };

  return { redirectTo };
};
