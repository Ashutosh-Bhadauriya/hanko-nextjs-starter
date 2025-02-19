import { HankoAuthElementProps, HankoProfileElementProps } from "@teamhanko/hanko-elements";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
        'hanko-auth': HankoAuthElementProps;
        'hanko-profile': HankoProfileElementProps;
    }
  }
}
