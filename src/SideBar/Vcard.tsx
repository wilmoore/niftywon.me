import * as React from 'react';
 
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import styled from '@emotion/styled'
import TodayIcon from '@mui/icons-material/Today'
import FacebookIcon from '@mui/icons-material/Facebook';
import { address, bio, email, name, phone, photo, role } from '../id'
import { Avatar, Dialog, DialogTitle, Divider, Paper, Slide } from '@mui/material'
import { Link } from '../Link'

import { TransitionProps } from '@mui/material/transitions';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

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


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Vcard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ margin: 'auto' }}>{"Scan To Save Contact To Phone"}</DialogTitle>
        <Link href="/me.vcf">
          <img src='/me.vcf.qrcode.png' style={{ width: '300px', height: '300px', padding: '1.25em' }} alt='QrCode' />
        </Link>
      </Dialog>

      <Name>{name}</Name>
      <Title>
        {role} @ <Link href="https://search.sunbiz.org/Inquiry/CorporationSearch/ConvertTiffToPDF?storagePath=COR%5C2022%5C1101%5C60890336.tif&documentNumber=L22000466252">WinnersOnly, LLC</Link>
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
          <IconButton onClick={handleClickOpen}>
            <QrCodeScannerIcon />
          </IconButton>
        </ListItem>
                 
        <ListItem>
          <IconButton href='https://stackoverflow.com/users/128346/wil-moore-iii?tab=profile' target='_blank' rel='noopener noreferrer nofollow'>
            <StackedBarChartIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://www.facebook.com/coachwil.help' target='_blank' rel='noopener noreferrer nofollow'>
            <FacebookIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href='https://www.instagram.com/coachwil.help/' target='_blank' rel='noopener noreferrer nofollow'>
            <InstagramIcon />
          </IconButton>
        </ListItem>
      </List>

      <Contact>
        <Link href={`mailto:${email}`}>{email}</Link>
        <div>{phone}</div>
        <div>{address}</div>
      </Contact>

      <Divider textAlign="left" sx={{ paddingBottom: '3vh', fontSize: '0.8em', fontWeight: 'bold' }}>MY SERVICES</Divider>
      <div style= {{ color: 'white' }}>
        <Tree sx={{ backgroundColor: 'black' }} elevation={3}>
          <Link href=" https://calendly.com/wilmoore/30-minute-discovery-call">Life & Dating Coaching</Link>
        </Tree>
        <Tree sx={{ backgroundColor: 'gray' }} elevation={3}>
          <Link href=" https://calendly.com/wilmoore/30-minute-discovery-call">Software Developer Mentorship</Link>
        </Tree>
        <Tree sx={{ backgroundColor: 'black' }} elevation={3}>
          <Link href=" https://calendly.com/wilmoore/30-minute-discovery-call">Contract Full-Stack Development</Link>
        </Tree>        
        <Tree sx={{ backgroundColor: 'gray' }} elevation={3}>
          <Link href=" https://git.io/fhhRI">Resume</Link>
        </Tree>
      </div>

    </div>
  )
}

export default Vcard
