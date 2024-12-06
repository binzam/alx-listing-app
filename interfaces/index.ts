export interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}
