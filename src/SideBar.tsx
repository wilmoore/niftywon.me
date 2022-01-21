import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import styled from '@emotion/styled'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Avatar, Divider, Drawer } from '@mui/material'
import { Link } from './Link'

const LinksContainer = styled.div`
  a {
    color: #b33bb3;
  }
`

const ContactContainer = styled.div`
  a {
    text-decoration: none;
  }
`
const Contact = styled.div`
  padding-bottom: 3vh;

  a {
    color: #000;
    font-weight: bold;
  }
`

const Name = styled.span`
  display: block;
  font-size: 2.1em;
  padding-top: 3vh;
`

const Title = styled.div`
  padding-top: 1vh;
  font-weight: bold;
`

const Bio = styled.div`
  font-size: 0.9em;
  font-style: italic;
`

const PictureFrame = styled.div`
  padding-top: 3vh;
  margin-left: 27%;
`

const List = styled.ul`
  list-style-type: none;
  line-height: 3em;
  padding: 0;
`

const ListItem = styled.li`
  display: inline;
  padding: 0.5em;
`

const Container = styled.div`
  width: 24em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: 1vw;
`

interface SideBarProps {
  isOpen: boolean
  setIsOpen: any
  page: string
};

export const SidebarContact = () => {
  return (
    <ContactContainer className="h-card vcard">
      <Name className="fn">Wil (₩) Moore III</Name>
      <Title className="note">
        Founder @ <Link href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20198007190&entityId2=20198007190&fileId=20198007190&srchTyp=ENTITY&joisuurunjbrzhtqilvqlnw65a=z23bgttikjeprpsriz6hcqoyca">Polyglot, LLC</Link>
      </Title>
      <Bio className="note">... building fairly _nifty_ web3 & mobile apps, digital products, & websites 💜🌈🦄</Bio>
      <PictureFrame>
        <Avatar
          alt="Wil (₩) Moore III"
          className="photo"
          src="https://cloudup.com/cb5aQgld8gO+"
          sx={{ width: 168, height: 168 }}
        />
      </PictureFrame>

      <List>
        <ListItem>
          <IconButton href='https://github.com/wilmoore/' target='_blank' rel='noopener noreferrer nofollow'>
            <GitHubIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://linkedin.com/in/wilmoore' target='_blank' rel='noopener noreferrer nofollow'>
            <LinkedInIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://stackoverflow.com/users/128346/wil-moore-iii?tab=profile' target='_blank' rel='noopener noreferrer nofollow'>
            <StackedBarChartIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://instagram.com/wm3v21/' target='_blank' rel='noopener noreferrer nofollow'>
            <InstagramIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://twitter.com/DevRealEngineer' target='_blank' rel='noopener noreferrer nofollow'>
            <TwitterIcon />
          </IconButton>
        </ListItem>
      </List>

      <Contact>
        <a className="email" href="mailto:wil.moore@wilmoore.com">wil.moore@wilmoore.com</a>
        <div className="tel">+1.303.944.4251</div>
        <div className="adr">1317 Edgewater Dr, Suite 3326, Orlando FL 32804</div>
      </Contact>

      <LinksContainer>
        <Divider />
          <div><Link href="https://www.swanbitcoin.com/crypt0won">Bitcoin</Link></div>
        <Divider />
          <div><Link href="https://www.gemini.com/share/4qqvnavfl">Get $10 of bitcoin after you buy or sell $100 @ Gemini</Link></div>
        <Divider />
          <div><Link href="https://join.robinhood.com/wilberm-84791d/">Get a free stock @ Robinhood</Link></div>
        <Divider />
          <div><Link href="https://share.acorns.com/zones/friend_landing_experience_microsite?extole_share_channel=SHARE_LINK&extole_shareable_code=7Q3J79">Get $5 @ Acorns</Link></div>
        <Divider />

        <img src='/index.vcf.qrcode.png' alt='QrCode' />
        <Divider />
      </LinksContainer>

      <div>⪼ Made with 💜 by realpolyglot.dev</div>
    </ContactContainer>
  )
}

const Page = ({ page }: { page: string }) => {
  switch (page) {
    case 'contact':
      return <SidebarContact />
    default:
      return <div>Page Not Found</div>
  }
}

export const SideBar = ({ isOpen, setIsOpen, page }: SideBarProps) => {
  const side = 'left'

  return (
    <Drawer anchor={side} open={isOpen} onClose={(ev, reason) => setIsOpen(false)}>
      <Container>
        <Page page={page} />
      </Container>
    </Drawer>
  )
}

export default SideBar
