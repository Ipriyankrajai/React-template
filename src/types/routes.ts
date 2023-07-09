export type Role = "Owner";

export type PublicRouteType = {
  path: string;
  component: JSX.Element;
}[];

export type PrivateRouteType = {
  path: string;
  component: JSX.Element;
  role: Role[];
};
