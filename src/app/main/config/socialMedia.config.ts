interface SocialMediaLink {
   name: string;
   link: string;
   iconPath: string;
   brightIcon: string;
   darkIcon: string;
   width?: number;
   height?: number;
}

const namePrefix: string = "Ikona";
const iconsPath: string = "social-media/";
const brightIconSuffix: string = "-bright";
const darkIconSuffix: string = "-dark";
const iconsHeight: number = 150;

export const socialMediaConfig: readonly SocialMediaLink[] = [
   {
      name: `${namePrefix} Facebook`,
      link: "https://facebook.com/opublikowani",
      iconPath: iconsPath,
      brightIcon: `facebook${brightIconSuffix}.svg`,
      darkIcon: `facebook${darkIconSuffix}.svg`,
      width: 94,
      height: iconsHeight
   },
   {
      name: `${namePrefix} Instagram`,
      link: "https://instagram.com/opublikowani",
      iconPath: iconsPath,
      brightIcon: `instagram${brightIconSuffix}.svg`,
      darkIcon: `instagram${darkIconSuffix}.svg`,
      width: 131,
      height: iconsHeight
   },
]