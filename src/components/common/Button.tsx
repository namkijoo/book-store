import { styled } from "styled-components";
import { ButtonSize, ColorKey, ButtonSheme } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonSheme;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  ...rest
}: Props) {
  return (
    <ButtonStyle
      size={size}
      scheme={scheme}
      disabled={disabled}
      isLoading={isLoading}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme]
      .backgroundColor}; // font-size를 background-color로 수정
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme, size }) => theme.button[size].padding};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
