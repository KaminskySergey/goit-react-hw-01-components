import styled from '@emotion/styled'


export const Title = styled.h2`
    font-size: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.text};
    padding: ${p => p.theme.space[4]}px;
`

export const StatsList = styled.ul`
    display: flex;
    width: 100%;

`


export const ItemStats = styled.li`
    background: ${p => p.backgroundColor};
    width: 60px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${p => p.theme.space[1]}px;
    border: 2px solid black;

`
export const LabelFormat = styled.span`
    margin-bottom: ${p => p.theme.space[1]}px;
    color: ${p => p.theme.colors.white}
`