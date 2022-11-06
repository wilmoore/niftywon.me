import styled from '@emotion/styled'

const IntroTextContainer = styled.div`
  max-width: 80%;
  margin: 1.5%;
  font-family: Cambon;
  font-weight: 800;
  font-size: 52px;
  line-height: 60px;
  color: #fff;
`

const GradedText = styled.span`
  background: -webkit-linear-gradient(right,#ee0979,#ff6a00);
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const IntroText = () => {
  return (
    <IntroTextContainer>
        Hello. I'm a&nbsp;
        <div className="text-highlight">
            <GradedText>Life, Dating, &amp; Technology Coach</GradedText>
        </div>
    </IntroTextContainer>
  )
}

export default IntroText