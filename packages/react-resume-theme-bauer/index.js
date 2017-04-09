const defaultsDeep = require("lodash/defaultsDeep");

const COLORS = {
  main: "#333333",
  lead: "#939393",
};

const FONTS = {
  body: "Roboto, sans-serif",
  header: "Avenir Next",
};

module.exports = function(colors, fonts) {
  colors = defaultsDeep({}, colors, COLORS);
  fonts = defaultsDeep({}, fonts, FONTS);

  return {
    Document: {
      marginTop: "24px",
      marginBottom: "24px",
      fontFamily: fonts.body,
    },
    HTML: {
      H1: {
        fontSize: 30,
        margin: 0,
        fontFamily: fonts.header,
      },
      H2: {
        fontSize: 30,
        margin: 0,
        fontFamily: fonts.header,
      },
      A: {
        textDecoration: "none",
      },
      P: {
        marginTop: 5,
        marginBottom: 0,
      },
    },
    Basics: {
      Name: {
        color: colors.main,
        fontWeight: "400",
        marginBottom: 12,
      },
      Label: {
        color: colors.lead,
        margin: 0,
        marginTop: "5px",
        textTransform: "uppercase",
      },
      Location: {
        color: colors.main,
        fontFamily: fonts.header,
        fontWeight: "300",
        fontSize: 12,
      },
      Email: {
        color: colors.main,
        fontFamily: fonts.header,
        fontWeight: "300",
        fontSize: 12,
      },
      Website: {
        color: colors.main,
        fontFamily: fonts.header,
        fontWeight: "300",
        fontSize: 12,
      },
      Phone: {
        color: colors.main,
        fontFamily: fonts.header,
        fontWeight: "300",
        fontSize: 12,
      },
      Summary: {
        color: colors.main,
        fontFamily: fonts.body,
        fontWeight: "400",
        fontSize: 18,
        marginTop: 38,
        lineHeight: 1.3,
      },
      Profiles: {
        display: "flex",
        flexDirection: "row",
      },
      Profile: {
        marginRight: 18,
        fontSize: 15,
      },
    },
  };
};
