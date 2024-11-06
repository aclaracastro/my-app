import React from "react";
import styled from "styled-components";

const Card = styled.div `
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    max-width: 300px;
    text-aling: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h2`
    color: #333;
    margin-botton: 10px;
`;
const Content = styled.p`
    color: #666;
`;

const StyledCard = () => {
    return(
        <>
            <Card>
                <Title>Título do card</Title>
                <Content>
                    Este é o conteúdo do card, estabilizado
                </Content>
            </Card>
        </>
    );
};

export default StyledCard;