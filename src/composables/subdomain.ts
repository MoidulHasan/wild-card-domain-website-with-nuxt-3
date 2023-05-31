import type { Profiles } from "~~/src/utils/types";

export const useSubdomain = () => useState<string>("subdomain", () => null);
export const useSubdomainProfile = () =>
	useState<Profiles>("subdomain-profile", () => null);
