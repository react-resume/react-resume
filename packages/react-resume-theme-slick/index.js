const defaultsDeep = require("lodash/defaultsDeep");

const COLORS = {
  main: "#333333",
  lead: "#939393",
};

const FONTS = {
  main: "Roboto, sans-serif",
};

module.exports = function(colors, fonts) {
  colors = defaultsDeep({}, colors, COLORS);
  fonts = defaultsDeep({}, fonts, FONTS);

  return {
    Document: {
      marginTop: "24px",
      marginBottom: "24px",
      fontFamily: fonts.main,
    },
    HTML: {
      H1: {
        fontSize: 30,
        margin: 0,
      },
      H2: {
        fontSize: 30,
        margin: 0,
      },
      // P: {
      //   color: colors.main,
      // },
    },
    Basics: {
      Name: {
        color: colors.main,
        fontWeight: "400",
      },
      Label: {
        color: colors.lead,
        margin: 0,
        marginTop: "5px",
        textTransform: "uppercase",
      },
    },
  };
};
