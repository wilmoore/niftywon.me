import * as React from 'react';
 
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import styled from '@emotion/styled'
import FacebookIcon from '@mui/icons-material/Facebook';
import { address, bio, email, name, phone, photo, /* role */ } from '../id'
import { Avatar, Dialog, DialogTitle, Divider, Slide } from '@mui/material'
import { Link } from '../Link'
import Button from '@mui/material/Button';

import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';

import { TransitionProps } from '@mui/material/transitions';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import contact from '../me.json'

const profileTypeToIcon: Record<string, any> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  stackoverflow: StackedBarChartIcon,
  facebook: FacebookIcon,
  medium: RssFeedIcon,
};

const Contact = styled.div`
  padding-bottom: 3vh;
`

const Name = styled.span`
  display: block;
  font-size: 2.1em;
  padding-top: 3vh;
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

      <div>
        <IconButton onClick={handleClickOpen}>
          <QrCodeScannerIcon />
        </IconButton>
      </div>

      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <PictureFrame>
        <Avatar
          alt={name}
          src={photo}
          sx={{ width: 168, height: 168 }}
        />
      </PictureFrame>

      <List>
        {contact.profiles.map((profile) => {
          const IconComponent = profileTypeToIcon[profile.type] ?? HelpCenterIcon;

          return (
            <ListItem>
              <IconButton href={profile.uri} target='_blank' rel='noopener noreferrer nofollow'>
                <IconComponent />
              </IconButton>
            </ListItem>
          )
        })}
      </List>

      <Contact>
        <Link href={`mailto:${email}`}>{email}</Link>
        <div>{phone}</div>
        <div>{address}</div>
      </Contact>

      <Divider textAlign="left" sx={{ paddingBottom: '3vh', fontSize: '0.8em', fontWeight: 'bold' }}>LINKS</Divider>

      <Button sx={{ marginBottom: '1em', justifyContent: 'left' }} fullWidth variant="text" size="large" startIcon={<SchoolIcon />} href=" https://git.io/fhhRI" target="_blank">
        Resume
      </Button>

      <Button sx={{ marginBottom: '1em', justifyContent: 'left' }} fullWidth variant="text" size="large" startIcon={<ScheduleIcon />} href="https://calendly.com/wilmoore/30-minute-discovery-call" target="_blank">
        Junior Developer Mentorship
      </Button>

      <Button sx={{ marginBottom: '1em', justifyContent: 'left' }} fullWidth variant="text" size="large" startIcon={<GavelIcon />} href="https://calendly.com/wilmoore/30-minute-discovery-call" target="_blank">
        Contract Full-Stack Development
      </Button>
    </div>
  )
}

export default Vcard
