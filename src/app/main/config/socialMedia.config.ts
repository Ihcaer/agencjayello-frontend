interface SocialMediaLink {
   name: string;
   link: string;
   iconPath: string;
   brightIcon: string;
   darkIcon: string;
}

const namePrefix: string = "Ikona";
const iconsPath: string = "social-media/";
const brightIconSuffix: string = "-bright";
const darkIconSuffix: string = "-dark";

export const socialMediaConfig: readonly SocialMediaLink[] = [
   {
      name: `${namePrefix} Facebook`,
      link: "https://facebook.com/opublikowani",
      iconPath: iconsPath,
      brightIcon: `facebook${brightIconSuffix}.svg`,
      darkIcon: `facebook${darkIconSuffix}.svg`
   },
   {
      name: `${namePrefix} Instagram`,
      link: "https://instagram.com/opublikowani",
      iconPath: iconsPath,
      brightIcon: `instagram${brightIconSuffix}.svg`,
      darkIcon: `instagram${darkIconSuffix}.svg`
   },
]