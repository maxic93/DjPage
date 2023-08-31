import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
border-bottom: 2px solid #8E8681;
padding: 10px;
@media (max-width: 950px) {
    font-size: .9rem;
  }
`

export const TitleContainer = styled.div`
padding: 5px;
`

export const Content = styled.div`
padding: 5px;
display: flex;
img {
    width: 250px;
    height: 200px;
    padding: 10px;
    @media (max-width: 800px) {
        width: 125px;
        height: 100px;
        padding: 5px;
    }
}
`

export const TextContainer = styled.div`
span {
    color: #635E5C;
    padding: 4px;
}
i {
    color: #635E5C;
}
`

export const Text = styled.div`

`