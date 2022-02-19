import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #227EFF;
    padding: 20px;
`

export const CheckOutImageContainer = styled.div`
    width: 100%;
`

export const CheckOutImage = styled.img`
    width: 40%;
`

export const TopDivv = styled.div`
    width: 100%;
`

export const ToHome = styled.button`
    padding: 6px 20px;
    color: #227EFF;
    bottom: 20px;
    background-color: #fff;
    width: 100%;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`

export const SuccessMessage = styled.p`
    width: 100%;
    color: #fff;
    margin-bottom: 0;
    font-weight: 600;
`