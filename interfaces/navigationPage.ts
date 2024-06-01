// interfaces/navigationPage.ts
export interface NavigationLink {
  _type: string;
  _ref: string;
}

export interface NavigationPage {
  _id: string;
  title: string;
  description?: string;
  links?: NavigationLink[];
}
