import styled from '@emotion/styled'

export const FriendItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    margin-bottom: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.backgroundColor};
    border-radius: 5px;
    padding: ${p => p.theme.space[1]}px;
    box-shadow: ${p => p.theme.shadows.box};
    outline: 2px solid ${p => p.theme.colors.border};
    cursor: pointer;

    
    
    &:last-child {
        margin-bottom: 0;
    }
    
` ;
    


export const IsOnline = styled.span`
display: block;
border-radius: 50%;
width: 10px;
height: 10px;
margin-right: ${p => p.theme.space[2]}px;
    background-color: ${props => {
        if(props.friends === true){
            return `green`;
        }
        return `red`
        
    }};
`

export const FriendImg = styled.img`
    margin-right: ${p => p.theme.space[3]}px;
`

export const FriendName = styled.p`
    font-size: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};

    
`