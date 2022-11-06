import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export const JobTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="button" component="span" sx={{
      fontWeight: 'bold',
    }}>
      {children}
    </Typography>
  )
}

export const WorkHistory = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="subtitle2" color="text.secondary">MAR 2022<br />PRESENT</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <JobTitle>
            Sabbatical
          </JobTitle>
          <Typography><Link color="secondary" underline="none" target="_blank" rel="noreferrer" href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20198007190&entityId2=20198007190&fileId=20198007190&srchTyp=ENTITY&joisuurunjbrzhtqilvqlnw65a=z23bgttikjeprpsriz6hcqoyca">Polyglot, LLC</Link></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          >AUG 2021<br />MAR 2022</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <JobTitle>Consulting & Freelance Software Development</JobTitle>
          <Typography variant="subtitle2"><Link color="secondary" underline="none" target="_blank" rel="noreferrer" href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20198007190&entityId2=20198007190&fileId=20198007190&srchTyp=ENTITY&joisuurunjbrzhtqilvqlnw65a=z23bgttikjeprpsriz6hcqoyca">Polyglot, LLC</Link></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >APR 2021<br />AUG 2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <JobTitle>
            Developer Relations Engineer
          </JobTitle>
          <Typography variant="subtitle2">Electric Coin Company [Zcash]</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          >Jun 2020<br />Mar 2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <JobTitle>
            Sabbatical
          </JobTitle>
          <Typography variant="subtitle2"><Link color="secondary" underline="none" target="_blank" rel="noreferrer" href="https://www.sos.state.co.us/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20198007190&entityId2=20198007190&fileId=20198007190&srchTyp=ENTITY&joisuurunjbrzhtqilvqlnw65a=z23bgttikjeprpsriz6hcqoyca">Polyglot, LLC</Link></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >APR 2021<br />AUG 2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <JobTitle>
            Senior DevOps & Full-Stack Software Engineer
          </JobTitle>
          <Typography variant="subtitle2">Verizon Location Services</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default WorkHistory
