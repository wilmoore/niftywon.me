interface UnicodeLogoProps {
  code: string;
  symbol: string;
}

export const UnicodeLogo = ({ code, symbol }: UnicodeLogoProps) => {
  const href = `https://unicode-table.com/en/${code}/`;
  const logo = {
    letter: `https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg?${Date.now()}`,
    qrcode: 'https://cloudup.com/cCHXfUjwBAL+',
  };

  // const classNames = (isPlaying) ? 'spin' : '';
  const classNames = '';

  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <img id="unicode-logo" className={classNames} src={logo.letter} alt={symbol} />
      </a>
    </>
  )
};

export default UnicodeLogo;
