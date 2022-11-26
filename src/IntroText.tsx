import styled from '@emotion/styled'

const IntroTextContainer = styled.div`
  max-width: 90%;
  padding-top: 8%;
  font-family: Cambon;
  font-weight: 600;
  font-size: 42px;
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
            <GradedText>Technical Writer & Full Stack Software Engineer</GradedText><span>&nbsp;💜</span>
        </div>
    </IntroTextContainer>
  )
}

export default IntroText