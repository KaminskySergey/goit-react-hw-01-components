import styled from '@emotion/styled'

export const Table = styled.table`
width: 700px;
border: 3px solid;
border-collapse: collapse;
margin: ${p => p.theme.space[4]}px;
box-shadow: ${p => p.theme.shadows.box};
`
export const TableName = styled.th`
border: 2px solid;
padding: ${p => p.theme.space[2]}px;
font-weight: ${p => p.theme.fontWeights.bold};
background-color: ${p => p.theme.colors.backgroundColor};
`
export const TableIContainerInfo = styled.tr`
background-color: ${p => p.theme.colors.border};
    :nth-child(2n-1){
        background-color: ${p => p.theme.colors.primary};
    }
`

export const TableInfo = styled.td`
    font-weight: ${p => p.theme.fontWeights.normal};
    padding: ${p => p.theme.space[2]}px;
    outline: 1px solid black;
    text-align: center;
    
`

