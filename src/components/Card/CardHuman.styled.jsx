// import styled from 'styled-components';
import styled from '@emotion/styled'


// export const Container = styled.div`
// /* display: flex;
// justify-content: center;
// align-items: center; */
// `;


export const Profile = styled.div`
background-color: rgb(114, 15, 220);
    width: 250px;
    height: 300px;
    margin: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-radius: 10px;
    cursor:pointer;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
`;

export const Avatar = styled.img`
width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${p => p.theme.colors.border};
    margin-bottom: 20px;
`;

export const FirstName = styled.p`
color: ${p => p.theme.colors.text};
font-size: ${p => p.theme.space[4]}px;
font-weight: 700;
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Tag = styled.p`
font-size: ${p => p.theme.space[3]}px;
font-weight: 500;
text-decoration: underline;
color: ${p => p.theme.colors.red};
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Location = styled.p`
font-size: ${p => p.theme.space[3]}px;
font-weight: 500;
`;

export const ListStats = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
`;

export const ItemStats = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
outline: 1px solid ${p => p.theme.colors.border};
`;

export const LabelItem = styled.span`
color: ${p => p.theme.colors.white};
margin-bottom: 4px;
`

export const Quantity = styled.span`
color: ${p => p.theme.colors.red}
`;