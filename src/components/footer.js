import React from "react"
import styled from "@emotion/styled"
import Row from "./Row"
import { css } from "@emotion/core"
import {
  IoIosMap,
  IoIosClock,
  IoMdCall,
  IoIosMail,
  IoIosArrowForward,
} from "react-icons/io"

const FooterRow = styled(Row)({
  width: "100%",
  maxWidth: "100%",
  background: "#eee",
  padding: "50px 0 20px",
})

const FooterTop = styled(Row)({
  display: "flex",
})

const FooterCol = styled.div({
  flex: "1 1 25%",
  paddingRight: "20px",
})
const iconStyle = css({
  color: "#ED1C24",
  width: 20,
  height: 20,
  position: "absolute",
  left: 0,
  top: 5,
})

const FooterItem = styled.li({
  listStyleType: "none",
  lineHeight: "30px",
  position: "relative",
  paddingLeft: "30px",
  paddingBottom: "10px",
  fontSize: "14px",
  a: {
    color: "#000",
    textDecoration: "none",
  },
})

const FooterBottom = styled(Row)({})

const P = styled.p({
  textAlign: "center",
})

const Disclaimer = styled.p({
  fontSize: "13px",
  textAlign: "center",
  lineHeight: "20px",
})

const Footer = () => {
  return (
    <FooterRow>
      <FooterTop>
        <FooterCol>
          <h4>Office</h4>
          <FooterItem>
            <IoIosMap css={iconStyle} />
            129A Watton Street Werribee Victoria 3030, Australia
          </FooterItem>
          <FooterItem>
            <IoIosMap css={iconStyle} />
            1/4A Bessemer St, Blacktown NSW 2148
          </FooterItem>
        </FooterCol>
        <FooterCol>
          <h4>Get In Touch</h4>
          <FooterItem>
            <IoIosMail css={iconStyle} />
            <a href="mailto:info@makemywebsite.com.au">
              info@makemywebsite.com.au
            </a>
          </FooterItem>
          <FooterItem>
            <IoMdCall css={iconStyle} />
            <a href="tel:1300769302">1300769302</a>
          </FooterItem>
        </FooterCol>
        <FooterCol>
          <h4>Business Hours</h4>
          <FooterItem>
            <IoIosClock css={iconStyle} />
            <span>
              Mon-Fri : 9:00am - 7:00pm <br />
              Sat : 9:00am - 1:00pm <br />
              Sun : Closed
            </span>
          </FooterItem>
        </FooterCol>
        <FooterCol>
          <h4>Our Services</h4>
          <FooterItem>
            <IoIosArrowForward css={iconStyle} />
            Web Designing
          </FooterItem>
          <FooterItem>
            <IoIosArrowForward css={iconStyle} />
            Online Marketing
          </FooterItem>
          <FooterItem>
            <IoIosArrowForward css={iconStyle} />
            Web and Email Hosting
          </FooterItem>
          <FooterItem>
            <IoIosArrowForward css={iconStyle} />
            Ecommerce
          </FooterItem>
          <FooterItem>
            <IoIosArrowForward css={iconStyle} />
            Search Engine Optimisation (SEO)
          </FooterItem>
        </FooterCol>
      </FooterTop>
      <FooterBottom>
        <Disclaimer>
          Make My Website offers the money back guarantee if you are not happy
          with the 1st draft of your website or you change your mind within 14
          days. However, there is no refund after this stage.
        </Disclaimer>
        <P>
          © {new Date().getFullYear()}, Make My Website. All Rights Reserved.
        </P>
      </FooterBottom>
    </FooterRow>
  )
}

export default Footer
