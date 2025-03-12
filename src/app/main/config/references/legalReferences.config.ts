interface LegalRef {
   name: string;
   ref: string;
}

export const legalReferences: Record<string, LegalRef> = {
   privacyPolicy: { name: "Polityka prywatności", ref: "/polityka-prywatności" },
   cookiePolicy: { name: "Polityka cookies", ref: "/polityka-cookies" }
}