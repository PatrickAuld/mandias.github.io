import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import CameraIcon from "@material-ui/icons/PhotoCamera"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import { Box, Paper, Divider } from "@material-ui/core"
import SplashImage from "./splash-image.jpg"
import HeadshotImage from "./headshot.jpg"
import { createMuiTheme } from "@material-ui/core/styles"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  heroBox: {
    margin: 0,
    padding: 0,
    display: "grid",
    height: "100%",
  },
  heroImage: {
    position: "relative",
    height: "800px",
    width: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroTitle: {
    textAlign: "right",
    paddingRight: "8px",
  },
  heroText: {
    position: "absolute",
    bottom: "15%",
    paddingLeft: "5%",
    color: theme.palette.background.paper,
  },
  aboutBox: {},
  aboutContainer: {
    backgroundColor: theme.palette.background.paper,
  },
  aboutHeadshot: {
    borderRadius: "50%",
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    alignContent: "center",
  },
  aboutText: {},
  contactBox: {
    backgroundColor: theme.palette.background.default,
  },
}))

function MainFooter(props: { classes: { footer: string } }) {
  return (
    <footer className={props.classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Mandias
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        See Systems
      </Typography>
      <Copyright />
    </footer>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mandias.xyz/">
        Mandias
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  )
}

class ContactDetail extends React.Component {
  render() {
    return (
      <Box minWidth="220px" minHeight="80px">
        <Paper elevation={1}>
          <Typography variant="h5" align="center" color="textPrimary">
            {this.props.title}
          </Typography>
          <Divider variant="middle" />
          <Typography align="center" color="textSecondary">
            <Link href={this.props.linkHref}>{this.props.link}</Link>
          </Typography>
        </Paper>
      </Box>
    )
  }
}

{/* Main splash screen and motto */}
class Hero extends React.Component {
  render() {
    return (
      <Box className={this.props.classes.heroBox}>
        <Container>
          <BackgroundImage
            className={this.props.classes.heroImage}
            fluid={this.props.heroImage.fluid}
          >
            <Link color="primary" href="https://mandias.xyz/">
              <Typography
                className={this.props.classes.heroTitle}
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Mandias
              </Typography>
            </Link>
            <Typography
              className={this.props.classes.heroText}
              component="h2"
              variant="h2"
              align="left"
              gutterBottom
            >
              Leaders work in Systems
            </Typography>
          </BackgroundImage>
        </Container>
      </Box>
    )
  }
}

{/* Site and offering description */}
class AboutPatrick extends React.Component {
  render() {
    return (
      <Box className={this.props.classes.aboutBox}>
        <Container>
          <Grid
            container
            className={this.props.classes.aboutContainer}
            spacing={2}
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <Img
                className={this.props.classes.aboutHeadshot}
                fluid={this.props.headshotImage.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Get coaching on maximizing systems, projects, organizational
                changes, and architecture.
              </Typography>
                <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Evolving your offerings to meet changing needs impacts more than
                your tech stack. Understanding the interactions between
                individuals, teams, and groups gives you the insights required
                to empathically make changes.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}
{/* Contact info 3 box */}
class ContactInfo extends React.Component {
  render() {
    return (
      <Box className={this.props.classes.contactBox}>
        <Container>
          <Typography variant="h4" align="center">
            Contact
          </Typography>
          <p />
          <Grid container spacing={2} justify="center">
            <Grid item>
              <ContactDetail
                title="Email"
                link="patrick@patrickauld.com"
                linkHref="mailto:patrick+mandias@patrickauld.com"
              />
            </Grid>
            <Grid item>
              <ContactDetail
                title="LinkedIn"
                link="/in/PatrickAuld"
                linkHref="https://linkedin.com/in/patrickauld"
              />
            </Grid>
            <Grid item>
              <ContactDetail
                title="Twitter"
                link="@PatrickAuld"
                linkHref="https://twitter.com/patrickauld"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}

export default function HomePage() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
  query PageQuery {
    headshotImage: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImage: file(relativePath: { eq: "splash-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <React.Fragment>
      <React.StrictMode>
        <CssBaseline />
        <main>
          <Hero classes={classes} heroImage={data.heroImage.childImageSharp} />

          {/* TODO Figure out padding */}
          <Box>
            <Container>
              <Typography>
                <p />
              </Typography>
            </Container>
          </Box>

          {/* about Patrick */}
          <AboutPatrick classes={classes} headshotImage={data.headshotImage.childImageSharp} />

          {/* TODO Figure out padding */}
          <Box>
            <Container>
              <Typography>
                <p />
              </Typography>
            </Container>
          </Box>

          {/* Contact */}
          <ContactInfo classes={classes} />
        </main>

        {/* Footer */}
        <MainFooter classes={classes} />
        {/* End footer */}
      </React.StrictMode>
    </React.Fragment>
  )
}
