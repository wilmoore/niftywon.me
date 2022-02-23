import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import styled from '@emotion/styled'
import TodayIcon from '@mui/icons-material/Today';
import TwitterIcon from '@mui/icons-material/Twitter'
import { address, bio, email, name, phone, photo } from '../id'
import { Avatar, Divider, Paper } from '@mui/material'
import { Link } from '../Link'

const Tree = styled(Paper)`
  height: 10vh;
  margin-bottom: 3vh;
  padding: 0 3vh;
  line-height: 3vh;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3vw;
`

const Contact = styled.div`
  padding-bottom: 3vh;
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
  padding-top: 1vh;
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
  padding: 0.3em;
`

export const Vcard = () => {
  return (
    <div>
      <Name>{name}</Name>
      <Title>
        CTO @ <Link href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20198007190&entityId2=20198007190&fileId=20198007190&srchTyp=ENTITY&joisuurunjbrzhtqilvqlnw65a=z23bgttikjeprpsriz6hcqoyca">Polyglot, LLC</Link>
      </Title>
      <Bio>{bio}</Bio>
      <PictureFrame>
        <Avatar
          alt={name}
          src={photo}
          sx={{ width: 168, height: 168 }}
        />
      </PictureFrame>

      <List>
        <ListItem>
          <IconButton href='https://calendly.com/wilmoore' target='_blank' rel='noopener noreferrer nofollow'>
            <TodayIcon />
          </IconButton>
        </ListItem>

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
          <IconButton href='https://twitter.com/intent/follow?screen_name=DevRealEngineer' target='_blank' rel='noopener noreferrer nofollow'>
            <TwitterIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://instagram.com/wm3v21/' target='_blank' rel='noopener noreferrer nofollow'>
            <InstagramIcon />
          </IconButton>
        </ListItem>
      </List>

      <Contact>
        <Link href={`mailto:${email}`}>{email}</Link>
        <div>{phone}</div>
        <div>{address}</div>
      </Contact>

      <Divider textAlign="left" sx={{ paddingBottom: '3vh', fontSize: '0.8em', fontWeight: 'bold' }}>QRCODE / VCARD</Divider>

      <Link href="/index.vcf">
        <img src='/index.vcf.qrcode.png' style={{ width: '300px', height: '300px' }} alt='QrCode' />
      </Link>

      <Divider textAlign="left" sx={{ paddingBottom: '3vh', fontSize: '0.8em', fontWeight: 'bold' }}>LINKS</Divider>
      <div>
        <Tree elevation={3}>
          <Link href="https://www.getrevue.co/profile/devrealengineer">The Harsh Truth Newsletter :: Software Developer Interviews</Link>
        </Tree>

        <Tree elevation={3}>
          <Link href=" https://git.io/fhhRI">Resume</Link>
        </Tree>
      </div>

      <Divider sx={{ paddingBottom: '3vh', fontSize: '0.8em', fontWeight: 'bold' }} />
      <div>⪼ Made with 💜 by realpolyglot.dev</div>
    </div>
  )
}

export default Vcard
