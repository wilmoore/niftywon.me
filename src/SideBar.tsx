import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Divider, Drawer } from '@mui/material';

const PictureFrame = styled.div`
  margin-left: 21%;
  margin-top: 2em;
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
  width: 21em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
`;

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: any;
  page: string;
};

export const SidebarContact = () => {
  return (
    <div>
      <PictureFrame>
        <Avatar
          alt="Wil (₩) Moore III"
          src="https://cloudup.com/cb5aQgld8gO+"
          sx={{ width: 168, height: 168 }}
        />
      </PictureFrame>

      <List>
        <ListItem>
          <IconButton href="https://github.com/wilmoore/" target="_blank" rel="noopener noreferrer nofollow">
            <GitHubIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href="https://linkedin.com/in/wilmoore" target="_blank" rel="noopener noreferrer nofollow">
            <LinkedInIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href="https://stackoverflow.com/users/128346/wil-moore-iii?tab=profile" target="_blank" rel="noopener noreferrer nofollow">
            <StackedBarChartIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href="https://instagram.com/wm3v21/" target="_blank" rel="noopener noreferrer nofollow">
            <InstagramIcon />
          </IconButton>
        </ListItem>

        <ListItem>
          <IconButton href="https://twitter.com/DevRealEngineer" target="_blank" rel="noopener noreferrer nofollow">
            <TwitterIcon />
          </IconButton>
        </ListItem>
      </List>

      <img src="https://cloudup.com/cCHXfUjwBAL+" alt="QrCode" />
      <Divider />
    </div>
  );
}

const Page = ({ page }: { page: string }) => {
  switch (page) {
    case 'contact':
      return <SidebarContact />;
    default:
      return <div>Page Not Found</div>;
	}
}

export const SideBar = ({ isOpen, setIsOpen, page }: SideBarProps) => {
  const side = 'left';

  return (
    <Drawer anchor={side} open={isOpen} onClose={ (ev, reason) => setIsOpen(false) }>
      <Container>
        <Page page={page} />
      </Container>
    </Drawer>
  );
}

export default SideBar;
