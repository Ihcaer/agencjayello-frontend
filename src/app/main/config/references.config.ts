interface Reference {
   name: string;
   path: string;
}

export const referencesConfig: readonly Reference[] = [
   { name: "O nas", path: "/o-nas" },
   { name: "Blog", path: "/blog" },
   { name: "Case Studies", path: "/case-studies" }
]