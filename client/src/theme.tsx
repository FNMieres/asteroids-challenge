import React from "react";
import { createTheme } from "@mui/material/styles";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RouterLink ref={ref} to={href} {...other} />;
});

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default defaultTheme;
