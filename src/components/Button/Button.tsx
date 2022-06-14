import { Link } from 'react-scroll';
import styled from 'styled-components';
import { colors, TransientStyled } from '~/styles';

type ButtonType = Pick<ButtonProps, 'big' | 'primary' | 'fontBig' | 'dark'>;

type ButtonStyledProps = TransientStyled<ButtonType>;

const StyledButton = styled(Link)<ButtonStyledProps>`
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  background-color: ${({ $primary }) => ($primary ? `${colors['primaryColor']}` : '#010606')};
  padding: ${({ $big }) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({ $dark }) => ($dark ? '#010606' : '#fff')};
  font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '16px')};
  &:hover {
    background-color: ${({ $primary }) => ($primary ? '#FFF' : `${colors.primaryColor}`)};
    transition: all 0.2s ease-in-out;
  }
`;

interface ButtonProps {
  to: string;
  primary: boolean;
  big?: boolean;
  fontBig?: boolean;
  dark: boolean;
  smooth: boolean;
  duration: number;
  spy: boolean;
  offset: number;
  children: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

export default function Button({
  primary,
  dark,
  big,
  fontBig,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <StyledButton $primary={primary} $dark={dark} $big={big} $fontBig={fontBig} {...restProps}>
      {children}
    </StyledButton>
  );
}
