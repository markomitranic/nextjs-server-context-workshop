import { createServerContext } from "@/CreateServerContext/createServerContext";

export const LocaleServerContext = createServerContext<string | null>(null);
